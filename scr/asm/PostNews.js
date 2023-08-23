import { StyleSheet, Text, View, Image, Button, TextInput, ToastAndroid, Pressable } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosIntance from './ultil/AxiosIntance';


const PostNews = () => {

    const [imageNe, setimageNe] = useState("");
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

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
        if (response.error == false) {
            setimageNe(response.data.path);
            ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
        }
        else {
            ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
        }
    }
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
        if (response.error == false) {
            setimageNe(response.data.path);
            ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
        }
        else {
            ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
        }
    }
    const dangTin = async () => {
        const response = await AxiosIntance().post("/articles", { title: title, content: content, image: imageNe });
        if (response.error == false) {
            ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);

        }
        else {
            ToastAndroid.show("Đăng tin thất bại! Hãy thử lại?", ToastAndroid.SHORT);
        }
    }
    return (
        <View>
            <Text style={styles.textPostNews}>Đăng tin</Text>
            <Image style={styles.image} source={{ uri: imageNe }} />

            <View style={styles.buttonClick}>
                <Pressable style={styles.btn} onPress={capture}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Chụp ảnh
                    </Text>
                </Pressable>

                <Pressable style={styles.btn} onPress={getImageLibrary}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Chọn ảnh từ thư viện
                    </Text>
                </Pressable>
            </View>
            
            <TextInput placeholder='Tiêu đề' onChangeText={settitle}></TextInput>
            <TextInput placeholder='Nội dung' onChangeText={setcontent}></TextInput>

            <Pressable style={styles.btnPostNews} onPress={dangTin}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Đăng Tin
                </Text>
            </Pressable>
        </View>
    )
}

export default PostNews

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginLeft: 110,
        marginTop: 10
    },
    textPostNews: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10
    },
    buttonClick: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    btnPostNews: {
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        margin:15
    }


})