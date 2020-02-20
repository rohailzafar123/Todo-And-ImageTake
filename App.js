import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from "./login"
import Todo from "./screens/SettingScreen";
import Home from './screens/HomeScreen'
import AddPost from './screens/icon'
import Tiger from './screens/tiger'
import Panda from './screens/panda'
import Camel from './screens/camel'
import Wolf from './screens/wolf'
const AppNavigator = createStackNavigator(


  {

      Login,
      Home,
      AddPost,
      Tiger,
      Panda,
      Camel,
      Wolf,
      Todo,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },



);


export default createAppContainer(AppNavigator)