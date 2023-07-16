import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, firestore } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import incrementPointsby1 from './PointsUtils1';
import { Audio } from 'expo-av';


const Discuss = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [sound, setSound] = useState(null);

  const swooshPlay = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('/Users/yukiangmacpro/Desktop/grass-final/sounds/swoosh.mp3'),
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.log('Error playing end sound', error);
    }
  };  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        </View>
      ),
    });

    const chatsRef = collection(firestore, 'chats');
    const q = query(chatsRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    );

    // listen to user's profile and obtain username
    const user = auth.currentUser;
    const userRef = doc(firestore, "users", user.uid);
    const unsubscribe2 = onSnapshot(userRef, (doc) => {
      const username = doc.data().username;
      setUsername(username);
    })

    return () => {
      unsubscribe();
      unsubscribe2();
    };
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text } = messages[0];
    incrementPointsby1();
    swooshPlay();
  
    addDoc(collection(firestore, 'chats'), {
      _id,
      createdAt,
      text,
      user: {
        _id: auth?.currentUser?.email || '',
        name: username || '',
        avatar: auth?.currentUser?.photoURL || '',
      },
    });
  }, [username]);

  const renderBubble = (props) => {
    const { currentMessage } = props;

    if (!currentMessage || !currentMessage.user) {
      // Return null if currentMessage or user is undefined
      return null;
    }

    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#609966',
          },
          left: {
            backgroundColor: '#C9DBB2',
          },
        }}
        textProps={{
          style: {
            color: props.position === 'left' ? 'black' : 'snow',
          },
        }}
        renderUsernameOnMessage={false}
        renderTime={(timeProps) => (
          <View style={styles.timeContainer}>
            <Text style={styles.usernameText}>  ~ {timeProps.currentMessage.user.name}  </Text>
            <Text style={styles.timeText}>{timeProps.currentMessage.createdAt.toLocaleTimeString()}</Text>
          </View>
        )}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={styles.sendContainer}>
        <Text style={styles.sendText}>Send</Text>
      </Send>
    );
  };

  return (
    <View style={styles.chatContainer}>
      <GiftedChat
        style={styles.chat}
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email || '',
          name: username || '',
          avatar: auth?.currentUser?.photoURL || '',
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
      />
    </View>
  );
};

export default Discuss;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: 'white', // Set the default background color here as well
  },
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  sendText: {
    color: 'darkslategrey',
    fontWeight: 'bold',
  },
  usernameText: {
    fontSize: 14,
    color: '#609966',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    marginRight: 5,
    color:'darkslategrey',
  },
});