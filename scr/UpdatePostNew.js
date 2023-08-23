import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AppContext } from './asm/ultil/AppContext';

const UpdatePostNew = (props) => {
    const { navigation,route } = props
    const {params} = route;
    const { updatenew, setupdatenew } = useContext(AppContext);
    console.log(updatenew)
 
    return (
        <View>
            <Text style={styles.textPostNews}>Đăng tin</Text>
            <Image style={styles.image} source={require("./asm/image/avatar.png")} />

            <View style={styles.buttonClick}>
                <Pressable style={styles.btn} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Chụp ảnh
                    </Text>
                </Pressable>

                <Pressable style={styles.btn} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Chọn ảnh từ thư viện
                    </Text>
                </Pressable>
            </View>

            <TextInput placeholder='Tiêu đề'  value={updatenew.title} ></TextInput>
            <TextInput placeholder='Nội dung'value={updatenew.content} ></TextInput>

            <Pressable style={styles.btnPostNews} >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Đăng Tin
                </Text>
            </Pressable>
        </View>
    )
}

export default UpdatePostNew

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
        margin: 15
    }
})