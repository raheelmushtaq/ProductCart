import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  header: {fontSize: 18, fontWeight: 'bold', marginBottom: 5},
  image: {height: 150, resizeMode: 'contain', marginBottom: 10},
  description: {fontSize: 14, color: '#555', marginBottom: 10},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {fontSize: 16, fontWeight: 'bold'},
});
export default styles;
