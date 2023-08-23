import { Pressable, StyleSheet, Text, TextInput, ToastAndroid, View, Image } from 'react-native'
import React, {useState, useEffect, Component} from 'react';
import { StackNavigationState } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FList from './FList';
import AxiosIntance from './asm/ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Bai1 = (props) => {
    const {navigation} = props;
    const [email, onChangeemail] = useState('');
    const [isValidEmail, setisValidEmail] = useState(true);
    const [password, setpassword] = useState("");
    const [isValidPass, setisValidPass] = useState(true);

    const verifyEmail = (email) => {
        let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
        if(!email) return true;
        if(regex.test(email)) {
            return true;
        }
        return false;
    }

    const dangNhap = () => {
        navigation.navigate('FList');
        ToastAndroid.show("Dang nhap thanh cong", ToastAndroid.SHORT);
    }

    return (
        <View>
            <Image style={{height:200, width:200, alignSelf: 'center'}} source={require('../scr/asm/image/photo.png')}></Image>
            <Text style={{textAlign: 'center', fontSize: 30, fontWeight:'bold'}}>Lest get started</Text>
            <Text style={{textAlign: 'left', fontSize: 20, fontWeight:'bold', marginLeft: 10}}>Create an account</Text>

            {/* <Text style={{ padding: 10, fontSize: 20, }}>Email</Text> */}
            <TextInput style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
            placeholder="Email"
            onChangeText={(text) => {
                onChangeemail(text);
                const isValid = verifyEmail(text);
                isValid ? setisValidEmail(true) : setisValidEmail(false);
            }}
            value={email}
            />
            <Text style={{padding: 10, fontSize: 15, color: 'red'}}>{isValidEmail? '' :'Email ko hop le!'}</Text>

            <TextInput style={{ height: 40, margin: 8, borderWidth: 1, padding: 10 }}
            placeholder="Name"
            onChangeText={(text) => {
                onChangeemail(text);
                
            }}
            value={email}
            />
            <Text style={{padding: 10, fontSize: 15, color: 'red'}}>{isValidEmail? '' :'Ten ko hop le!'}</Text>

            <TextInput style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
            placeholder="Password"
            onChangeText={(text) => {
                setpassword(text);
            }}
            value={password}

            />
            <Text style={{padding: 10, fontSize: 15, color: 'red'}}>{isValidPass ? '' : 'Password ko dc bo trong!'}</Text>

            <Pressable style={styles.buttonLogin} onPress={dangNhap} >
                <Text>Login</Text>
            </Pressable>

        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    buttonLogin: {
        height: 48,
        backgroundColor: '#FF8B6A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    
      },
})