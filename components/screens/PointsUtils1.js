import { doc, updateDoc, setDoc, getDoc } from '@firebase/firestore';
import { auth, firestore } from '../firebase';
import { Alert } from "react-native"

const incrementPointsby1 = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      // Save the username to AsyncStorage with a unique key
      // await AsyncStorage.setItem(`username_${userId}`, newName);
      const userRef = doc(firestore, "users", user.uid);
      const docSnap = await getDoc(userRef);
      const points = docSnap.data().points;
      // const oldPoints = points;
      // const next = null;
      //const FieldValue = require('firebase-admin').firestore.FieldValue.Increment(1);
      await updateDoc(userRef, {
        points: points + 1,
      })

      // try level up check 
      // if (Math.floor(oldPoints) < Math.floor(oldPoints+1)) {
      //   next = 1;
      // } else {
      //   next = 0;
      // }
      //await userRef.UpdateAsync("points", FieldValue.Increment(1));
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

export default incrementPointsby1;
