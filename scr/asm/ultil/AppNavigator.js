import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import Screen1 from '../Screen1'
import Screen2 from '../Screen2'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNews from '../ListNews';
import { AppContext } from './AppContext';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';
import Register from '../Register';
import NewDetail from '../NewDetail';
import PostNews from '../PostNews'
import Profile from '../Profile';
import UpdateProfile from '../UpdateProfile';
import Settings from '../../Settings';
import ChangePass from '../../ChangePass';
import UpdatePostNew from '../../UpdatePostNew';
import { ICON, COLOR } from '../../contants/Themes.tsx'


// login, register =>stack
const Stack = createNativeStackNavigator();
const Users = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

const News = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LisNews" component={ListNews} />
            <Stack.Screen name="NewDetail" component={NewDetail} />
            <Stack.Screen name="UpdatePostNew" component={UpdatePostNew} />
        </Stack.Navigator>
    )
}
const ProfileTabs = () => {
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
        </Stack.Navigator>
    )
}

//list news, profile, news manager =>tab
const Tab = createBottomTabNavigator();
const Main = () => {
    return (














       


            // <Tab.Navigator
            //     screenOptions={
            //         ({ route }) => ({
            //             tabBarIcon: ({ focused, label }) => {

            //                 let iconName = focused
            //                 if (route.name === 'News') {
            //                     iconName = focused ? ICON.shop : ICON.shop
            //                     label = 'News'
            //                 } else if (route.name === 'PostNews') {
            //                     iconName = focused ? ICON.explore : ICON.explore;
            //                     label = 'PostNews'
            //                 } else if (route.name === 'ProfileTabs') {
            //                     iconName = focused ? ICON.cart : ICON.cart;
            //                     label = 'ProfileTabs'
            //                 }

            //                 // You can return any component that you like here!
            //                 return <View style={{
            //                     flex: 1,
            //                     alignItems: 'center',
            //                     justifyContent: 'center'
            //                 }}>
            //                     <Image source={iconName}
            //                         style={{
            //                             width: 30, height: 30, resizeMode: 'stretch',
            //                             tintColor: focused ? COLOR.primary : COLOR.iconNotFocused
            //                         }} />
            //                     <Text style={{
            //                         color: focused ? COLOR.primary : COLOR.iconNotFocused,

            //                     }}>{label}</Text>
            //                 </View>;
            //             },
            //             headerShown: false,
            //             tabBarShowLabel: false,
            //             tabBarStyle: {
            //                 height: 66,
            //             },
            //         })}
            // >
            //     <Tab.Screen name="News" component={News} />
            //     <Tab.Screen name="PostNews" component={PostNews} />
            //     <Tab.Screen name="ProfileTab" component={ProfileTabs} />

            // </Tab.Navigator>
        












        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen name="News" component={News} options={{
                title: "Home",
                tabBarIcon: () => (<Image source={require('../image/Home.png')} />)
            }} />
            <Tab.Screen name="PostNews" component={PostNews} options={{ title: "PostNews",
                tabBarIcon: () => (<Image source={require('../image/news.png')}  />)
            }} />
            <Tab.Screen name="ProfileTabs" component={ProfileTabs} options={{ title: "Profile",
                tabBarIcon: () => (<Image source={require('../image/profile.png')}  />)
            }} />

        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (

        <>
            {
                isLogin == false ? <Users /> : <Main />
            }
        </>

    )
}

export default AppNavigator