import React, { useState } from 'react';
import { StyleSheet, View, Text} from "react-native";
import SearcBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  return (
      <View>
        <SearcBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
        {error ? <Text>{error}</Text> : null}
        <Text>We have found {results.length} results!</Text>
      </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;