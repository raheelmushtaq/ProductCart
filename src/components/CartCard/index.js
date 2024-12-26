import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const CartCard = ({product, navigation}) => {
  return (
    <View
    // onPress={() => navigation.navigate('ProductDetail', {product})}>
    >
      <View style={styles.card}>
        <Image source={{uri: product.image}} style={styles.image} />
        <View style={styles.item}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.details}>
            Price: ${product.price} | Quantity: {product.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
