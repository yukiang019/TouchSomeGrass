import React from 'react';
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import BottomTab from '../BottomTab';


const Home = () => {
  
  const navigation = useNavigation()

  const handleSignOut = async () => {
    try {
      const response = await signOut(auth);
      navigation.navigate("LoginPage");
    } catch (err) {
      console.log(err);
      Alert.alert(err.message);
    }
  };

  const goMeditation = () => {
    navigation.navigate("Meditation");
  };

  const goJournal = () => {
    navigation.navigate("Journal");
  };

  const goEngage = () => {
    navigation.navigate("Engagement");
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b4/Oak_JE14.png/revision/latest?cb=20211231031829'}}
       style= {styles.pic} />
       <Text style={styles.mainText}>TouchSomeGrass🌱</Text>
       <Text style={styles.subText}>EMPOWER. FLOURISH. HEAL.</Text>
      <TouchableOpacity 
      onPress={handleSignOut} underlayColor= "white">
        <View style={styles.outButton}>
          <Text style={styles.outText}>Sign Out.</Text>
        </View>
      </TouchableOpacity>
      {/* button version menu */}
      <TouchableOpacity 
      onPress={goJournal} underlayColor= "white">
        <View style={styles.menuButton}>
          <Text style={styles.menuText}>Journal</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={goMeditation} underlayColor= "white">
        <View style={styles.menuButton}>
          <Text style={styles.menuText}>Meditation</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={goEngage} underlayColor= "white">
        <View style={styles.menuButton}>
          <Text style={styles.menuText}>The Healing Circle</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 400,
    paddingBottom: 300,
    alignItems: 'center',
    backgroundColor: "darkseagreen"
  },
  outButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute', 
    backgroundColor: 'azure',
    top: -450,
    left: 90,
    borderRadius: 15,

  },
  outText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 13,
    color: 'olive',
  },
  menuButton: {
    marginTop: 8,
    marginBottom: 5,
    width: 120,
    alignItems: 'center',
    top: -20,
    padding: 1,
    backgroundColor: 'mistyrose',
    borderRadius: 20,

  },
  menuText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 13,
    color: 'olive',
  },
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19,
    fontFamily: "man",
    padding: 50,
    color: 'lightcyan',
  },
  subText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 15,
    color: 'lavenderblush',
    alignSelf: 'center',
    position: 'absolute', 
    top: 470,
  },
  pic: {
    width: 300, 
    height: 300, 
    alignSelf: 'center',
    position: 'absolute', 
    top: 130,
  },
});

