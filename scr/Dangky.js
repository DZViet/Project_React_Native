import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
const windowWIdth = Dimensions.get('window').width;
const Dangky = () => {
    const [toggLeCheckBox, settoggLeCheckBox] = useState(false)
    const [email, onChangeEmail] = useState("");
    const [isValidEmail, setisValidEmail] = useState(true);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpasswor] = useState("")
    const [Password, setPasswor] = useState("")

    const verifyEmnail = (email) => {
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        if (!email) return true;
        if (regex.test(email)) {
            return true;
        }
        return false;
    }

    const onLogin = () => {
        if (!name && !username && !email && !password && !Password) {
            Alert.alert('Khong dc de trong thong tin');
        }
        else if(name.trim().length > 10 || username.trim().length > 10 || email.trim().length > 10 || password.trim().length > 10 || Password.trim().length > 10){
            Alert.alert('Độ dài không vượt quá 10 kí tự');
        }else if(password != Password){
            Alert.alert('Mật khẩu không giống nhau');
        }
        else {
            Alert.alert('Login success');
            
        }


    }
    return (
        <View style={styles.container}>
            <View style={styles.view}>
            <Image style={{ marginLeft: 10, marginTop:10 }} source={require("./asm/image/round.png")} />
            <Image style={{ marginLeft: 40 }} source={require("./asm/image/Vector.png")} />
            </View>
            
            <Text style={{ color: '#009EFD', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Real Social Networking</Text>
            <Text style={{ color: '#009EFD', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>REGISTER</Text>
            <View style={{ marginTop: 50 }}>
                <TextInput placeholder='Name' style={[styles.textInputPass, { marginEnd: 10 }]} onChangeText={setname} value={name}></TextInput>
                <TextInput placeholder='Username' style={[styles.textInputPass, { marginEnd: 10 }]} onChangeText={setusername} value={username}></TextInput>
               
                
                <TextInput placeholder='Email' style={styles.textInputPass }
                    onChangeText={(text) => {
                        onChangeEmail(text);
                        const isValid = verifyEmnail(text);
                        isValid ? setisValidEmail(true) : setisValidEmail(false)
                    }}
                    value={email}


                />
                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{isValidEmail ? "" : "Email khong dung dinh dang!"}</Text>
                <TextInput placeholder='Password' style={[styles.textInputPass, { marginEnd: 10 }]} onChangeText={setpasswor} value={password}></TextInput>
                <TextInput placeholder='Confirm password' style={[styles.textInputPass, { marginEnd: 10 }]} onChangeText={setPasswor} value={Password}></TextInput>
            </View>
            <View>
                <Pressable style={styles.btnLogin} onPress={onLogin}>
                    <Text style={styles.textLogin}>Submit</Text>
                </Pressable>
            </View>
            <View>
                <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 10 }}>By register, you agree to our Terms, Data Policy and Cookies Policy.</Text>
            </View>
            <View style={styles.viewDonthave}>
                <Text style={{ textAlign: 'center' }}> Have an account?</Text>
                <Text style={{ color: 'blue' }}> Sign Up</Text>
            </View>


        </View>
    )
}

export default Dangky

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputPass: {
        marginTop: 4,
        marginBottom: 10,
        height: 48,
        width: windowWIdth-10*2,
        borderColor: '#4E4B66',
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        marginLeft:5
    },
    btnLogin: {
        backgroundColor: "#1AE4A6",
        height: 50,
        width: 150,
        borderRadius: 50,
        marginLeft: 120

    },
    textLogin: {
        marginTop: 10,
        textAlign: 'center',
        color: "white",
        fontSize: 20,
    },
    viewDonthave: {
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    view:{
        flexDirection:'row'
    }
})