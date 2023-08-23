import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const Welcome = (props) => {
  const {name,old,address} = props;
  const [hoten, sethoTen] = useState('Nguyễn Hùng')
  // if(hoten != "ChiPu")
  //   sethoTen("ChiPhu")
  const ClickDiNe = () =>{
    sethoTen("ChiPu3")
  }
  const Xuly = (luaChon, so) =>{
    if(luaChon){
      console.log("Welcome FPT" + so);
    }else{
      console.log("Good bye!" + so);
    }
  }
  return (
    <View>
      <Text>Welcome - {name}</Text>
      <Text>Welcome - {old}</Text>
      <Text>Welcome - {address}</Text>
      <Text>Welcome - {hoten}</Text>
      <Button title='Click em đi' onPress={ClickDiNe}/>
      <Button title='Đúng' onPress={() => Xuly(true,1)}/>
      <Button title='Sai' onPress={() => Xuly(false,2)}/>
    </View>
  )
}

export default Welcome

