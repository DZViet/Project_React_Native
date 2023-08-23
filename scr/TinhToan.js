import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'

const TinhToan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [reesult, setresult] = useState(3);

    const luaChon = (isChoose) =>{
        let tong = num1 + num2;
        if((tong == reesult && isChoose == true ) || (tong != reesult && isChoose == false)){
            setnum1(Math.floor(Math.random() *10))
            setnum2(Math.floor(Math.random() *10))
            setresult(Math.floor(Math.random() *10))
            
        }else{
            alert('GAME OVER');
        }
       
    }
  return (
    <View>
        <Text style={{color: 'red', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop:20}}>BẠN GIỎI PHÉP CỘNG</Text>
        <Text style={{color: 'blue', fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>{num1} + {num2}</Text>
        <Text style={{color: 'blue', fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}> = </Text>
        <Text style={{color: 'blue', fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}> {reesult}</Text>
        <Pressable onPress={() => luaChon(true)} style={{ backgroundColor: 'blue',padding:10}}>
            <Text style={{ color:'white', fontWeight:'bold', textAlign:'center',fontSize:15}}>ĐÚNG</Text>
        </Pressable>
        <Pressable  onPress={() => luaChon(false)} style={{ backgroundColor: 'red',padding:10, marginTop:20}}>
            <Text style={{ color:'white', fontWeight:'bold', textAlign:'center',fontSize:15}}>SAI</Text>
        </Pressable>
    </View>
  )
}

export default TinhToan