import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import SearcBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import HomeFoodList from "../components/HomeFoodList";

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const priceFilter = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
      <>
        <SearcBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
        {error ? <Text>{error}</Text> : null}
        <ScrollView>
          <HomeFoodList results={priceFilter('$')} title="Cost Effective"/>
          <HomeFoodList results={priceFilter('$$')} title="Bit Pricer"/>
          <HomeFoodList results={priceFilter('$$$')} title="Big Spender!"/>
        </ScrollView>
      </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;