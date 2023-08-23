import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListNews = (props) => {
    const { dulieu, navigation } = props;

    const ClickItem = () => {
        console.log('Click ne');
        navigation.navigate("NewDetail", {id: dulieu._id});
    }
    return (
       
        <TouchableOpacity onPress={ClickItem} style={styles.container+{backgroundColor:'black'}}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: dulieu.image }}></Image>
          <View style={styles.content}>
            <Text style={styles.texttitle}>{dulieu.name} </Text>
            <Text numberOfLines={2}>Price: {dulieu.price}</Text>
            <Text numberOfLines={2}>Quantity: {dulieu.quantity}</Text>
            <Text numberOfLines={2}>Category: {dulieu.category.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
  

    )
}

export default ItemListNews

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         marginBottom: 5
//     },
//     imageview: {
//         width: 96,
//         height: 96,
//         borderRadius: 10,
//         backgroundColor: 'red',
//         marginStart: 10

//     },
//     textTitle: {
//         fontSize: 20,
//         color: 'red',
//         fontWeight: 'bold'

//     },
//     content: {
//         marginStart: 10,
//         width: Dimensions.get('window').width - 120
//     }

// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    backgroundColor: '#F5F5F5'
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    // marginBottom: 10,
  },
  image: {
    height: 96,
    width: 90,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  texttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  content: {
    marginStart: 10,
    width: 150
  }
})