import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapGL from 'react-map-gl'
import DeckGL from 'deck.gl'

const MAX_ZOOM = 19
const MIN_ZOOM = 2

class Map extends Component {
  state = {
    longitude: this.props.longitude,
    latitude: this.props.latitude,
    zoom: this.props.zoom,
    pitch: 0,
    bearing: 0
  }

  componentDidUpdate(prevProps) {
    const { longitude, latitude, zoom } = this.props
    const longitudePropChanged = prevProps.longitude !== longitude
    const latitudePropChanged = prevProps.latitude !== latitude
    const zoomPropChanged = prevProps.zoom !== zoom

    if (longitudePropChanged) {
      this.setState({ longitude })
    }

    if (latitudePropChanged) {
      this.setState({ latitude })
    }

    if (zoomPropChanged) {
      this.setState({ zoom })
    }
  }

  handleViewportChange = ({ longitude, latitude, zoom, pitch, bearing }) => {
    this.setState({ longitude, latitude, zoom, pitch, bearing })
  }

  handleZoomInClick = () => {
    this.setState({ zoom: Math.min(this.state.zoom + 1, this.props.maxZoom) })
  }

  handleZoomOutClick = () => {
    this.setState({ zoom: Math.max(this.state.zoom - 1, this.props.minZoom) })
  }

  render() {
    const { longitude, latitude, zoom, pitch, bearing } = this.state
    const { minZoom, maxZoom, width, height, children, layers } = this.props
    const viewport = { width, height, longitude, latitude, zoom, pitch, bearing }

    return (
      <MapGL
        {...viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoibGlwaXN3aXJlIiwiYSI6ImNqa2JmYzQxazB3dngza3BkajVlY2FnMzkifQ.tHrRXd2rw3zorHY3YqUhBA'}
        minZoom={minZoom}
        maxZoom={maxZoom}
        onViewportChange={this.handleViewportChange}>
        <DeckGL {...viewport} layers={layers} />
        {children}
      </MapGL>
    )
  }

}

Map.propTypes = {
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minLongitude: PropTypes.number,
  maxLongitude: PropTypes.number,
  minLatitude: PropTypes.number,
  maxLatitude: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  zoom: PropTypes.number,
  layers: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

Map.defaultProps = {
  minZoom: MIN_ZOOM,
  maxZoom: MAX_ZOOM,
  minLongitude: -180,
  maxLongitude: 180,
  minLatitude: -90,
  maxLatitude: 90,
  maxBounds: [[], []],
  longitude: -94.1629,
  latitude: 34.5133,
  zoom: 3,
  layers: [],
}

export default Map