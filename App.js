import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PeoplePage from './src/pages/PeoplePage'

const appNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  }
},{
  defaultNavigationOptions:{
    title: 'PeopelApp',
    headerStyle: {
      backgroundColor: '#848484',
      borderBottomWidth: 1,
      borderBottomColor: "#fff"
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 40,
      flexGrow: 1,
      textAlign: 'center',
    }
  }
});

const appContainer = createAppContainer(appNavigator);


export default appContainer;

