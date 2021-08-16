import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class SignUp extends React.Component {

  render() {
    return (
   <View>
     <Text>
       Sign up
     </Text>
   </View>
    );
  }
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

  form: {
    marginVertical: 35,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
  },

  inputField: {
    fontSize: 14,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
  },

  divider: {
    paddingVertical: 8,
  },

  log: {
    textAlign: 'center',
    marginVertical: 2,
    color: 'red',
  },

  signin: {
    marginVertical: 40,
  },
  snackbar: {
    backgroundColor: "red",
}
});
