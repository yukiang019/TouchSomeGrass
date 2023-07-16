import React, { useState, useEffect, useFocusEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView, 
  Pressable,
  TextInput,
  Alert
} from 'react-native';
import { auth, firestore } from '../firebase';
//import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, updateDoc, setDoc, getDoc} from '@firebase/firestore';

export default function Profile({navigation}) { 

  const saveUsername = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        // Save the username to AsyncStorage with a unique key
        // await AsyncStorage.setItem(`username_${userId}`, newName);
        const userRef = doc(firestore, "users", user.uid);

        await updateDoc(userRef, {
          username: newName, // Set initial value for username
        })
        // .then(() => {
        //   Alert.alert("hello world")
        //   // auth.signOut().then(() => {
        //   //   navigation.replace('LoginPage');
        //   // });
        // })
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        // Save the username to AsyncStorage with a unique key
        // await AsyncStorage.setItem(`username_${userId}`, newName);
        // Sign out the user
        auth.signOut().then(() => {
          navigation.replace('LoginPage');
        });
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const [image, setImage] = useState(null);
  const [newName, setNewName] = useState('');

  // const addImage= async () => {
  //   let _image = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4,3],
  //     quality: 1,
  //   });

  //   if (!_image.canceled) {
  //     setImage(_image.assets[0].uri);
  //   }
  // };

//   const addImage = async () => {
//     let _image = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!_image.canceled) {
//       setImage(_image.assets[0].uri);
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           await updateProfile(user, {
//             photoURL: _image.assets[0].uri,
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
// };

  useEffect(() => {
    const getUsername = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          // Retrieve the saved username from AsyncStorage using the unique key
          const userRef = doc(firestore, "users", user.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const u = docSnap.data().username;
            setNewName(u);
          } else {
            // docSnap.data() will be undefined in this case
            Alert.alert("no such document!")
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    getUsername();
  }, []);
  


return (
      <View style={styles.container}>
        <TextInput
          style={styles.name}
          onChangeText={title => setNewName(title)}
          
          defaultValue={newName}
          value={newName}
          placeholder='Enter your username'
          autoCapitalize='words'
        />
        <TouchableOpacity onPress={() => handleSignOut()} underlayColor= "white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveUsername()} underlayColor= "white">
          <View style={styles.saveButton}>
            <Text style={styles.buttonText}>Reset username</Text>
          </View>
        </TouchableOpacity>
        <Text style ={styles.subText}>EMPOWER. FLOURISH. HEAL.</Text>

            </View>
  );
}

// export const getUsername = async () => {
//   try {
//     // Retrieve the saved username from AsyncStorage
//     const savedUsername = await AsyncStorage.getItem('username');
//     if (savedUsername) {
//       // Set the retrieved username to the newName state
//       return savedUsername;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const styles = StyleSheet.create({
  container: {
    paddingTop: 400,
    paddingBottom: 300,
    alignItems: 'center',
    backgroundColor: "#C9DBB2"
    
  },
  imageContainer:{
    top: -200,
    elevation:2,
    height:200,
    width:200,
    backgroundColor:'#efefef',
    position:'relative',
    borderRadius:999,
    overflow:'hidden',
},
  uploadBtnContainer:{
    opacity:0.7,
    position:'absolute',
    right:0,
    bottom:0,
    backgroundColor:'lightgrey',
    width:'100%',
    height:'17%',
},
uploadBtn:{
    display:'flex',
    alignItems:"center",
    justifyContent:'center'
},
  button: {
    // marginBottom: 35,
    top: -30,
    width: 100,
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'olive',
    alignItems: 'center',
  },
  name: {
    top: -130,
    fontSize: 20,
    color: 'cadetblue',
    fontFamily: 'poppinsSemiBold',
  },
  saveButton: {
    backgroundColor: 'lavender',
    top: -160,
    width: 150,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    textAlign: 'center',
    padding: 25,
    fontSize: 20,
    fontFamily: 'poppinsSemiBold',
    color: 'lavenderblush',
    position: 'absolute', 
    top: 570,
  },
});

