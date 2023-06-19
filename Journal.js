import React, { useState, useEffect } from 'react';
import { ScrollView, View, Button, StyleSheet, Alert, Modal, TextInput, TouchableOpacity, Text, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import uuid from "react-uuid";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Icon, Card } from 'react-native-elements';

const dateObj = new Date();
const weekdayArr = ["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"];
const weekday = weekdayArr[dateObj.getDay()];
const month = dateObj.getMonth();
const day = dateObj.getDate();
const year = dateObj.getFullYear();
const date = `${weekday}, ${day}/${month}/${year}`;

const Journal = ({navigation}) => {
  //const [previewModal, setPreviewModal] = useState(false);
  const [moodModal, setMoodModal] = useState(false);
  const [newEntryData, setNewEntryData] = useState([]);
  
  const [newEntryTitle, setNewEntryTitle] = useState('');
  const [newEntryText, setNewEntryText] = useState('');
  const [moodIcon, setMoodIcon] = useState({
    name: 'cloud',
    color: '#C9DBB2',
  });

  const handleDeleteEntry = (id) => {
    setNewEntryData(prevEntries => prevEntries.filter(entry => {
      return entry.id !== id;
    }),
    );
  };

  const confirmDeleteEntry = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => handleDeleteEntry(id) },
      ]
    );
  };


  function handleSubmitEntry() {
    if (newEntryTitle.trim() !== '' && newEntryText.trim() !== '') {
      // let allEntries = newEntryData.concat({
      //   id: uuid() ,
      //   date: date,
      //   title: newEntryTitle,
        
      //   text: newEntryText,
  
      // });
      const newEntry = {
        id: uuid(),
        date: date,
        mood: {
          name: moodIcon.name,
          color: moodIcon.color
        },
        title: newEntryTitle,
        text: newEntryText,
      }
      setNewEntryData([newEntry, ...newEntryData]);
      // navigation.navigate('Profile', {newEntry});
      setNewEntryTitle('');
      setMoodIcon({name:'cloud',color:'#C9DBB2'});
    
      setNewEntryText('');
  

      //setPreviewModal(!previewModal);
      Alert.alert('Entry submitted!'); 
    }

    

    //setPreviewModal(!previewModal);

  }

  return (
    <ScrollView style={styles.container}>
      <View style={{marginLeft:20, display:'flex',flexDirection:'row',justifyContent:'space-between', top: 150,}}>
        <View>
          <Text style={{fontFamily: 'poppinsSemiBold',color:'white',fontSize:20}}>{date}</Text>
          
        </View>
        <TouchableOpacity
          onPress={() => setMoodModal(true)}>
          <Icon 
            style={{padding:8,backgroundColor:'#FFF',borderRadius:50, marginRight: 20,}}
            size={42}
            name={moodIcon.name}
            color={moodIcon.color}
            type='font-awesome-5' />
        </TouchableOpacity>

      </View>
      <Modal
        animationType='fade'
        visible={moodModal} 
        transparent={true}
        backgroundOpacity={0.5}
        backgroundColor={'#000'}
        onRequestClose={() => setMoodModal(!moodModal)} >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf:'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setMoodModal(!moodModal);
                  moodIcon.name !== 'cloud' ? setMoodIcon({name:'cloud',color:'#C9DBB2'}) : moodIcon.name;
                }} >
                <Icon
                  style={{margin:-5, padding:-10}}
                  name='close'
                  type='ionicons'
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <Text style={{fontWeight:'bold',fontSize:20}}>Choose your mood:</Text>
            <View style={styles.moodsContainer}>
              <TouchableOpacity onPress={() => setMoodIcon({name:'poo-storm',color:'#27374D'})}><Icon size={45} name='poo-storm' type='font-awesome-5' color='#27374D' padding={5} borderRadius={50} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon({name:'cloud-rain',color:'#9DB2BF'})}><Icon size={45} name='cloud-rain' type='font-awesome-5' color='#9DB2BF' padding={5} borderRadius={50} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon({name:'cloud-sun',color:'#E3F2C1'})}><Icon size={45} name='cloud-sun' type='font-awesome-5' color='#E3F2C1' padding={5} borderRadius={50} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon({name:'sun',color:'#FFDEB4'})}><Icon size={45} name='sun' type='font-awesome-5' color='#FFDEB4' padding={5} borderRadius={50} /></TouchableOpacity>
              <TouchableOpacity onPress={() => setMoodIcon({name:'rainbow',color:'#FDCEDF'})}><Icon size={45} name='rainbow' type='font-awesome-5' color='#FDCEDF' padding={5} borderRadius={50} /></TouchableOpacity>
            </View>
            <Button
              title='select'
              containerStyle={{width:'30%',borderRadius:30}}
              buttonStyle={{backgroundColor:'#488FB1'}}
              onPress={() => setMoodModal(!moodModal)}
              />
          </View>
        </View>
      </Modal>
      <View style={styles.text}>
      <Icon 
          style={{marginLeft:2.5, marginRight:5}} 
          color= 'olive'
          name='pencil' 
          type='font-awesome' />

        <Text style={{fontFamily: 'poppinsSemiBold', color: 'olive',}}>Title:</Text>
        <TextInput
          style={styles.title}
          onChangeText={title => setNewEntryTitle(title)}
          
          defaultValue={newEntryTitle}
          value={newEntryTitle}
          placeholder='Enter your title'
          autoCapitalize='words'
        />
      </View>
      <View style={{margin:5}}>
        <TextInput 
          style={styles.textarea}
          onChangeText={text => setNewEntryText(text)}
          defaultValue={newEntryText}
          value={newEntryText}
          multiline
          numberOfLines={10}
          allowFontScaling
          autoCapitalize='sentences'
          textAlignVertical= 'top'
          placeholder='Enter your entry'
        /> 
      </View>
      

      <TouchableOpacity
      onPress = {() => handleSubmitEntry()} underlayColor= 'white'>
        <View style={styles.button}>
          <Text style={styles.buttonText}> save </Text>
        </View>
      </TouchableOpacity>

      {/* <Modal
        animationType='fade'
        transparent={true}
        visible={previewModal}
        onRequestClose={() => {
          setPreviewModal(!previewModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignSelf:'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  setPreviewModal(!previewModal);
                }} >
                
              </TouchableOpacity>
            </View>
            <Text>Your Journal Entry:</Text>
            <ScrollView style={{width:'100%'}} >
              <Card>
                <Card.Title>{newEntryTitle}</Card.Title>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:5}}>
                  <Text>{date}</Text>
                  
                </View>
                <Card.Divider />
                <Text>{newEntryText}</Text>
                
                  
                
              </Card>
            </ScrollView>
            <Button
              className='previewModalBtn'
              title='Submit'
              loading={false}
              loadingProps={{size:'small',color:'white'}}
              buttonStyle={{
                
                borderRadius:5,
              }}
              containerStyle={{
                width:200,
                marginHorizontal:50,
                marginVertical:20,
              }}
              onPress={() => handleSubmitEntry()}
            />
          </View>
        </View>
      </Modal> */}

      {newEntryData?.map(entry => 
    <View key={entry.id}>
      <Pressable 
        onLongPress={() => confirmDeleteEntry(entry.id)
        }>
        <Card key={entry.id}>
          <Card.Title style={{fontWeight:'normal',fontSize:18,marginBottom:10}}>{entry.title}</Card.Title>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5, paddingBottom:5}}>
            <Text style={{textAlign:'center',fontSize:10}}>{entry.date}</Text>
            <Icon size={35} name={entry?.mood?.name} color={entry?.mood?.color} type='font-awesome-5' />
          </View>
          <Card.Divider />
          <Text style={{fontSize:12,fontStyle:'normal',paddingHorizontal:5}}>{entry.text}</Text>
          </Card>
      </Pressable>
    </View>)}
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9DBB2',

  },
  centeredView: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:56,
    marginBottom:79,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width:'92%',
    maxHeight:'75%',
    margin:15,
    backgroundColor:'#FFF',
    shadowColor:'#3E4985',
    shadowRadius:10,
    shadowOffset:10,
    borderRadius:10,
    padding:20,
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset: {
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5
  },
  moodsContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    paddingVertical:30
  },
  text: {

    marginTop: 170, 
    //padding: 20,
    marginLeft: 20,
    marginRight:'auto', 
    display:'flex', 
    flexDirection:'row',
    alignItems:'center',
    
  },

  title: {
    marginLeft:10,
    backgroundColor:'#FFF',
    width:'74%',
    height:46,
    paddingHorizontal:10,
    color: 'olive',
    fontFamily: 'poppins',
    fontSize:16
  },
  textarea: {
    marginLeft: 20,
    width:'90%',
    backgroundColor:'#FFF',
    padding:10,
    height: 300,
    marginHorizontal:-10,
    alignItems:'flex-start',
    marginTop:5,
    fontFamily: 'poppins',
    fontStyle:'normal',
    fontSize:12
  },
  button: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'linen',
    borderRadius: 15,
    width: '30%',
    height: 30,

  },
  buttonText: {
    color: 'olive',
    fontFamily: 'poppinsSemiBold',
    textAlign: 'center',

  },


});

export default Journal;



