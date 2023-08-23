import { StyleSheet, Text, View, FlatList, Image, ToastAndroid, ActivityIndicator, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListNews from './ItemListNews'
import axios from 'axios';
import AxiosIntance from './ultil/AxiosIntance';

const windowWIdth = Dimensions.get('window').width;

const ListNews = (props) => {
  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchText, setsearchText] = useState("")


  // useEffect(() => {
  //   const getNews = async () => {
  //     const response = await AxiosIntance().get("/articles");
  //     console.log(response.data);
  //     if (response.error == false) {
  //       //lấy dữ liệu thành công
  //       setdataNe(response.data)
  //       setisLoading(false);
  //     } else {
  //       ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT)
  //     }
  //   }

  //   getNews();

  //   return () => {

  //   }
  // }, [])

  useEffect(() => {
    const getProducts = async () => {
      const response = await AxiosIntance().get("/product/get-all");
      console.log(response.products);
      if (response.result) {
        setdataNe(response.products)
        setisLoading(false);

      } else {
        ToastAndroid.show("Lấy data thất bại")
      }
    }
    getProducts();
    return () => {

    }
  }, [])

  let timeOut = null;
  const countDownSearch = (searchText) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      search(searchText);
    }, 3000);
  }

  const search = async (searchText) => {
    setisLoading(true);
    const response = await AxiosIntance().get("/articles/search?title=" + searchText)
    if (response.error == false) {
      //lấy dữ liệu thành công
      setdataNe(response.data)
      setisLoading(false);
    } else {
      ToastAndroid.show("Không tìm thấy nội dung tìm kiếm", ToastAndroid.SHORT)
    }
  }

  return (
  
    <View style = {styles.container}>
      <View style={styles.image}>
        <View>
          <Image style={[styles.image, { marginStart: 20 }]} source={require('./image/brand.png')} />
        </View>
        <Image style={[styles.image, { marginEnd: 20 }]} source={require('./image/notifi.png')} />
      </View>
      <View style={styles.inputBox}>
        <TouchableOpacity style={[styles.visible, { left: 12 }]}
          onPress={search}>
          <Image resizeMode='contain' source={require('../asm/image/search.png')}></Image>

        </TouchableOpacity>
        <TouchableOpacity style={styles.visible} >
          <Image resizeMode='contain' source={require('../asm/image/filter.png')}></Image>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search" onChangeText={(text) => { countDownSearch(text) }}></TextInput>

      </View>

      <View style={styles.viewRemember}>
        <View>
          <Text style={[styles.viewRemember, { marginStart: 10 }]}>Latest</Text>
        </View>
        <Text style={[styles.viewRemember, { marginEnd: 10 }]}>See all</Text>
      </View>

      <View style={styles.viewRemember}>
        <Text style={[styles.viewCollect, { marginStart: 10, color: 'black', fontWeight: 'bold' }]}>All</Text>
        <Text style={styles.viewCollect}>Sports</Text>
        <Text style={styles.viewCollect}>Politics</Text>
        <Text style={styles.viewCollect}>Bussiness</Text>
        <Text style={styles.viewCollect}>Health</Text>
        <Text style={styles.viewCollect}>Travel</Text>
        <Text style={styles.viewCollect}>Science</Text>
      </View>

      {
        isLoading == true ? (
          <View>
            <ActivityIndicator size='large' color='#fff00' />
            <Text style={{ textAlign: 'center' }}>Loading..</Text>
          </View>
        ) : (
          <FlatList
            data={dataNe}
            renderItem={({ item }) => <ItemListNews dulieu={item} navigation={navigation} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        )
      }

    </View>


  )
}

export default ListNews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: 'column'
  },
  
  viewRemember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10

  },
  image: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  },
  viewCollect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginEnd: 5
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
    margin: 10
  },
  visible: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
  input: {
    paddingLeft: 14,

    height: 48,
    width: windowWIdth - 130,
    marginLeft: 40

  },
})


