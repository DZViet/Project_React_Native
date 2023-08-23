
import React from 'react';
import {
  SafeAreaView,
  Text, Image
} from 'react-native';
import Login from './scr/asm/Login';
import Register from './scr/asm/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContextProvider } from './scr/asm/ultil/AppContext';
import AppNavigator from './scr/asm/ultil/AppNavigator';
import NavigationDemo from './scr/NavigationDemo';
import DangNhap from './scr/DangNhap';
import Thi from './scr/Thi';
import ItemSP from './scr/ItemSP';
import Test from './scr/Test';
import Dangky from './scr/Dangky';
import Bai1 from './scr/Bai1';
import FList from './scr/FList';
import FlatListdemo from './scr/FlatListdemo';
import ListNews from './scr/asm/ListNews';
import ItemListNews from './scr/asm/ItemListNews';
import NewDetail from './scr/asm/NewDetail';
import Profile from './scr/asm/Profile';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (


    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppContextProvider>


    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Bai1' screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Bai1" component={Bai1} />
    //     <Stack.Screen name="FList" component={FList} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Profile/>
  );
};


export default App;