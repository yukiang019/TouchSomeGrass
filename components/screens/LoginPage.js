import { useNavigation } from "@react-navigation/core";
import React, { useState } from 'react';
import { KeyboardAvoidingView, Alert, TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { app, auth, firestore } from '../firebase';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore'

const LoginPage = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const navigation = useNavigation()

  // const handleSignUp = async () => {
  //   try {
  //     const response = await createUserWithEmailAndPassword(auth, email, password);
  //     setEmail(response.user.email);
  //     setPassword(response.user.password);
  //     // setSubmitting(false);
  //     navigation.navigate("BottomTab");
  //   } catch (err) {
  //     console.log(err);
  //     Alert.alert(err.message);
  //   }
  // };


const handleSignUp = async () => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;

    // Save profile details to Firestore
    const userRef = doc(firestore, 'users', user.uid);
    // const userEntriesRef = doc(firestore, 'users', user.uid, 'entries', user.uid);    
    // await setDoc(userEntriesRef, {});
    await setDoc(userRef, {
      email: user.email,
      profilePic: null, // Set initial value for profile picture
      username: null, // Set initial value for username
      points: 0
    })

    setEmail(user.email);
    setPassword(user.password);
    navigation.navigate("BottomTab");
  } catch (err) {
    console.log(err);
    Alert.alert(err.message);
  }
};


  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setEmail(response.user.email);
      setPassword(response.user.password);
      // setSubmitting(false);
      navigation.navigate("BottomTab");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behaviour='padding'>
      <Text style={styles.paragraph}>TOUCHSOMEGRASS🌱</Text>
      <Text style={styles.subText}>EMPOWER. FLOURISH. HEAL.</Text>
      <TextInput
        testID='email-input'
        value={email}
        onChangeText={(email) => {setEmail(email)}}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        testID='password-input'
        value={password}
        onChangeText={(password) => {setPassword(password)}}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
      testID= 'login-button'
      onPress = {handleLogin} underlayColor= 'white'>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      testID= 'signup-button'
      onPress={handleSignUp} underlayColor= 'white'>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonSignUpText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'man',
    padding: 50,
    alignSelf: 'center',
    position: 'absolute', 
    top: 200,
    color: 'azure',
  },
  container: {
    paddingTop: 400,
    paddingBottom: 300,
    alignItems: 'center',
    backgroundColor: "darkseagreen",
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'linen',
    alignSelf: 'center',
    top: -10,
    marginBottom: 10,
  },
  button: {
    marginBottom: 20,
    width: 332,
    alignItems: 'center',
    backgroundColor: 'seagreen',
    top: 15,
    borderWidth: 1,
    borderColor: 'linen',
    borderRadius: 10,
  },
  buttonSignUp: {
    marginBottom: 20,
    width: 332,
    alignItems: 'center',
    backgroundColor: 'linen',
    top: 10,
    borderWidth: 1,
    borderColor: 'linen',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'linen',
  },
  buttonSignUpText: {
    textAlign: 'center',
    padding: 10,
    color: 'olive',
  },
  subText: {
    textAlign: 'center',
    padding: 30,
    fontSize: 11,
    color: 'lavenderblush',
    alignSelf: 'center',
    position: 'absolute', 
    top: 300,
  },
});

export default LoginPage;