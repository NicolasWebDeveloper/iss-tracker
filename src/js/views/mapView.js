import View from './View';
import icon from 'url:../../img/marker.png';

class mapView extends View {
  constructor() {
    super();
  }

  renderMap(state) {
    const map = L.map('map').setView([state.coords.lat, state.coords.lng], 5);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    }).addTo(map);
    const issIcon = L.icon({
      iconUrl: icon,

      iconSize: [50, 50],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    });
    this._marker = L.marker([50.5, 30.5], { icon: issIcon }).addTo(map);
  }

  updateMap(state) {
    console.log(new Date());
    this._marker.setLatLng([state.coords.lat, state.coords.lng]);
  }
}

export default new mapView();
