import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
function UserInput(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        placeholder="Enter your city name"
        style={styles.input}
        value={props.city}
        onChangeText={e => props.setCity(e)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => props.fetchFunc()}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    padding: 10,
    fontSize: 17,
    fontWeight: '600',
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: '#4287f5',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default UserInput;
