import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  image: {height: 200, resizeMode: 'contain', marginBottom: 20},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  description: {fontSize: 16, color: '#555', marginBottom: 20},
  price: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  quantityContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  plusMinusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
  quantity: {fontSize: 18, fontWeight: 'bold'},
});

export default styles;
