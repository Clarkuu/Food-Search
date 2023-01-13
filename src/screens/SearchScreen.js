import React,{useState, useEffect} from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import  SearchBar  from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
    
    //Call searchApi
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };
    

    return (
        <ScrollView>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}/>
            <View>
                {errorMessage ?<Text>{errorMessage}</Text> :null}
                <Text style={styles.resultStyle}>We have found {results.length} results</Text>
                <ResultsList results={filterResultsByPrice('$')} 
                              header="Good value" 
                              
                />
                <ResultsList results={filterResultsByPrice('$$')} 
                             
                             header="A bit pricier"
                />
                <ResultsList results={filterResultsByPrice('$$$')} 
                             header="Expensive"
                             
                />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    resultStyle:{
        marginLeft:10
    }
});

export default SearchScreen;