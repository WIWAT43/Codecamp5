import React, { useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { render } from 'react-dom';






export default function App() {

  this.state = {
    textMainResult: "",
  }



  function getPress(text){
    alert(text);
    this.setState({
      textMainResult: textMainResult+text,
    })
    
  };


  return (
    <View style={styles.container}>
      <View style={styles.mainView}><Text style={styles.texeMain}>{this.state.textMainResult}</Text></View>
      <View style={styles.resulView}><Text style={styles.textResult}>12345</Text></View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style = {styles.btn} onPress ={()=> getPress("C")}><Text style = {styles.btnText}>C</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>()</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>%</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>÷</Text></TouchableOpacity>
      </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>7</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>8</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>9</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>x</Text></TouchableOpacity>
      </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>4</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>5</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>6</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>-</Text></TouchableOpacity>
      </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>1</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>2</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>3</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>+</Text></TouchableOpacity>
      </View>
      <View style = {styles.buttonView}>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>+/-</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>0</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>.</Text></TouchableOpacity>
          <TouchableOpacity style = {styles.btn}><Text style = {styles.btnText}>=</Text></TouchableOpacity>
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  mainView:{
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    alignItems: 'top',
    justifyContent: 'center',
    paddingRight:10,
    
  },
  texeMain:{
    fontSize:60,
    textAlign:"right",
  },
  resulView:{
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    paddingRight:10,
    borderBottomColor: "green",
    borderBottomWidth: 1,
    marginBottom: 50,
  },
  textResult:{
    fontSize:40,
    textAlign:"right",
  },
  buttonView:{
    flex: 1,
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 40,
  },
 
  btn:{
    backgroundColor:"lightgray",
    
    borderRadius:100,
    width:130,
    height:100,
    alignItems: "center",
    justifyContent: "center"

  },
  btnText:{
    fontSize: 50,
    fontWeight: "500",
    
  },

  row:{

  },



});
