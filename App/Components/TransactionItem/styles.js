import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Metrics.bottomMargin
  },
  image: {
    width: 66,
    height: 58
  },
  mainView: {
    flex: 1,
    marginLeft: 20
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  text: {
    fontWeight: 'bold'
  }
})
