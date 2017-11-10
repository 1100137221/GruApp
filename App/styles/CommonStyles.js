import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export default StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})