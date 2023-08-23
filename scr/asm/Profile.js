import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const Profile = (props) => {
    const {navigation} = props
    const EditProfile = () => {
        navigation.navigate("UpdateProfile")
    }
    const Settings = () => {
        navigation.navigate("Settings")
    }
    const ChangePass = () => {
        navigation.navigate("ChangePass")
    }
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <View style={{marginLeft:150}}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Profile</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={Settings}>
                    <Image source={require('./image/Setting.png')} ></Image>
                    </TouchableOpacity>
                   
                </View>

                {/* Infor User */}
                <View style={styles.infoUser}>
                    <View>
                        <Image style={styles.image} source={require('./image/avatar.png')}></Image>
                    </View>

                    <View style={styles.itemInfoUser}>
                        <Text style={[styles.text, { fontWeight: 'bold' }]}>2156</Text>
                        <Text style={[styles.text, { color: '#4E4B66' }]}>Followers</Text>
                    </View>


                    <View style={styles.itemInfoUser}>
                        <Text style={[styles.text, { fontWeight: 'bold' }]}>567</Text>
                        <Text style={[styles.text, { color: '#4E4B66' }]}>Following</Text>
                    </View>
                    <View style={styles.itemInfoUser}>
                        <Text style={[styles.text, { fontWeight: 'bold' }]}>23</Text>
                        <Text style={[styles.text, { color: '#4E4B66' }]}>News</Text>
                    </View>

                </View>

                {/* Name and Introduction */}
                <View style={styles.introduction}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>Lucas Williams</Text>
                    <Text style={[styles.text, { color: '#4E4B66' }]}>Lorem Ipsum is simply dummy text of the {'\n'}printing and typesetting industry.
                    </Text>
                </View>

                {/* Button */}
                <View style={styles.buttonClick}>
                    <Pressable style={styles.btn} onPress={EditProfile}>
                        <Text style={[styles.text, { color: 'white', fontWeight: 'bold' }]}>
                            Updare Profile
                        </Text>
                    </Pressable>

                    <Pressable style={styles.btn} onPress={ChangePass}>
                        <Text style={[styles.text, { color: 'white', fontWeight: 'bold' }]}>
                            ChangePass
                        </Text>
                    </Pressable>
                </View>

                {/* News */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 13, alignItems: 'center', }}>
                    <Text style={[styles.text, { color: '#4E4B66', marginRight: 24 }]}>News</Text>
                    <Text style={[styles.text, { borderBottomWidth: 4, borderBottomColor: '#1877F2' }]}>Recent</Text>
                </View>
                
             
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginHorizontal: 24,


    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10


    },
    text: {
        fontSize: 16,
        color: '#000000',


    },



    infoUser: {
        marginTop: 13,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',

    },
    itemInfoUser: {
        alignItems: 'center',
        marginTop: 24,
    },
    image: {
        width: 100, height: 100,

    },


    introduction: {
        marginTop: 15,
        flexDirection: 'column',
    },
    buttonClick: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#1877F2',
        borderRadius: 6,
        width: 172,
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomNav: {
        width: '100%',
        height: 78,
        gap: 32,
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',

        // borderColor: 'black',
        // borderWidth: 2,
    },
    itemBottomNav: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottomNav: {
        fontSize: 14,
        color: '#4E4B66',
    }
})




