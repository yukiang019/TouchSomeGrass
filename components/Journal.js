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

function Journal() {
  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>Journal</Text>
        <Text style={styles.subText}>EMPOWER. FLOURISH. HEAL.</Text>
    </View>
  );
}

export default Journal

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
    top: -470,
    left: 90,
    borderRadius: 15,

  },
  outText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 13,
    color: 'olive',
  },
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: "Cochin",
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

