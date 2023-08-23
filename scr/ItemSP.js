import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'

const ItemSP = (props) => {
    const {dulieu} = props;
  return (
  
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: dulieu.image }} />
                <View style={styles.content}>
                    <Text style={styles.textTitle}>{dulieu.title}</Text>
                    <Text numberOfLines={2}>{dulieu.content}</Text>
                    <Text style={{marginTop:20}}>{dulieu.createdAt}</Text>
                </View>
               
            </View>
  )
}

export default ItemSP

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 5
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 10,
        backgroundColor: 'red',
        marginStart: 10

    },
    textTitle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'

    },
    content: {
        marginStart: 10,
        width: Dimensions.get('window').width - 120
    }
})