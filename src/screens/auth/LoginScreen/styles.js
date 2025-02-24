import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2B2B'
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold'
  },
  linkText: {
    color: '#FF0000',
    marginTop: 20,
    fontSize: 14,
  },
  linkHighlight: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  switchLabel: {
    color: 'white',
    marginRight: 10,
    fontSize: 16,
  },
  pickerContainer: {
    width: '80%',
    backgroundColor: '#404040',
    borderRadius: 8,
    marginBottom: 20,
  },
  picker: {
    color: 'white',
    height: 50,
  },
  loginButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
}); 