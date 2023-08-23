import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FlatListdemo = (props) => {
  const {dulieu} = props;
  return (
    <View>
      <Text></Text>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: dulieu.image}}/>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>{dulieu.title}</Text>
        <Text style={styles.textContent}>{dulieu.content}</Text>
      </View  >
      <View style={styles.viewTitle}>
      <Text style={styles.textTitle}>{dulieu.age}</Text>
      <Text style={styles.textTitle}>{dulieu.weight}</Text>
      </View>
    </View>
    </View>
  )
}

export default FlatListdemo

const styles = StyleSheet.create({
  image:{
    height:100,
    width:100,
    marginRight:40,
    marginLeft:20,
    borderWidth: 1,
    margin: 10,
    backgroundColor: '#FFD2BBA8',
    borderRadius: 10
    
  },

  container:{
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#FFD2BBA8',
    borderRadius:15

  },

  textTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center'
  },

  textContent:{
    fontSize: 20,
    fontWeight: 'bold',
    margin:5,
    textAlign: 'center'
  },

  viewTitle:{
    flexDirection: 'column'
  },



})