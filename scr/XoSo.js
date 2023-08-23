import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const XoSo = () => {

  const [soDuDoan, setsoDuDoan] = useState(-1)
  const [ketQua, setketQua] = useState('Kết quả sẽ hiển thị ở đây!')

  const DuDoan = () =>{ 
    let numRand = Math.floor(Math.random() * 5) + 1;
    console.log(numRand)
    if(soDuDoan == numRand){
      setketQua('Bạn đã đoán đúng số ' + numRand);
    }else{
      setketQua('Bạn sai rồi đoán lại nha !');
    }
  }


  return (
    <View>
      <Text style={{ color: 'red', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>XỔ SỔ ĐÊ !!!</Text>
      <Text style={{ color: 'green', fontSize: 20, textAlign: 'center', marginTop: 10 }}>Nhập từ 1 đến 10</Text>
      <TextInput onChangeText={newText => setsoDuDoan(newText)} placeholder='Nhập 1 số' style={{ borderWidth: 2, borderColor: 'red', margin: 10, fontSize: 20, borderRadius: 20, padding: 20 }} />

      <Pressable onPress={DuDoan} style={{ backgroundColor: 'blue', marginTop: 10 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', padding: 10, textAlign: 'center' }}>Dự đón</Text>
      </Pressable>
      <Text style={{ color: "violet", fontSize: 20, textAlign: 'center', marginTop: 10 }}>{ketQua}</Text>
    </View>
  );
};

export default XoSo