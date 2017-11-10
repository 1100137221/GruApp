import mobx, {action, observable, computed, toJS} from 'mobx';
import FetchHelper from '../utils/FetchUtil';

mobx.useStrict(true);

class ObservableWeatherStore {

  @observable isLoading = false ;
  @observable weatherWeekData = [];
  @observable weatherTodayData = [];

  @action setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  @action setWeatherList(data) {
    this.weatherWeekData = data;
  }

  @action setWeatherTodayData(data){
    this.weatherTodayData = data; 
  }

  fetchWeather() {
    this.setLoading(true);
    FetchHelper.Get(`weather/`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setWeatherList(responseJson);
        this.todayWeather();
        this.setLoading(false);
      })
      .catch((error) => {
        this.setLoading(false);
        console.error(error);
      });
  }

  todayWeather() {
      let allData = [];
      let areaData = [];
      let tempData = [];
      for(let i = 0; i < this.weatherWeekData.length ; i+=7) {
        tempData = this.weatherWeekData[i];
        if(tempData.type==1) {
            areaData = [];
            let obj = {};
            obj.countryName = tempData.countryName;
            obj.img = tempData.img;
            obj.info = tempData.info;
            obj.temperature = tempData.temperature;
            obj.type = "白天";
            areaData.push(obj);
        } else {
            let obj = {};
            obj.countryName = tempData.countryName;
            obj.img = tempData.img;
            obj.info = tempData.info;
            obj.temperature = tempData.temperature;
            obj.type = "晚上";
            areaData.push(obj);
            allData.push(areaData);
        }
      }
      this.setWeatherTodayData(allData);
  }
  
}
const observableWeatherStore = new ObservableWeatherStore();
export default observableWeatherStore;