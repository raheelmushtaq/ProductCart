import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {height: 100, width: 100, resizeMode: 'contain', marginEnd: 10},
  item: {flexDirection: 'column', flex: 1},
  title: {fontSize: 16},
  details: {fontSize: 14, color: '#555'},
});
export default styles;
