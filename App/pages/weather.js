
import React from 'react';
import mobx from 'mobx';
import {observer} from 'mobx-react/native';
import {StyleSheet, View, Text, Button, ListView, Image} from 'react-native';
import ObservableWeatherStore from '../stores/WeatherStore';
import ContentPage from '../components/ContentPage';
import CommonStyles from '../styles/CommonStyles';
import CommonColors from '../styles/CommonColors';

@observer
class Weather extends React.Component {

    constructor(props) {
        super(props);
        ObservableWeatherStore.fetchWeather();
    }

    _getImage(path) {
        console.log(path);
        switch (path) {
            case "01.gif":
                return require('../images/01.gif')
                break;
            case "02.gif":
                return require('../images/02.gif')
                break;
            case "03.gif":
                return require('../images/03.gif')
                break;
            case "04.gif":
                return require('../images/04.gif')
                break;
            case "05.gif":
                return require('../images/05.gif')
                break;
            case "06.gif":
                return require('../images/06.gif')
                break;
            case "07.gif":
                return require('../images/07.gif')
                break;
            case "08.gif":
                return require('../images/08.gif')
                break;
            case "09.gif":
                return require('../images/09.gif')
                break;
            case "10.gif":
                return require('../images/10.gif')
                break;
            case "11.gif":
                return require('../images/11.gif')
                break;
            case "12.gif":
                return require('../images/12.gif')
                break;
            default:
                break;
        }
    }

    _getRow(data) {
        
        let img = `${data[0].img.substring(data[0].img.indexOf('day')+4, data[0].img.length)}`;

        return (
            <View style={{height: 70, justifyContent: 'center'}}>
                <View style={[CommonStyles.rowSpaceBetween, {height: 70}]}>
                    <View style={[CommonStyles.rowSpaceBetween]}>
                        <View>
                            <Image source={this._getImage(img)} />                        
                        </View>
                        <View>
                            <Text>{data[0].countryName}</Text>
                        </View>
                        <View style={{marginLeft:5}}>
                            <Text>{data[0].temperature}</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: CommonColors.SeparatorGrey, height: 0.5}}>
                </View>
            </View>
        );
      }

    _weatherListView() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = ds.cloneWithRows(mobx.toJS(ObservableWeatherStore.weatherTodayData));
        
        return (<ListView
            dataSource={dataSource}
            renderRow={(rowData) => {
              return this._getRow(rowData);
            }}
          />);
    }

    render() {

        
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ContentPage>
                    {
                        ObservableWeatherStore.isLoading ? null : this._weatherListView()
                    }
                </ContentPage>
            </View>
        );
    }
}


export default Weather;