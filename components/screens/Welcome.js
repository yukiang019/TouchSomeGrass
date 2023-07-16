import React, { useState, useEffect } from 'react';
//import { useNavigation } from "@react-navigation/core";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { auth, firestore} from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ConfettiCannon from 'react-native-confetti-cannon';
import Confetti from 'react-native-confetti';
import { collection, addDoc, query, orderBy, onSnapshot, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Audio } from 'expo-av';

//import { auth } from '../firebase';
// export default function Welcome({navigation}) { 
//   return (
//     <View style={styles.container}>
//       <Image source={{uri: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b4/Oak_JE14.png/revision/latest?cb=20211231031829'}}
//        style= {styles.pic} />
//        <Text style={styles.mainText}>TouchSomeGrass🌱</Text>
//        <Text style={styles.subText}>EMPOWER. FLOURISH. HEAL.</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('LoginPage')} underlayColor= "white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Login</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//   );
// }


const Welcome = ({navigation}) => {

  // const navigation = useNavigation()
  const handleJournal = () => {
    navigation.navigate('Journal');
  }

  // const [points, setPoints] = useState(0);
  const [treeImage, setTreeImage] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setPoints] = useState(0);
  const [sound, setSound] = useState(null);

  const successSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('/Users/yukiangmacpro/Desktop/grass-final/sounds/success.mp3'),
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.log('Error playing end sound', error);
    }
  };  
  
  useEffect(() => {
    const treeImages = [
      require('../tree_images/tree_1.png'),
      require('../tree_images/tree_2.png'),
      require('../tree_images/tree_3.png'),
      require('../tree_images/tree_4.png'),
      require('../tree_images/tree_5.png'),
      require('../tree_images/tree_6.png'),
      require('../tree_images/tree_7.png'),
      require('../tree_images/tree_8.png'),
      require('../tree_images/tree_9.png'),
      require('../tree_images/tree_10.png'),
      require('../tree_images/tree_11.png'),
      require('../tree_images/tree_12.png')
    ];
  
    let currentTreeImage = null;
    let level = -1;
    //let score = loadPoints();
  
    // if (score >= 500) {
    //   currentTreeImage = treeImages[12];
    //   level = 12;
    // } else 
    if (score >= 550) {
      currentTreeImage = treeImages[11];
      level = 11;
    } else if (score >= 500) {
      currentTreeImage = treeImages[10];
      level = 10;
    } else if (score >= 450) {
      currentTreeImage = treeImages[9];
      level = 9;
    } else if (score >= 400) {
      currentTreeImage = treeImages[8];
      level = 8;
    } else if (score >= 350) {
      currentTreeImage = treeImages[7];
      level = 7;
    } else if (score >= 300) {
      currentTreeImage = treeImages[6];
      level = 6;
    } else if (score >= 250) {
      currentTreeImage = treeImages[5];
      level = 5;
    } else if (score >= 200) {
      currentTreeImage = treeImages[4];
      level = 4;
    } else if (score >= 150) {
      currentTreeImage = treeImages[3];
      level = 3;
    } else if (score >= 100) {
      currentTreeImage = treeImages[2];
      level = 2;
    } else if (score >= 50) {
      currentTreeImage = treeImages[1];
      level = 1;
    } else {
      currentTreeImage = treeImages[0];
    }
  
    setTreeImage(currentTreeImage);
  
    if ((score / 100 >= 0 && score / 100 < 10) && score > 0) {
      const levelText = level === 1 ? 'Sapling' : `Level ${level}`;
      // Alert.alert(`Congratulations! Your tree is growing! 💚`);
      successSound();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 3 seconds
    }
  }, [score]);
  

  const loadPoints = async () => {
    const user = auth.currentUser
    try {
      const userRef = doc(firestore, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        //const storedPoints = docSnap.data().points;
        setPoints(docSnap.data().points)
      }
      else {
        Alert.alert("points doesn't exist")
      }
      
    } catch (error) {
      console.log('Error loading points:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadPoints();
    }, [])
  );

  // const incrementPoints = async () => {
  //   try {
  //     // Increment points by 1
  //     const newPoints = points + 10;

  //     // Save the updated points to AsyncStorage
  //     await AsyncStorage.setItem('points', newPoints.toString());

  //     // Update the state with the new points
  //     setPoints(newPoints);
  //   } catch (error) {
  //     console.log('Error incrementing points:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.points} >Total Points: {score}</Text>
      {/* <Image source={{uri: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b4/Oak_JE14.png/revision/latest?cb=20211231031829'}}
       style= {styles.pic} /> */}
       {treeImage && (
        <Image source={treeImage} style={styles.treeImage} />
      )}
        {showConfetti && 
        <View style={styles.confettiContainer}>
        <ConfettiCannon 
          count={50}
          origin={{ x: 0, y: 0 }}
          explosionSpeed={1}
          fallSpeed={1500}
          fadeOut={true}
          colors={['#C1ECE4', '#FCAEAE', '#FFEADD']} /></View>}
       <Text style={styles.mainText}>keep growing!</Text>
       <Text style={styles.subText}>how are you feeling today?</Text>
       <TouchableOpacity
      onPress = {handleJournal} underlayColor= 'white'>
        <View style={styles.button}>
          <Text style={styles.buttonText}>write about it</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    paddingTop: 400,
    paddingBottom: 300,
    alignItems: 'center',
    backgroundColor: "darkseagreen"
  },
  treeImage: {
    width: 400,
    height: 400,
    bottom: 300,
    resizeMode: 'contain',
  },
  points: {
    top: -280,
    textAlign: 'center',
    fontFamily: 'poppinsSemiBold',
    fontSize: 25,
    padding: 10,
    color: 'lavenderblush',
  },
  button: {
    top: -220,
    // marginLeft: 210,
    width: 300,
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'olive',
  },
  mainText: {
    //textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'poppinsSemiBold',
    fontSize: 19,
    padding: 50,
    color: 'lavenderblush',
    position: 'absolute',
    top: 50,
  },
  subText: {
    textAlign: 'center',
    padding: 25,
    fontSize: 18,
    fontFamily: 'poppinsSemiBold',
    color: 'lavenderblush',
    position: 'absolute', 
    top: 570,
  },
  pic: {
    width: 300, 
    height: 350, 
    alignSelf: 'center',
    position: 'absolute', 
    top: 200,
  },
  confettiContainer: {
    position: 'absolute',
    top: 0, // Adjust the top position to control the confetti's starting point
    left: 0,
    right: 0,
    bottom: 500,
  },
});