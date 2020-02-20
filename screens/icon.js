import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    StyleSheet,
    StatusBar,
    Header,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
} from 'react-native'
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';




class icon extends Component {
    state = {
        photo: null,
        // date: new Date(),
    };
    // setName = (userName,userAge) => {
    //     AsyncStorage.setItem(['name', userName,'age',userAge]);
    //     this.setState({ name: userName,age: userAge });
    // }
    // componentDidMount = () => AsyncStorage.getItem('name')
    //     .then((userName) => {
    //         this.setState({ name: userName })
    //     })
    //     componentDidMount = () => AsyncStorage.getItem('age')
    //     .then((userAge) => {
    //         this.setState({ name: userAge })
    //     })
    
    pickerImage = () => {
        let options = {};
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {


                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    addInfo = () => {
        // const { avatarSource } = this.state


        // AsyncStorage.setItem('image', avatarSource);
        this.props.navigation.navigate('Todo')
    }
    
    // goHome
    render() {
    
        // const { photo } = this.state;
        return (
            <View style={styles.main}>
                <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
                <View style={styles.upload}>
                    <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name="keyboard-backspace" size={30} color={'black'} />
                    </TouchableOpacity>
                    <View style={styles.headingAlign}>
                        <Text style={styles.mainHeading}>
                            Upload Image
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.iconAlign}
                    onPress={() => this.pickerImage()}>
                    {
                        this.state.avatarSource && (
                            <Image
                                source={this.state.avatarSource}
                                style={styles.iconImage} />
                        )}
                </TouchableOpacity>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput style={{
                        marginTop: 5,
                        borderWidth: 2,
                        borderColor: 'rgba(117, 75, 20,  0.459)',
                        borderRadius: 30,
                        width: '80%',
                        paddingLeft: 20,
                    }}
                    >

                    </TextInput>
                    <TextInput style={{
                        marginTop: 5,
                        borderWidth: 2,
                        borderColor: 'rgba(117, 75, 20,  0.459)',
                        borderRadius: 30,
                        width: '80%',
                        paddingLeft: 20,
                    }}>

                    </TextInput>
                </View>
                <View style={styles.uploadButtonView}>
                    <TouchableOpacity
                        onPress={() => this.addInfo()}
                    // onPress={() => this.props.navigation.navigate('Home')}
                    style={styles.addButtun}
                    >
                        <Text style={styles.tex}>
                            Upload
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(249, 255, 228)',
        flex: 1,

    },
    mainHeading: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    headingAlign: {
        justifyContent: 'center',
        width: '78%',
        textAlign: 'center',
    },
    iconAlign: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: 105,
        height: 105,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: 'rgb(158, 158, 158)',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        // backgroundColor:'black',
    },
    iconImage: {
        width: 90,
        height: 90,
        borderRadius: 110,

    },
    upload: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        padding: 10,

    },
    uploadButtonView:{
        position: 'absolute',
        bottom: 0,
        width:'100%',
    },
    addButtun: {
        
        width: '90%',
        height: 40,
        backgroundColor: 'rgb(158, 158, 158)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 20,
    },
    tex: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

})
export default icon