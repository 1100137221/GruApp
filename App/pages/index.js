import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';
import Weather from './weather';
import Rate from './rate';

export function registerScreens() {
  Navigation.registerComponent('weather', () => Weather);
  Navigation.registerComponent('rate', () => Rate);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
