import { useNavigation } from "@react-navigation/core";
import React, { useState } from 'react';
import { KeyboardAvoidingView, Alert, TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase';

const LoginPage = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const navigation = useNavigation()

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setEmail(response.user.email);
      setPassword(response.user.password);
      // setSubmitting(false);
      navigation.navigate("Home");
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
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behaviour='padding'>
      <Text style={styles.paragraph}>TouchSomeGrass🌱</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {setEmail(email)}}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => {setPassword(password)}}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
      onPress = {handleLogin} underlayColor= 'white'>
        <View style={styles.button}>
          <Text style={styles.LogInButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={handleSignUp} underlayColor= 'white'>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'linen',
    alignSelf: 'center',
    top: -50,
    marginBottom: 10,
    color: 'linen',
  },
  button: {
    marginBottom: 5,
    width: 180,
    alignItems: 'center',
    top: -20,
    padding: -5,
    backgroundColor: 'seagreen',
    borderRadius: 20,
  },
  buttonSignUp: {
    marginBottom: 10,
    width: 180,
    alignItems: 'center',
    top: 0,
    backgroundColor: 'linen',
    borderWidth: 1,
    padding: -5,
    borderColor: 'olive',
    borderRadius: 20,
  },
  LogInButtonText: {
    textAlign: 'center',
    padding: 20,
    color: 'linen',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'olive',
  },
  subText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 11,
    color: 'lavenderblush',
    alignSelf: 'center',
    position: 'absolute', 
    top: 470,
  },
});

export default LoginPage;


// autheticitation
// import * as AuthSession from 'expo-auth-session';
// import jwtDecode from 'jwt-decode';
// import { Alert, Platform, StyleSheet, Image } from 'react-native';

// // you need to swap out these details with your auth0 credientals
// const auth0ClientId = "";
// const authorizationEndpoint = "https://yourtennant.auth0.com/authorize";


// const useProxy = Platform.select({ web: false, default: true });
// const redirectUri = AuthSession.makeRedirectUri({ useProxy });

// console.log(redirectUri)  // <-- you will need to add this to your auth0 callbacks / logout configs

// export default function LoginPage() {
//   const [request, result, promptAsync] = AuthSession.useAuthRequest(
//     {
//       redirectUri,
//       clientId: auth0ClientId,
//       // id_token will return a JWT token
//       responseType: 'id_token',
//       // retrieve the user's profile
//       scopes: ['openid', 'profile', 'email'],
//       extraParams: {
//         // ideally, this will be a random value
//         nonce: 'nonce',
//       },
//     },
//     { authorizationEndpoint }
//   );

//   return (
//     <Layout style={styles.container} level="1">
//       <Button
//         style={styles.button}
//         onPress={() => promptAsync({ useProxy })} // <-- will open the universal login 
//       >
//         Login
//       </Button>
//     </Layout>
//   );
// }


