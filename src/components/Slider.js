import React, { Component } from 'react'

class Slider extends Component {

  // static propTypes = {
  //   name: React.PropTypes.string.isRequired,
  //   value: React.PropTypes.value.isRequired,
  //   min: React.PropTypes.value.isRequired,
  //   max: React.PropTypes.value.isRequired,
  //   handleChange: React.PropTypes.event.isRequired
  // }
  // handleChange (click) {
  //   this.setState({
  //     handleChange: click
  //   })
  // }

  render () {
    return <input
      className={styles.root}
      name={this.props.name}
      type='range'
      value={this.props.value}
      min={this.props.min}
      max={this.props.max}
      onChange={(event) => this.props.handleChange(event.target.value)}
    />
  }
}

export default Slider
