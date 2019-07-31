import * as React from 'react'
import Measure from '../components/Measure'
import Map from '../components/Map'
import Layout from '../layouts'
import geojson2h3 from 'geojson2h3'

import {GeoJsonLayer} from 'deck.gl'

import * as data from '../data/9h3-over-five.json'

const geojson = geojson2h3.h3SetToFeatureCollection(
  Object.keys(data),
  hex => ({value: data[hex], color: '#df00df'})
)

console.log(geojson)

const layer = new GeoJsonLayer({
  id: 'a',
  data: geojson,
  filled: true,
  stroked: true,
  lineWidthScale: 20,
  getFillColor: [160, 160, 180, 200],
  getLineColor: d => d.properties.color,
  getRadius: 100,
  getLineWidth: 1,
})

class StreetArtMap extends React.Component {

  render() {
    return (
      <div style={{width: '100%', height: '100vh', display: 'relative'}}>
        <Measure
          render={({ width, height }) => (
            <Map width={width} height={height} layers={[layer]} />
          )}
        />
      </div>
    )
  }
}

export default StreetArtMap