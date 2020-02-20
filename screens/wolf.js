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

class imageClick extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'white',
                flex: 1,

            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
                <View style={styles.upload}>
                    <TouchableOpacity
                        style={{
                            width: 45,
                            height: 45,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}
                        onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name="keyboard-backspace" size={35} color={'black'} />
                    </TouchableOpacity>
                    <View style={styles.headingAlign}>
                        <Text style={styles.mainHeading}>
                            Wolf
                        </Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../images/wolf.jpg')} style={styles.mainImage} />
                </View>
                <View style={styles.firstHeadAlign}>
                    <Text style={styles.firstHeading}>
                        The Wolf
                    </Text>

                    <View style={styles.textAlign}>
                        <Text style={styles.tex}>
                            After a century of decline, tiger numbers are on the rise. At least 3,890 tigers remain in the wild, but much more work is needed to protect this species that’s still vulnerable to extinction. Demand for tiger parts in some Asian countries is resulting in poaching and trade that will empty forests of the last wild tigers.
                    </Text>
                    </View>

                </View>
                <View style={{
                    alignItems: 'center',
                    marginTop:20,
                }}>
                    <TextInput
                        style={{
                            borderWidth: 2,
                            borderColor: 'rgba(63, 60, 60, 0.185)',
                            width: '95%',
                            // height: 30%,
                        }}>

                    </TextInput>
                </View>
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:30,
                    
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgb(234,112,43)',
                        width: 100,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation:2,
                    }}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >

                        <Text
                        style={{
                        fontSize:25,
                        fontWeight:'bold',
                        color:'white',
                        elevation:1,
                        shadowColor:'black',
                        shadowOffset:{
                            width:4,
                            height:10,
                        }
                        
                        }}>
                            Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    upload: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        paddingBottom: 10,
        paddingLeft: 10,
        justifyContent: 'flex-start',
    },
    headingAlign: {
        justifyContent: 'center',
        width: '78%',
        textAlign: 'center',
    },
    mainHeading: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(255, 193, 193)',
    },
    mainImage: {
        // flex:1,
        height: 250,

    },
    firstHeadAlign: {
        // width:'100%',
        backgroundColor: 'white',
        // height:50,
        // justifyContent:'center',
        padding: 10,

    },
    firstHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(122,122,122)',
    },
    textAlign: {
        paddingTop: 10,
    },
    tex: {
        fontSize: 15,
    },
})
export default imageClick;