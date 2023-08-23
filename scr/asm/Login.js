import { Pressable, StyleSheet, Text, TextInput,Dimensions, View, Image, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewDetail from './NewDetail';
import ChangePass from '../ChangePass';
import { AppContext } from './ultil/AppContext';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const Login = (props) => {
  const { navigation } = props;
  const [toggLeCheckBox, settoggLeCheckBox] = useState(false)
  const [emailUser, setemailUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("")
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const { setisLogin, setinfoUser,setupdatenew } = useContext(AppContext);

  //chuyển qua màn hình đăng ký
  const dangKy = () => {
    navigation.navigate("Register");
  }
 
  const dangNhapNe = async () => {
    try {
      const response = await AxiosIntance().post("/user/login", { email: emailUser, password: passwordUser });
      if (response.returnData.error === false) {
        console.log(response.returnData.data.token);
        await AsyncStorage.setItem("token", response.returnData.data.token);
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
        setinfoUser(response.returnData.data.user);
        setupdatenew(response.returnData.data);
        setisLogin(true);
      } else {
        ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={[styles.text, { color: '#1877F2' }]}>Again!</Text>
      <Text style={styles.welcomeText}>Welcome back you’ve {'\n'} been missed</Text>
      <Text style={{ color: '#050505'}}>Username<Text style={{ color: '#C30052' }}>*</Text></Text>
      <TextInput style={[styles.textInputPass,{marginEnd:10}]} onChangeText={setemailUser} value={emailUser}></TextInput>
      <Text style={{ color: '#050505'}}>Password<Text style={{ color: '#C30052' }}>*</Text></Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={styles.textInputPass}
          secureTextEntry={getPasswordVisible ? false : true}
          onChangeText={setpasswordUser}  value={passwordUser}/>
        <TouchableOpacity style={styles.visible}
          onPress={() => {
            setPasswordVisible(!getPasswordVisible)
          }}>
          {
            getPasswordVisible ?
              <Image resizeMode='contain' source={require('../asm/image/visibleEye.png')}></Image>
              :
              <Image resizeMode='contain' source={require('../asm/image/invisibleEye.png')}></Image>
          }
        </TouchableOpacity>
      </View>
      <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
        <View style={styles.viewRemember}>
          <BouncyCheckbox fillColor="blue" />
          <Text style={styles.textRemember}>Remember me</Text>
        </View>
        <Text style={[styles.textRemember, { color: '#1877F2' }]}>Forget the password?</Text>
      </View>
      <Pressable style={styles.buttonLogin} onPress={dangNhapNe}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Pressable style={styles.buttonLogin} onPress={dangKy}>
        <Text style={styles.textLogin}>Register</Text>
      </Pressable>
      <Text style={styles.textWith}>or continute with</Text>
      <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
        <Pressable style={styles.buttonSocial}>
          <Image style={styles.imageSocial} source={require('./image/fb.png')} />
          <Text>Facebook</Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>
          <Image style={styles.imageSocial} source={require('./image/gg.png')} />
          <Text>Google</Text>
        </Pressable>
      </View>
      <View style={styles.viewDonthave}>
        <Text style={{ textAlign: 'center' }}>don't have an account?</Text>
        <Text style={{ color: 'blue' }}> Sign Up</Text>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#050505'
  },
  welcomeText: {
    fontFamily: 'Popins',
    fontSize: 20,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 10
  },
  viewRemember: {
    flexDirection: 'row',
    marginTop: 5
  },
  textRemember: {
    color: '#050505'
  },
  buttonLogin: {
    height:48,
    backgroundColor: '#1877F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'

  },
  textWith: {
    color: '#4E4B66',
    textAlign: 'center',
    margin: 10
  },
  imageSocial: {
    width: 21,
    height: 21,
    marginEnd: 10
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 174,
    height: 48,
    backgroundColor: '#EEF1F4',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  viewDonthave: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  visible: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
  textInputPass: {
    marginTop: 4,
    width: windowWIdth-10*2,
    height: 48,
    borderColor: '#4E4B66',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    textAlign: 'left',
    paddingRight: 50,

  },
})