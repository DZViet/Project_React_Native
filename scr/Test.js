import { StyleSheet, Text, TextInput, View,Pressable, Dimensions} from 'react-native'
import React, {useState} from 'react'

const windowWIdth = Dimensions.get('window').width;

const Test = (props) => {
    const {navigation} = props;
    const [email, onChangeEmail] = useState("");
    const [isValidEmail, setisValidEmail] = useState(true);
    const [phone, onChangePhone] = useState("");
    const [isValidPhone, setisValidPhone] = useState(true);

    const NextSreen = () =>{
        navigation.navigate("Thi");
    }
    
    const verifyEmnail = (email)=>{
      let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        if(!email) return true;
        if(regex.test(email)){
          return true;
        }
        return false;
    }
    const verifyPhone = (phone)=>{
      let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/);
      if(!phone) return true;
      if(regex.test(phone)){
        return true;
      }
      return false;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={[styles.text, { color: '#1877F2' }]}>Again!</Text>
      <Text style={styles.welcomeText}>Welcome back you’ve {'\n'} been missed</Text>
      
      <Text style={{ color: '#050505'}}>Username<Text style={{ color: '#C30052' }}>*</Text></Text>
        <TextInput style={styles.textInput} 
          onChangeText={(text) => {
            onChangeEmail(text);
            const isValid = verifyEmnail(text);
            isValid? setisValidEmail(true) :setisValidEmail(false)
          }}  
          value={email}
          
        
        />

        <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>{isValidEmail? "": "Email is Invalid!"}</Text>
 

      <Text style={{ color: '#050505', marginTop:10}}>Password<Text style={{ color: '#C30052' }}>*</Text></Text>

      <TextInput style={styles.textInput} 
          onChangeText={(text) => {
          onChangePhone(text)
          const isValid = verifyPhone(text);
            isValid? setisValidPhone(true) :setisValidPhone(false)
        }}
          value={phone}  keyboardType="numeric"/>
   
     <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>{isValidPhone? "": "Phone is Invalid!"}</Text>


      <Pressable  style={styles.buttonLogin} onPress={NextSreen}>
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>

    </View>
  )
}

export default Test

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
        marginBottom: 40
      },
      textInput: {
        marginTop: 4,
        height: 48,
        width: windowWIdth-10*2,
        borderColor: '#4E4B66',
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        textAlign: 'left',
        paddingRight: 50,
        marginBottom:10
    
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
 
     
})