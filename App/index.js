import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './pages';
import Icon from 'react-native-vector-icons/Ionicons';

// screen related book keeping
registerScreens();
registerScreenVisibilityListener();


var weatherIcon;
var currencyIcon;

export default class App {
  constructor() {
    this._populateIcons().then(() => {
      // Start app only if all icons are loaded
      this.startApp();
    }).catch((error) => {
      console.error(error);
    });
  }

  _populateIcons = function () {
    return new Promise(function (resolve, reject) {
      Promise.all(
        [
          Icon.getImageSource('ios-partly-sunny', 30),
          Icon.getImageSource('ios-calculator-outline', 30)
        ]
      ).then((values) => {
        weatherIcon = values[0];
        currencyIcon = values[1];
        resolve(true);
      }).catch((error) => {
        console.log(error);
        reject(error);
      }).done();
    });
  };

  startApp() {
    // this will start our app
    const tabs = [{
      label: 'Weather',
      screen: 'weather',
      icon:weatherIcon,
      selectedIcon:weatherIcon,
      title: 'Weather',
    }, {
      label: 'Rate',
      screen: 'rate',
      icon:currencyIcon,
      selectedIcon:currencyIcon,
      title: 'Rate',
    }];


    // this will start our app
    Navigation.startTabBasedApp({
      tabs,
      animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
      tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        tabBarButtonColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        tabFontFamily: 'BioRhyme-Bold',
      },
      appStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
      },
      /*drawer: {
        left: {
          screen: 'example.Types.Drawer'
        }
      }*/
    });
  }
}