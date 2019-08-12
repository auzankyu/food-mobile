import React from 'react';
import { StyleSheet, View, Text, Image} from "react-native";

const FoodCardView = ({result}) => {
  return(
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  img: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default FoodCardView;