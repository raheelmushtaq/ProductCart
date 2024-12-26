import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';

import styles from './styles';

const ProductCard = ({product, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ProductDetail', {product})}>
      <View style={styles.card}>
        <Text style={styles.header}>{product.title}</Text>
        <Image source={{uri: product.image}} style={styles.image} />
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price}</Text>
          <Button
            title="Buy"
            onPress={() => navigation.navigate('ProductDetail', {product})}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
