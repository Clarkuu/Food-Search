import React from "react";
import {View,TouchableOpacity,Text,StyleSheet,FlatList} from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({header, results,navigation}) => {
    if(!results.length){
        return null;
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{header}</Text>
            <Text style={{marginLeft:10}}>Results : {results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Results',{
                                id:item.id
                            })}
                        >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:5
    }
});

export default withNavigation(ResultsList);