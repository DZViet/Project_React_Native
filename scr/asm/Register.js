import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AxiosIntance from './ultil/AxiosIntance'


const Register = (props) => {
  const { navigation } = props;
  const [toggLeCheckBox, settoggLeCheckBox] = useState(false);
  const [emailUser, setemailUser] = useState("");
  const [nameUser, setnameUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("")
  const GotoLogin = () => {
    navigation.navigate("Login")

  }

  const onPress = async () => {
    let data = { email, password, name }
    const fetchData = async (data) => {
        let url = 'http://172.16.64.86:3000/api/user/register';
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        const res = await response.json()
        return res;
    }
    const res = await fetchData(data);
    console.log(res)
}


  const dangKyNe = async () => {
    console.log(emailUser, passwordUser, nameUser);
    try {
      const response = await AxiosIntance().post("/user/register", { email: emailUser, password: passwordUser, name:nameUser });
      console.log(response)
      if (response.error === false) {
        ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
        navigation.navigate("Login")
      } else {
        ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#1877F2' }]}>Hello!</Text>
      <Text style={styles.welcomeText}>Signup to get Started</Text>
     
      <Text style={[styles.textUser]}>Email<Text style={{ color: '#C30052' }}>*</Text></Text>
      <TextInput style={styles.textInput} onChangeText={setemailUser} value={emailUser}></TextInput>
      <Text style={[styles.textUser]}>Password<Text style={{ color: '#C30052' }}>*</Text></Text>
      <TextInput style={styles.textInput} onChangeText={setpasswordUser} value={passwordUser}></TextInput>
      <Text style={[styles.textUser]}>Username<Text style={{ color: '#C30052' }}>*</Text></Text>
      <TextInput style={styles.textInput} onChangeText={setnameUser} value={nameUser}></TextInput>

      <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
        <View style={styles.viewRemember}>
          <BouncyCheckbox fillColor="blue" />
          <Text style={styles.textRemember}>Remember me</Text>
        </View>

      </View>
      <Pressable style={styles.buttonLogin} onPress={dangKyNe}>
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
        <Text style={{ textAlign: 'center' }}>Already have an account ?</Text>
        <Text style={{ color: 'blue' }} onPress={GotoLogin}> Login</Text>
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  text: {
    fontFamily: 'Popins',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#050505'
  },
  welcomeText: {
    fontFamily: 'Popins',
    fontSize: 20,
    marginTop: 4,
    color: '#4E4B66',
    marginBottom: 20
  },
  textUser: {
    color: '#050505'
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5
  },
  viewRemember: {
    flexDirection: 'row',
    marginTop: 5
  },
  textRemember: {
    color: '#050505'
  },
  buttonLogin: {
    height: 48,
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
    textAlign: 'center'
    
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
    marginTop: 5
  }
})