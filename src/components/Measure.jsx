import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactMeasure from 'react-measure'
import debounce from 'lodash-es/debounce'

class Measure extends Component {
  state = {
    bottom: -1,
    height: -1,
    left: -1,
    right: -1,
    top: -1,
    width: -1
  }

  handleResize = debounce(({ bounds }) => {
    const { bottom, height, left, right, top, width } = bounds

    this.setState({ bottom, height, left, right, top, width })
  }, 100)

  render() {
    return (
      <ReactMeasure bounds onResize={this.handleResize}>
        {({ measureRef }) => (
          <div ref={measureRef} style={{ width: '100%', height: '100%' }}>
            {this.props.render(this.state)}
          </div>
        )}
      </ReactMeasure>
    )
  }
}

Measure.propTypes = {
  render: PropTypes.func.isRequired
}

export default Measure
