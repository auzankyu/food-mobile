import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantDetail: RestaurantDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);