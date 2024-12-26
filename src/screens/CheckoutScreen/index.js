import React, {useContext} from 'react';
import {View, FlatList, Text, Button, Alert} from 'react-native';
import {CartContext} from '../../context/CartContext';

import styles from './styles';
import useCartStore from '../../state/useCartStore';

const CheckoutScreen = ({navigation}) => {
  const {cart, clearCart} = useCartStore();

  const handleConfirmPurchase = () => {
    Alert.alert('Purchase Confirmed', 'Thank you for your purchase!', [
      {text: 'OK', onPress: () => navigation.navigate('Products')},
    ]);
    clearCart();
    while (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>
              Price: ${item.price} | Quantity: {item.quantity}
            </Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Button title="Confirm Purchase" onPress={handleConfirmPurchase} />
      </View>
    </View>
  );
};
export default CheckoutScreen;
