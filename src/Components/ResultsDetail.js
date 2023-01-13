import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.header}>{result.name}</Text>
            <Text style={styles.ratings}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10
    },
    image:{
        width:250,
        borderRadius:4,
        height:120,
        marginBottom:5
    },
    header:{
        fontWeight:'bold',
        fontSize:15
    },
    ratings:{
        color:'grey',
        fontStyle:'italic'
    }
})

export default ResultsDetail;