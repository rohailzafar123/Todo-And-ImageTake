import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { TextInput, } from 'react-native-gesture-handler'

import Note from './note'
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
      index: null
      // isUpdate:'' ,
    }
  }



  // editButton(i) {
  //   console.log(this.state.noteArray[i]=this.state.noteText);

  //   this.setState({noteText: this.state.noteArray[i]})

  //   // this.setState({ noteArray: this.state.noteArray})
  //   // this.setState({ noteText: this.state.noteArray[i].note, isUpdate: true })

  //   // this.state.noteArray.splice(i, 1, this.state.noteText);
  //   // console.log(aafasd , "aafasd")
  //   // this.state.noteArray.push(this.state.noteArray[1] = this.state.noteText)
  //   // this.state.noteArray = this.state.noteText
  //   // this.state.noteArray.splice(i,)
  //   // this.state.noteArray.splice(val,1);
  //   // this.setState({ noteText : ''}) 
  // }
  editButton(val, key) {

    this.setState({ noteText: val.note, index: key, isUpdate: true })

    // console.log()
    // var updateValue = this.state.noteText;
    // let c = this.state.noteArray;
    // console.log(updateValue);
    // c[key] = updateValue
    // this.setState({
    //   noteArray:c,
    //   isUpdate: true,
    // })
  }




  updateData() {



    const { noteText, index, noteArray } = this.state


    let a =noteArray.splice(index, 1, { date: 'sa', note: noteText })

    console.log(a)  


    this.setState({noteArray: a})

    // var d = new Date();
    //   this.state.noteArray.push({
    //     date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
    //     note: this.state.noteText
    //   });
    //   // this.setState({noteArray: this.state.noteArray })
    //   this.setState({ noteText: '' });
    // var d = new Date();
    // let nayaArray = noteArray[index] = { date: 'sa', note: noteText };

    // // console.log(noteArray.push(nayaArray))

    // noteArray.splice(index, 1, {date: 'sa', note: noteText});


    // this.setState({ noteArray: noteArray.splice(index, 1, { date: 'sa', note: noteText }) })
    //  = 
    //  {
    //   date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
    //   note: noteText
    // }

    // this.setState({ noteArray: nayaArray })







  }





  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText
      });
      // this.setState({noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
  }
  render() {
    const { isUpdate } = this.state


    const note = this.state.noteArray.map((val, key) => {
      return <Note key={key} val={val}
        deleteMethod={() => this.deleteNote(key)}
        editMethod={() => this.editButton(val, key)}
      />
    });
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            *Todo*
          </Text>
        </View>
        <ScrollView style={styles.scrollMain}>
          {note}
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.addButtun}
            onPress={!isUpdate ? this.addNote.bind(this) : this.updateData.bind(this)}
          // onPress={this.updateData.bind(this)}
          >
            <Text style={styles.addButtunText}>
              +
          </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='What you need'
            placeholderTextColor='white'
          >
          </TextInput>
        </View>

      </View>

    );
  }
}
export default Setting

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    // alignSelf:'center',
    backgroundColor: 'rgb(179, 93, 182)',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderColor: 'rgb(184, 184, 184)',
  },
  headerText: {
    // alignSelf:'center',
    color: 'rgba(255, 255, 255, 0.904)',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollMain: {

  },
  textInput: {
    padding: 20,
    color: 'white',
    backgroundColor: 'rgba(12, 12, 12, 0.781)',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addButtun: {
    // position: 'absolute',
    zIndex: 11,
    // bottom: 90,
    // right: 20,
    backgroundColor: 'rgb(179, 93, 182)',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    elevation: 8,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
  },
  addButtunText: {
    color: 'white',
    fontSize: 24,
  },

});