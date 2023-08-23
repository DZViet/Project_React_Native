import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen1 = (props) => {
  //khi khai báo các Screen trong navigation ở file App.js, mặc định trong props của mỗi Screen sẽ có biến navigation
  const { navigation } = props;

  const ClickNe = () => {
    //Truyền tên Screen muốn chuyển qua vào navigate
    navigation.navigate('Screen2',{'name' :'Đặng Văn Việt', 'old': 20});
  }

  return (
    <View>
      <Text>Screen1</Text>
      <Pressable style={styles.pressable} onPress={ClickNe}>
        <Text style={styles.text}>Go to Screen2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  pressable: {
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 10
  },
  text: {
    color: 'white'
  }

})