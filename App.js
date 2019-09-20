import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'
import capitalizeFisrtLetter from './src/util/capitalizeFirstLetter';

const appNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetailPage': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = navigation.state.params.people.name.first;
      return ({
        title:capitalizeFisrtLetter(peopleName),
        headerTitleStyle:{
          color: '#fff',
          fontSize: 40,
        }
      })
    }
  }
},{
  defaultNavigationOptions:{
    title: 'PeopelApp',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#848484',
      borderBottomWidth: 1,
      borderBottomColor: "black"

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

