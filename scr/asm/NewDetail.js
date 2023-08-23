
import { ScrollView, StyleSheet, Text, View, Image, Pressable, ToastAndroid, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AxiosIntance from './ultil/AxiosIntance';
import UpdatePostNew from '../UpdatePostNew';
import ListNews from './ListNews';

const NewDetail = (props) => {
    const { navigation } = props
    const { route } = props;
    const { params } = route;

    const [imageUrl, setimageUrl] = useState("");
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [category, setcategory] = useState("");
    

    const [isLoading, setisLoading] = useState(true)

    const dialogDeleteChoose = () => {
        return Alert.alert(
            "Thông báo",
            "Chọn phương thức:",
            [
                {
                    text: "Hủy",
                },

                {
                    text: "Xoá bài viết ",
                    onPress: () => {
                        DeleteNews()
                    },
                },

                {
                    text: "Chỉnh sửa bài viết",
                    onPress: () => {
                        UpdatePostNew()
                    },
                },
               
            ]
        );
    };
 //Xoá sản phẩm theo id   
 // http://localhost:3000/api/product/delete-by-id/:id

    const DeleteNews = async () => {
        // http://localhost:3000/api/product/delete-by-id/:id
        const response = await AxiosIntance().delete("/product/delete-by-id/" + params.id);
        console.log(response);
        if (response.result === true) {
            ToastAndroid.show("Xóa bài viết thành công", ToastAndroid.SHORT);
            
        } else {
            ToastAndroid.show("XÓA BÀI VIẾT thất bại", ToastAndroid.SHORT);
        }

    }
    const UpdatePostNew = ()=>{
        navigation.navigate("UpdatePostNew");
    }
//Hiển thị chi tiết sản phẩm theo ID
    useEffect(() => {
        const getDetails = async () => {
            const response = await AxiosIntance().get("/product/get-by-id?id=" + params.id );
            console.log(response);
            if (response.result === true) {
                //lấy dữ liệu thành công
             
                setimageUrl( response.product.image);
                setname(response.product.name);
                setprice("Price: " + response.product.price);
                setquantity("Quantity: " + response.product.quantity);
                setcategory("Category: " + response.product.category.name);
                setisLoading(false)
            } else {
                ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT)
            }
        };

        getDetails();

        return () => {

        }
    }, [])


    return (
        <>
            {
                isLoading == true ? (
                    <View>
                        <ActivityIndicator size='large' color='#fff00' />
                        <Text style={{ textAlign: 'center' }}>Loading..</Text>
                    </View>
                )

                    :
                    (<ScrollView style={styles.container}>
                        <View style={[styles.viewAccount, { justifyContent: 'space-between', margin: 10 }]}>
                            <View style={[styles.viewAccount, { marginTop: 10 }]}>
                                <TouchableOpacity onPress={() => { navigation.pop(1) }}>
                                <View style={styles.viewAccount}>
                                    <Image source={require('./image/back.png')} />
                                </View>
                                </TouchableOpacity>   
                            </View>

                            <View style={[styles.viewAccount, { marginTop: 10 }]}>
                                <TouchableOpacity onPress={dialogDeleteChoose}>
                                <View>
                                    <Image style={{marginRight:20}} source={require('./image/share.png')} />
                                </View>
                                </TouchableOpacity>
                               
                                <Image  source={require('./image/option.png')} />
                            </View>
                        </View>

                        <View style={[styles.viewAccount, { justifyContent: 'space-between', margin: 10 }]}>
                            <View style={styles.viewAccount}>
                                <Image source={require('./image/Ellipse.png')} />
                                <View>
                                    <Text style={styles.textAccount1}>BBC News</Text>
                                    <Text style={styles.textAccount2}>14m ago</Text>
                                </View>
                            </View>

                            <View>
                                <Pressable style={{ backgroundColor: '#1877F2', borderRadius: 8, height: 30, width: 100, alignItems: 'center', margin: 8 }}>
                                    <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', marginTop: 5 }}>Following</Text>
                                </Pressable>
                            </View>
                        </View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.textTitle}>{name}</Text>
                        <Text style={styles.europe}>{price}</Text>
                        <Text style={styles.europe}>{quantity}</Text>
                        <Text style={styles.europe}>{category}</Text>


                        <View style={[styles.viewAccount, { justifyContent: 'space-between', margin: 10 }]}>
                            <View style={[styles.viewAccount, { marginTop: 20 }]}>
                                <View style={styles.viewAccount}>
                                    <Image  source={require('./image/heart.png')} />
                                    <View>
                                        <Text style={styles.textAccount1}>24.5K</Text>
                                    </View>
                                </View>
                                <View style={styles.viewAccount}>
                                    <Image style={{ marginStart: 30 }} source={require('./image/comment.png')} />
                                    <View>
                                        <Text style={styles.textAccount1}>1K</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, marginRight: 20 }}>
                                <Image  source={require('./image/save.png')} />
                            </View>
                        </View>
                    </ScrollView>)

            }
        </>

    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
    },

    image: {
        marginTop: 50,
        width: 462.72,
        height: 307.05,
        top: -33.95,
        left: -41.36,
        borderRadius: 15,
    },

    textTitle: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft:30
        

    },

    textPlot: {
        color: 'black',
        fontFamily: 'Popins',
        fontSize: 18,
        marginTop: 8,
        fontStyle: 'normal',
        letterSpacing: 0.12,
        lineHeight: 24,
        margin: 5,
        marginLeft: 20

    },

    accountTitle: {
        marginTop: 0,
        marginLeft: 10,

    },

    europe: {
        color: 'black',
        fontFamily: 'Popins',
        fontSize: 15,
        marginLeft:30, 
        marginTop:10
    },


    viewAccount: {
        flexDirection: 'row',
    },


    viewFollowing: {
        paddingTo: 50
    },

    textAccount1: {
        color: 'black',
        marginStart: 8,
        fontFamily: 'Popins',
        fontSize: 16,
        fontWeight: 'bold',

    },

    textAccount2: {
        color: 'black',
        marginStart: 8,
        fontFamily: 'Popins',
        fontSize: 16,

    },
})
export default NewDetail