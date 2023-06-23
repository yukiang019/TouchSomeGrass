import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
// import firestore from '@react-native-firebase/firestore';

const Meditate = () => {
  const [timeRemaining, setTimeRemaining] = useState(10 * 60); // 10 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(false);
  const [sound, setSound] = useState(null);
  const [backgroundMusicPlaying, setBackgroundMusicPlaying] = useState(false);
  const [backgroundMusicPaused, setBackgroundMusicPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [endSoundPlayed, setEndSoundPlayed] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerRunning) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);

      if (!backgroundMusicPlaying && timeRemaining >= 0) {
        startBackgroundMusic();
      } else if (backgroundMusicPaused) {
        resumeBackgroundMusic();
      }
    } else {
      clearInterval(interval);
      pauseBackgroundMusic();
    }

    if (timeRemaining === 0) {
      stopBackgroundMusic();
      if (!endSoundPlayed) {
        playEndSound();
        //updatePoints(10);
        setEndSoundPlayed(true);
      }
    } else {
      setEndSoundPlayed(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerRunning, timeRemaining]);

  const startBackgroundMusic = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('/Users/cocolixinrui/dev/orbital-app/assets/10mingoodful.mp3'),
        { shouldPlay: true, positionMillis: elapsedTime * 1000 }
      );
      setSound(sound);
      setBackgroundMusicPlaying(true);
    } catch (error) {
      console.log('Error playing background music', error);
    }
  };

  const stopBackgroundMusic = async () => {
    if (sound) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync(); // Unload the audio to prevent it from restarting
      } catch (error) {
        console.log('Error stopping background music', error);
      }
      setSound(null);
      setBackgroundMusicPlaying(false);
      setBackgroundMusicPaused(false);
      setElapsedTime(0);
    }
  };
  

  const pauseBackgroundMusic = () => {
    if (sound) {
      sound.pauseAsync();
      setBackgroundMusicPaused(true);
    }
  };

  const resumeBackgroundMusic = () => {
    if (sound && backgroundMusicPaused) {
      sound.playAsync();
      setBackgroundMusicPaused(false);
    }
  };

  const playEndSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('/Users/cocolixinrui/dev/orbital-app/assets/softding.mp3'),
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.log('Error playing end sound', error);
    }
  };  

  const startTimer = () => {
    setTimerRunning(true);
  };

  const pauseTimer = () => {
    setTimerRunning(false);
    pauseBackgroundMusic();
  };

  const resetTimer = () => {
    setTimeRemaining(10 * 60); // Reset to 10 minutes in seconds
    setTimerRunning(false);
    stopBackgroundMusic();
  };

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    if (timeRemaining <= 0) {
      return '00:00';
    }

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // const updatePoints = async (pointsToAdd) => {
  //   try {
  //     const userId = email;
  //     const userRef = firestore().collection('users').doc(userId);

  //     await userRef.update({ points: firestore.FieldValue.increment(10) });
  //     console.log('Points updated successfully');
  //   } catch (error) {
  //     console.log('Error updating points', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text testID = 'timer-text' style={styles.timerText}>{formatTime()}</Text>
      <Text style={styles.credits}>Credits: Goodful (https://www.buzzfeed.com/bfmp/videos/120547)</Text>
      <Text style={styles.mainText}>Let's meditate!</Text>
      {!timerRunning ? (
        <TouchableOpacity style={styles.button} testID= "start-button" onPress={startTimer}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} testID= "pause-button" onPress={pauseTimer}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.button} testID ="reset-button" onPress={resetTimer}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 400,
    paddingBottom: 300,
    alignItems: 'center',
    backgroundColor: "darkseagreen",
  },
  timerText: {
    fontSize: 55,
    marginBottom: 40,
    position: 'absolute',
    bottom: 350,
    fontFamily: 'poppinsSemiBold',
    color: 'lavenderblush',
  },
  button: {
    top: 70,
    marginBottom: 35,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'midnightblue',
  },
  mainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    position: 'absolute',
    bottom: 450,
    fontFamily: 'poppinsSemiBold',
    padding: 50,
    color: 'lightcyan',
  },
  credits: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    bottom: 50,
    fontFamily: 'poppinsSemiBold',
    padding: 50,
    color: 'linen',
  },
});

//export default MeditationTimer;
module.exports = Meditate;
