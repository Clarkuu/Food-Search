import React,{useState, useEffect} from "react";
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result,setResult] = useState(null);

    const getResult = async () => {
        const response = await yelp.get( `/${id} `);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text style={styles.headerStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{uri:item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        margin:10
    },
    headerStyle:{
        fontSize:18,
        marginLeft:10
    }
})

export default ResultsShowScreen;
