import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},
  title: {fontSize: 16},
  details: {fontSize: 14, color: '#555'},
  footer: {padding: 10, marginTop: 10, borderTopWidth: 1, borderColor: '#ccc'},
});

export default styles;
