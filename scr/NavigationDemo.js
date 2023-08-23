import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';;

const MH1 = (props) => {
  const { navigation } = props;
  const [age, setAge] = useState(20);
  const { count, setCount } = useContext(AppContext);
  return (
      <View>
          <Text>Màn hình 1: {count}</Text>
          <Button title='Tăng' 
              onPress={() => setCount(count + 1)} />
               <Button title='Giảm' 
              onPress={() => setCount(count - 1)} />
          <Button
              title='Chuyển sang Màn hình 2'
              onPress={() => navigation.navigate('MH2',
                  { abc: age })} />
      </View>
  )
}
const MH2 = (props) => {
  const { navigation, route } = props;
  const { abc } = route?.params;
  return (
      <View>
          <Text>Màn hình 2: {abc}</Text>
          <Button
              title='Chuyển sang Màn hình 1'
              onPress={() => navigation.navigate('MH1')} />
      </View>
  )
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// khởi tạo Context cho App
const AppContext = createContext();
const AppProvider = (props) => {
    const { children } = props;
    const [count, setCount] = useState(0);
    return (
        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}
const NavigationDemo = () => {
    return (
      <AppProvider>
      <NavigationContainer>
          <Tab.Navigator
              initialRouteName="MH2"
              screenOptions={{ headerShown: true }}
          >
              <Tab.Screen name="MH1" component={MH1} />
              <Tab.Screen name="MH2" component={MH2}
                  initialParams={{ abc: 18 }} />
          </Tab.Navigator>
      </NavigationContainer>
  </AppProvider>
    )
}

export default NavigationDemo

/**
 * {}: object
 * []: array
 * (): function
 */