import {
    StyleSheet, Text, View, Image, TextInput, Button,
    Alert,
    Pressable
} from 'react-native'
import React, { useState } from 'react'

const DangNhap = (props) => {
    const {navigation} = props;
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');

    const NextSreen = () =>{
        navigation.navigate("Thi");
    }

    const onLogin = () => {
        if (!name && !password || !name || !password) {
            Alert.alert('Please enter your name or password');
        }
        else if(name.trim().length == 0 && password.trim().length == 0 || name.trim().length == 0 || password.trim().length == 0){
            Alert.alert('Please enter your name or password!!!!');
        }
        else if(name.trim().length > 10 && password.trim().length > 10 || name.trim().length > 10 || password.trim().length > 10){
            Alert.alert('Please enter your name or password < 10');
        }
        else {
            Alert.alert('Login success');
            NextSreen();
        }

      
    }

    return (
        <View style={loginStyles.container}>
            <Image
                style={loginStyles.avatar}
                source={require('./asm/image/avatar.png')} />
            <Text style={loginStyles.started}>Lets Get Started</Text>

            <View style={loginStyles.inputContainer}>
                <View>
                <Image
                    style={[loginStyles.user]}
                    source={require('./asm/image/profile.png')} />
                <TextInput
                    style={loginStyles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                </View>
                <View>
                <Image
                    style={[loginStyles.user, {marginTop:10}]}
                    source={require('./asm/image/profile.png')} />
                <TextInput
                    style={[loginStyles.input, {marginTop:10}]}
                    placeholder="Name"
                    value={password}
                    onChangeText={setpassword}
                />
                </View>
                <View>
                    <Pressable onPress={onLogin} style={{borderWidth:1, backgroundColor:'#2F58CD',borderRadius:6, marginTop:10, height:50 }}>
                        <Text style={{color:'white', textAlign:'center', marginTop:10, fontWeight:'bold'}}>LOGIN</Text>
                    </Pressable>
                </View>
                

            </View>
        </View>
    )
}


export default DangNhap

const loginStyles  = StyleSheet.create({
    input: {
        height: 52,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 60,
    },
    user: {
        position: 'absolute',
        top: 15,
        left: 30,
        zIndex: 1
    },
    inputContainer: {
        paddingHorizontal: 24,
        position: 'relative',
    },
    started: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 29,
        textTransform: 'capitalize',
        color: '#fff',
        textAlign: 'center',
    
    },
    avatar: {
        width: 300,
        height: 300,
        margin:60
    },
    container: {
        flex: 1,
        backgroundColor: '#FF8B6A',
        // padding: 24,
    }
})