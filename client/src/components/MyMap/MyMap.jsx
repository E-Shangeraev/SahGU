// import React from 'react'
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import PropTypes from 'prop-types'
// import marker from '@assets/icons/map-marker.svg'

// const MyMap = ({ latitude, longitude, zoom }) => (
//   <YMaps
//     query={{
//       apikey: '8596f46f-4416-4fbb-87ee-ef65ee25576e',
//     }}>
//     <Map
//       defaultState={{ center: [latitude, longitude], zoom }}
//       style={{ width: '100%', height: '100%' }}>
//       <Placemark
//         geometry={[latitude, longitude]}
//         properties={{}}
//         options={{
//           iconLayout: 'default#image',
//           iconImageHref: marker,
//           iconImageSize: [78, 77],
//           iconImageOffset: [-50, -60],
//         }}
//       />
//     </Map>
//   </YMaps>
// )

// MyMap.propTypes = {
//   latitude: PropTypes.number.isRequired,
//   longitude: PropTypes.number.isRequired,
//   zoom: PropTypes.number.isRequired,
// }

// export default MyMap
