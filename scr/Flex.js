import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styleFlex.container}>
        <View style={styleFlex.view1}></View>
        <View style={styleFlex.view2}></View>
        <View style={styleFlex.view3}></View>
        <View style={styleFlex.view4}></View>
    </View>
  )
}

export default Flex

const styleFlex = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex: 1,
        flexDirection: 'column',
        // justifyContent:'center',
        // alignItems:'center'
        
    },
    text:{
        fontSize:30,
    },
    view1:{
        width:50,
        height:50,
        backgroundColor:'red'
    },
    view2:{
        width:50,
        height:50,
        backgroundColor:'green'
    },
    view3:{
        width:50,
        height:50,
        backgroundColor:'blue'
        // alignSelf:'center'
    },
    view4:{
        width:50,
        height:50,
        backgroundColor:'black'
    }
})