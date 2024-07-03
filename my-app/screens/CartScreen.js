import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await AsyncStorage.getItem('cart');
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    fetchCart();
  }, []);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <Image source={require('../assets/images/Images dcit 202 ex6/Logo.png')} style={styles.icon} />
      <AntDesign name="search1" size={24} color="black" />
      </View>
      <View style={styles.subHeaderContainer}>
      <Text style={styles.subheader}>Checkout</Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Feather name="x-circle" size={24} color="red" style={styles.removeIcon} onPress={() => removeFromCart(item.id)}/>

          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Est. Total: ${getTotal()}</Text>
      </View>
      <Button title="Checkout" onPress={() => alert('Checkout pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  productName: {
    fontSize: 18,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  totalContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
