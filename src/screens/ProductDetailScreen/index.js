import React, {useState} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import styles from './styles';
import useCartStore from '../../state/useCartStore';
import {ScrollView} from 'react-native-gesture-handler';

const ProductDetailScreen = ({route, navigation}) => {
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);

  const {addItemToCard} = useCartStore();

  const handleAddToCart = () => {
    const productWithQuantity = {...product, quantity};
    addItemToCard(productWithQuantity);
    navigation.navigate('Cart');
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.plusMinusButton}
          onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.plusMinusButton}
          onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Button title="Add to Cart" onPress={handleAddToCart} />
    </ScrollView>
  );
};

export default ProductDetailScreen;
