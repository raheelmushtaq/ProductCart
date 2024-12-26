import React, {useContext} from 'react';
import {View, FlatList, Text, Button} from 'react-native';
import CartCard from '../../components/CartCard';
import styles from './styles';
import useCartStore from '../../state/useCartStore';

const CartScreen = ({navigation}) => {
  const {cart} = useCartStore();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigation.navigate('Checkout');
    }
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.empty}>No items in the cart</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CartCard key={item.id} product={item} navigation={navigation} />
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total Price: ${totalPrice.toFixed(2)}
            </Text>
            <Button title="Checkout" onPress={handleCheckout} />
          </View>
        </>
      )}
    </View>
  );
};
export default CartScreen;
