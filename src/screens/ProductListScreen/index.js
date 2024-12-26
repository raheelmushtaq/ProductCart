import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Button} from 'react-native';
import {fetchProducts} from '../../services/api';
import ProductCard from '../../components/ProductCard';
import styles from './styles';

const ProductListScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <Button onPress={() => navigation.navigate('Cart')} title="Cart" />
        </View>
      ),
    });
  }, [navigation]);

  const handleBuy = product => {
    navigation.navigate('Cart', {product});
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            key={item.id}
            navigation={navigation}
            product={item}
            onBuy={handleBuy}
          />
        )}
      />
    </View>
  );
};

export default ProductListScreen;
