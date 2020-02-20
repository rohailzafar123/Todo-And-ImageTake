import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

export default class Note extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                {/* <TouchableOpacity */}
                <TouchableOpacity 
                onPress={this.props.deleteMethod}
                style={styles.noteDelete}
                >
                <Text style={styles.noteDeleteText}>
                    Del
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.noteEdit}
                onPress={this.props.editMethod}
                >
                    <Text
                    style={styles.noteDeleteText}
                    >
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        position:'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth:3,
        borderBottomColor:'#ededed'

    },
    noteText: {
        paddingLeft:20,
        borderLeftWidth:10,
        borderLeftColor:'#e91e63'
    },  
    noteEdit:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:58,
    },
    noteDelete:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2980b9',
        padding:12,
        top:10,
        bottom:10,
        right:10,
    },
    noteDeleteText:{
        color:'white',
        fontWeight:'bold',
    },
});