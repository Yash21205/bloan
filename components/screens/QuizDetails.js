import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import SnackBar from "../basiccomponents/SnackBar";
import BasicButton from "../basiccomponents/BasicButton";

export default function QuizDetails( {  route,navigation  })
    
   
  
   {
    const {insertKey,image,quizName,quizType,quizDesc}=route.params;
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        //fetching available quiz types from database
        fetchQuizQuestions();
    }, []);

    //function to fetch questions of the quiz from the database.
    function fetchQuizQuestions() {
        
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }
  function handleAddQstnBtnClick(){

  }
    //function to handle when any quiz item is clicked on
    function hanldeAddQstnBtnClick() {
        navigation.navigate('Add Question', {
            quizId: insertKey 
        });
    }

    //component rendering
    return (
        <>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{quizName}</Text>
                <Text style={styles.subtitle2}>{quizType}</Text>

                <Image source={image || require("../../assets/icon.png")} style={styles.image} />
                <View style={styles.divider}></View>

                <Text style={styles.subtitle}>{quizDesc}</Text>
                <View style={styles.divider}></View>

                <View style={styles.qstnContainer}>
                    {
                        isLoading ?
                            <ActivityIndicator style={styles.loader} />
                            :
                            questions.map((item, idx) => {
                                return (
                                   //display the questions in View. 
                                   <View> </View>
                                )
                            })
                    }
                </View>
                <View style={styles.divider}></View>

                <BasicButton
                    text="Add Question"
                    onPress={handleAddQstnBtnClick}
                />
            </ScrollView >

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    title: {
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    subtitle2: {
        fontSize: 14,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },

    divider: {
        paddingVertical: 8,
    },

    image: {
        alignSelf: "center",
        width: "100%",
        height: 200,
        backgroundColor: "#f1f1f1",
    },

    qstnContainer: {
        // backgroundColor: "#f1f1f1",
        padding: 5,
    },

    qstn: {
        padding: 10,
        backgroundColor: 'rgba(113, 205, 220, 0.3)',
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
    },

    qstnText: {
        fontWeight: '500',
        fontSize: 16,
    }
});