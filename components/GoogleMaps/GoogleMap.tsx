import { Component, createRef } from "react"
import { GoogleMapAPIKey } from "../../env";
import { googleMapsDataType } from "../../types/base.types";
import styles from './GoogleMap.module.scss';

type MyProps = {
  // using `interface` is also ok
  googleMapsData?: googleMapsDataType[],
  centerCountryData: googleMapsDataType
};
  type MyState = {
    count: number; // like this
  };
class GoogleMap extends Component<MyProps> {
    googleMapRef = createRef();
    googleMap: any;
    borderCountriesData = this.props.googleMapsData;
    currentCountryData = this.props.centerCountryData;
    componentDidMount() {
        const googleMapScript = document.createElement('script')
        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key='+GoogleMapAPIKey;
        window.document.body.appendChild(googleMapScript)
    
        googleMapScript.addEventListener('load', ()=>{
            this.googleMap = this.createGoogleMap()
            this.InitMap()
        })
    }

    InitMap = () => {
      this.borderCountriesData!.map((mapData : googleMapsDataType, index) => {
        let newMarker = new window.google.maps.Marker({
            position: { lat: mapData.latlng[0], lng: mapData.latlng[1] },
            map: this.googleMap,
          });
        let InfoWindow = new window.google.maps.InfoWindow({
            content: `<a key=${index} href="/countries/${mapData.cca2.toLowerCase()}">
            <div className=${styles.InfoWindowContainer}>
                <img className=${styles.CountryFlag} src="${mapData.flagUri}" alt="${mapData.name}">
                <h2 className="countryName">${mapData.name}</h2>
          </div></a>`
        });
        newMarker.addListener("click", () => {
            let selectedInfoWindow = InfoWindow;
            selectedInfoWindow.open(this.googleMap, newMarker);
          });
      })
    }
    createGoogleMap = () => {
      return(
            // @ts-ignore: Unreachable code error
        new window.google.maps.Map(this.googleMapRef.current, {
          zoom: 3,
          // minZoom: 1,
          center: {
            lat: this.currentCountryData.latlng[0]!,
            lng: this.currentCountryData.latlng[1]!,
          }
        })
      )
    }

    render() {
      return (
        <div className={`${styles.GoogleMapContainer} ${styles.AnimateEntry}`}>
          <div
            id="google-map"
            ref={this.googleMapRef as React.RefObject<HTMLDivElement>}
            className={`${styles.GoogleMap} ${styles.AnimateEntry}`}
          />
        </div>
      )
    }
  }
  
  export default GoogleMap
  