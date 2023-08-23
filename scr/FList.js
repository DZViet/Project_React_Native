import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React from 'react'
import FlatListdemo from './FlatListdemo'

const FList = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'grey' }}>Explore</Text>
        <Text style={{fontSize: 15, color: 'grey', marginBottom:20 }}>Search For A Pet </Text>
        <TextInput style={{borderWidth: 1, borderRadius: 15, }}>Search</TextInput>

      <FlatList
        data={dataNe}
        renderItem={({item}) => <FlatListdemo dulieu={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FList

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#FFD2BBA8'
        
    }

})

const dataNe = [{
    "id": "1",
    "title": "Samoyed",
    "content": "Female",
    "age": "3yrs",
    "weight": "4 pounds",
    "image": "https://azpet.com.vn/wp-content/uploads/2021/10/Samoyed-C12432-1.jpg"
},
{
    "id": "2",
    "title": "Samoyed",
    "content": "Male",
    "age": "3yrs",
    "weight": "4 pounds",
    "image": "https://cdn.tgdd.vn/Files/2021/04/16/1343831/tim-hieu-giong-cho-samoyed-nguon-goc-dac-diem-cach-nuoi-bang-gia-202203291549425717.jpg"
},
{
    "id": "3",
    "title": "Samoyed",
    "content": "Male",
    "age": "3yrs",
    "weight": "4 pounds",
    "image": "https://azpet.com.vn/wp-content/uploads/2021/10/Samoyed-C12432-1.jpg"
},
{
    "id": "4",
    "title": "Samoyed",
    "content": "Female",
    "age": "3yrs",
    "weight": "4 pounds",
    "image": "https://cdn.tgdd.vn/Files/2021/04/16/1343831/tim-hieu-giong-cho-samoyed-nguon-goc-dac-diem-cach-nuoi-bang-gia-202203291549425717.jpg"
},
{
    "id": "5",
    "title": "Samoyed",
    "content": "Female",
    "age": "3yrs",
    "weight": "4 pounds",
    "image": "https://azpet.com.vn/wp-content/uploads/2021/10/Samoyed-C12432-1.jpg"
},
{
    "id": "6",
    "title": "Samoyed",
    "content": "Male",
    "age": "3yrs",
    "weight": "4 pounds",   
    "image": "https://cdn.tgdd.vn/Files/2021/04/16/1343831/tim-hieu-giong-cho-samoyed-nguon-goc-dac-diem-cach-nuoi-bang-gia-202203291549425717.jpg"
},

]