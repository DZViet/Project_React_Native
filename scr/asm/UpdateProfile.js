import { Pressable, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useContext } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AppContext } from './ultil/AppContext';
import AxiosIntance from './ultil/AxiosIntance';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



const UpdateProfile = (props) => {
    const { navigation } = props
    const { infoUser, setinfoUser } = useContext(AppContext);
    console.log(infoUser);


    const capture = async () => {
        const result = await launchCamera();
        console.log(result.assets[0].uri);
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',


        });
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        console.log(response.data.path);

        setinfoUser({ ...infoUser, avatar: response.data.path });
    };
    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',


        });
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        console.log(response.data.path);

        setinfoUser({ ...infoUser, avatar: response.data.path });
    };
    const UpdateProfile = async () => {
        const response = await AxiosIntance().post("/users/update-profile", { name: infoUser.name, address: infoUser.address, phone: infoUser.phone, avatar: infoUser.avatar, dob: infoUser.dob });
        if (response.error == false) {
            ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
        }
    }

    const dialogImageChoose = () => {
        return Alert.alert(
            "Thông báo",
            "Chọn phương thức đăng ảnnh",
            [
                {
                    text: "Chụp ảnh ",
                    onPress: () => {
                        capture()
                    },
                },

                {
                    text: "Tải ảnh lên",
                    onPress: () => {
                        getImageLibrary()
                    },
                },
                {
                    text: "Hủy",


                },
            ]
        );
    };

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View >
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() => { navigation.pop(1) }}>
                            <Image style={{ width: 20 }} source={require('./image/back.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewProfile}>
                    <TouchableOpacity onPress={dialogImageChoose}>
                        {
                            infoUser.avatar == ""
                                ?
                                <Image style={styles.image} source={require("./image/avatar.png")} />
                                :
                                <Image style={styles.image} source={{ uri: infoUser.avatar }} />
                        }
                    </TouchableOpacity>

                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{infoUser.email}</Text>
                </View>
                <View style={[styles.usernameandpassword]}>
                    <Text style={styles.textUsernameandPassword} >Username</Text>
                </View>
                <TextInput style={styles.textInput} value={infoUser.name} onChangeText={(text) => setinfoUser({ ...infoUser, name: text })} />

                <View style={[styles.usernameandpassword]}>
                    <Text style={styles.textUsernameandPassword} >Email Address</Text>
                    <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
                </View>
                <TextInput style={styles.textInput} value={infoUser.address} onChangeText={(text) => setinfoUser({ ...infoUser, address: text })} />


                <View style={[styles.usernameandpassword]}>
                    <Text style={styles.textUsernameandPassword} >Phone Number</Text>
                    <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
                </View>
                <TextInput style={styles.textInput} value={infoUser.phone} onChangeText={(text) => setinfoUser({ ...infoUser, phone: text })} />


                <View style={[styles.usernameandpassword]} >
                    <Text style={styles.textUsernameandPassword} >Day of birth </Text>
                </View>
                <TextInput style={styles.textInput} value={infoUser.dob} onChangeText={(text) => setinfoUser({ ...infoUser, dob: text })} />


                <Pressable style={styles.buttonLogin} onPress={UpdateProfile}>
                    <Text style={styles.textLogin}>
                        Next
                    </Text>
                </Pressable>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',
        marginStart: 10,
        marginEnd: 10,
        flexDirection: 'column'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'black'
    },
    viewProfile: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 10
    },

    buttonLogin: {
        marginTop: 10,
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textLogin: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textUsernameandPassword: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#4E4B66',
    },

    usernameandpassword: {
        flexDirection: 'row',
    },

    viewAccount: {
        flexDirection: 'row',

    }

})

export default UpdateProfile