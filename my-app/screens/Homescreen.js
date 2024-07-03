import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const products = [
    { id: '1', name: 'Office Wear', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress1.png') , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png') },
    { id: '2', name: 'Black', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress2.png') , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png') },
    { id: '3', name: 'Church Wear', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress3.png'), addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png')  },
    { id: '4', name: 'Lamerei', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress4.png') , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png') },
    { id: '5', name: '21WN', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress5.png')  , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png')},
    { id: '6', name: 'LOPO', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress6.png')  , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png') },
    { id: '7', name: 'lame', type: 'Reversible Angora Cardigan', price: 120, image: require('../assets/images/Images dcit 202 ex6/dress7.png')  , addToCartImage: require('../assets/images/Images dcit 202 ex6/add_circle.png')},
  ];
  

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };
    loadCart();
  }, []);


  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
        <View style={styles.header}>
        <SimpleLineIcons name="menu" size={24} color="black" />
        <Image source={require('../assets/images/Images dcit 202 ex6/Logo.png')} style={styles.icon} />
        <AntDesign name="search1" size={24} color="black" />
        <Image source={require('../assets/images/Images dcit 202 ex6/Menu.png')} style={styles.icon} />
      </View>
      <View style={styles.subHeaderContainer}>
      <MaterialIcons name="filter-list" size={24} color="black" />
        <Text style={styles.subHeader}>OUR STORY</Text>
        <Image source={require('../assets/images/Images dcit 202 ex6/Listview.png')} style={styles.icon} />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productType}>{item.type}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>

            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Image source={require('../assets/images/add_circle.png')} style={styles.addCart} />
            </TouchableOpacity>
          </View>
        )}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#FAFAFD',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3A3D46',
    },
    icon: {
      width: 24,
      height: 24,
    },
    subHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    subHeader: {
      fontSize: 24,
      fontWeight: 'bold',
      marginHorizontal: 10,
      textAlign: 'center',
    },
    productContainer: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      alignItems: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      marginBottom: 8,
      borderRadius: 8,
    },
    productName: {
      fontSize: 18,
      marginBottom: 4,
    },
    productType: {
      fontSize: 16,
      color: '#888',
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    addButton: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addCart: {
      width: 24,
      height: 24,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  export default HomeScreen;

