import React from 'react';
import {
  View,
  AsyncStorage,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInput, } from 'react-native-gesture-handler';
// import 
// import ActivityIndicatorExample from './activity.js'
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showProgress: false,
    };
  }
  state = {
    name: ''
  }
  //  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }
  onLogin = () => {
    const { textInputValue } = this.state;
    this.setState({
      showProgress: true
    })

    setTimeout(() => {

      this.setState({
        showProgress: false
      })

      // Alert.alert(textInputValue);
      this.props.navigation.navigate('Home')
      // Alert.alert(this.state.name);
    }, 500)

  }

  render() {

    const { showProgress } = this.state


    return (
      <View style={styles.main}>
        <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
        {/* <View>
            <TextInput  autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
               {this.state.name}
            </Text>
         </View> */}
        <View style={styles.view1}>
          <Image
            style={styles.image}
            source={require('./images/user.png')}
          />
        </View>
        <Text style={styles.userName}>
          User Name
          </Text>
        <Text style={styles.data}>
          Get the User Name Here
          </Text>
        <View style={styles.inputView}>
          {/* textInputValue => this.setState({ textInputValue }) */}
          <TextInput
            placeholderTextColor="white"
            placeholder='User Name'
            onChangeText={this.setName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            style={styles.next}
            onPress={this.onLogin}
          >
            <Text style={styles.tex1}>
              Next
            </Text>
            {showProgress && <ActivityIndicator />}
          </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#6A63D5",
    flex: 1,
  },
  andicator: {
    // position: 'absolute', 
    // top: 0, 
    // bottom: 0, 
    // right: 0, 
    // left: 0, 
    margin: 5,
  },
  userName: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
    // marginTop: '20%',
  },
  data: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
    margin: 2,

  },
  textInput: {
    backgroundColor: '#5552AE',
    width: "80%",
    borderRadius: 30,
    marginTop: 10,
    paddingLeft: 20,
    color: "white",

  },
  inputView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 100,
    height: 100,
  },
  view1: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: '30%',

  },
  next: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 300,
    height: 50,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: "row",
  },
  tex1: {
    color: "#6A63D5",
    fontSize: 18,
    fontWeight: 'bold',

  },
  view2: {
    alignItems: 'center',
  },
});
// () => this.props.navigation.navigate('SayHello')
export default HomeScreen;