import {createAppContainer, } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({
    Search: SearchScreen,
    Results:ResultsShowScreen
},{
    initialRouteName:'Search',
    defaultNavigationOptions:{
      title:'Business Search'
    }
});

export default createAppContainer(navigator);


//Client ID
//o4aOQeeUpcnjNjuOp4Ahrw

//API Key
//2qpUBuJ_KzLCtSu3BB3-NajNQtQBZYKcg-zOBTQmjJy-VcdN4FTvJs2bHRHoQ93m0CEDSv4OM1P-kv5uCY5Dzak8UFGV2JXfZR6wupIMOqgqrGxli_mT0EuuTPS5Y3Yx
