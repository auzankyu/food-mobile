import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import FoodCardView from "./FoodCardView";
import { withNavigation } from "react-navigation";

const HomeFoodList = ({title, results, navigation}) => {
  if(!results.length) {
    return null;
  }

  return(
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
              return (
                  <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
                    <FoodCardView result={item} />
                  </TouchableOpacity>
              );
            }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5
  }
});

export default withNavigation(HomeFoodList);