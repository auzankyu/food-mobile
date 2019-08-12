import React from 'react';
import { StyleSheet, View, TextInput} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearcBar = ({term, onTermChange, onTermSubmit}) => {
  return (
      <View style={styles.backgroundStyle}>
        <Feather
            style={styles.iconStyle}
            name="search" />
        <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    backgroundColor: '#F0EEEE',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
    marginRight: 15
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearcBar;