import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'



const ChangePass = () => {
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:30,fontWeight:'bold'}}>ChangePass</Text>
            <View>
                <TextInput placeholder='Mật khẩu hiện tại'  />
               
            </View>
            <View>
                <TextInput placeholder='Mật khẩu mởi' />
            </View>

            <Pressable style={styles.btnChangePass}>
                <Text style={styles.text}>
                    Next
                </Text>
            </Pressable>
        </View>
    )
}

export default ChangePass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 10,
        marginEnd: 10,
        flexDirection: 'column'
    },   
    btnChangePass: {
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
})