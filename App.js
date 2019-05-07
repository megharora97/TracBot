import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import ChatBot from 'react-native-chatbot';

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    fontSize: 25
  }
});

const steps = [
  {
    id: '1',
    message: 'Hello!!',
    trigger: '2'
  },
  {
    id: '2',
    message: 'How are You?',
    trigger: '3'
  },
  {
    id: '3',
    user: true,
    trigger: '4' //this step calls
  },
  {
    id: '4',
    message: "Do u need any help from me?",
    trigger: '5'
  },
  {
    id: '5',
    options: [
      { value: 'yes', label: 'yes', trigger: '6' },
      { value: 'no', label: 'no', trigger: '7' }
    ]
  },
  {
    id: '6',
    message: 'You choose yes!!!',
    trigger: ({ value, steps }) => {
      if(steps['8'] === undefined) {
        return '8';
      } else {
        return '9';
      }
    }
  },
  {
    id: '7',
    message: 'You choose no!!!',
    trigger: '8'
  },
  {
    id: '8',
    message: 'I m so happy ',
    trigger: '5'
  },
  {
    id: '9',
    component: <Image source={require('./logo.png.jpeg')} style={{ width: 300, height: 180 }} />,
    trigger: '10'
  },
  {
    id: '10',
    message: 'ThankYou For You Valuable time...',
    end: true
  }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <ChatBot steps={steps} />
      </View>
    );
  }
}