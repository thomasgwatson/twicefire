import * as React from 'react'
import Measure from '../components/Measure'
import Map from '../components/Map'
import Layout from '../layouts'

import * as data from '../data/9h3-over-five.json'

class StreetArtMap extends React.Component {

  render() {
    return (
      <div style={{width: '100%', height: '100vh', display: 'relative'}}>
          <Measure
            render={({ width, height }) => (
              <Map width={width} height={height} />
            )}
          />
      </div>
    )
  }
}

export default StreetArtMap