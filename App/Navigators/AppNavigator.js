import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from 'App/Containers/Home/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Transactions'
      }
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'screen',
  }
)

export default createAppContainer(StackNavigator)
