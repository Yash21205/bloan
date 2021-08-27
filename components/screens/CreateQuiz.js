import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../firebase/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BasicButton from "../../components/basiccomponents/BasicButton";
import storage from "../firebase/FirebaseStorge"

export default function CreateQuiz({navigation}) {
    const [availableQuizTypes, setAvailableQuizTypes] = useState([]); //will be fetched from db
    const [image, setImage] = useState(null);
    const [quizName, setQuizName] = useState("");
    const [quizDesc, setQuizDesc] = useState("");
    const [quizType, setQuizType] = useState("");

    //component did mount
    useEffect(() => {
        //asking for permission to access phone's gallery
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
        fetchQuizTypes();
    }, []);
   function fetchQuizTypes(){
    const fetch=firebase.database().ref('quizTypes/');
    fetch.on('value',(res)=>{
        const typ=res.val()
        if (typ)    {
            setAvailableQuizTypes(typ)
        }
        
    })

   }
    //function to handle when Pick Image btn is clicked on
    async function handlePickImgBtnClick() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }
   //function to upload the image in firebase
 async function uploadImage(uri,createdByUser) {
    const timeStamp = Math.floor(Date.now() / 1000);
    const imageName = timeStamp + ".jpg";

    const response = await fetch(uri);
    const blob = await response.blob();

    //putting image in firebase
    const storageRef = storage.ref().child( createdByUser+"/" + imageName);
    const resp = storageRef.put(blob);
    resp.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
            const percent = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            console.log("percent", percent);
           
            
        },
        error => {
            console.log("image upload error: ", error.message);
            
        },
        () => {
            storageRef.getDownloadURL()
                .then((downloadUrl) => {     
                    setImage(downloadUrl);
                    console.log("File available at:", downloadUrl);
                })
        }
    );
    return resp;
    }
    //function to handle when any quiz item is clicked on
  async  function hanldeCreateBtnClick() {
        console.log("create btn clicked");
       const createdByUser= await AsyncStorage.getItem('userid')
       if (createdByUser){
           if(image){
               await uploadImage(image,createdByUser)
               .then(()=>{console.log("image Uploaded")})
               .catch()
               insertQuizinfirebas(createdByUser,image)
           }
       }
       navigation.navigate("")
    }
 function insertQuizinfirebas(createdByUser,Image){
  
    const timeStamp = Math.floor(Date.now() / 1000);
    const insertKey=createdByUser+"/";
    const dbref=firebase.app().database().ref("quizes")
    dbref.child(insertKey)
    .set({
        createdByUser,
        quizImageUri: image,
        quizName,
        quizType,
        quizDesc,

    }),(err)=>{console.log(err)}
 }

 
    //component rendering
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Create Quiz</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Quiz Image</Text>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.divider}></View>
                <BasicButton
                    text="Pick Image"
                    onPress={handlePickImgBtnClick}
                />
                <View style={styles.divider}></View>

                <Text style={styles.label}>Quiz Name</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Give a name to your quiz"
                    value={quizName}
                    onChangeText={(val) => setQuizName(val)}
                />
                <View style={styles.divider}></View>

                <Text style={styles.label}>Quiz Type</Text>
                <Picker
                    style={styles.inputField}
                    selectedValue={quizType}
                    onValueChange={(quizType, itemIndex) => setQuizType(quizType)}
                >
                    <Picker.Item label="" value="" />
                    {
                        availableQuizTypes.map((item, idx) => {
                            return (
                                <Picker.Item key={idx} label={item} value={item} />
                            )
                        })
                    }
                </Picker>
                <View style={styles.divider}></View>

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.inputField}
                    multiline
                    placeholder="What describes your Quiz?"
                    value={quizDesc}
                    onChangeText={(val) => setQuizDesc(val)}
                />
                <View style={styles.divider}></View>

                <BasicButton
                    text="Create"
                    onPress={hanldeCreateBtnClick}
                />
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    divider: {
        paddingVertical: 8,
    },

    form: {
        marginTop: 35,
    },

    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: 200,
        backgroundColor: "#f1f1f1",
    },
});