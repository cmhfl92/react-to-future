import React, { Component } from 'react'
import Slider from './Slider.js'

class App extends Component {

  constructor () {
    super()
    this.state = {
      hue: 120,
      saturation: 100,
      lightness: 50,
      alpha: 1
    }
  }

  updateHue (hue) {
    this.setState({
      hue: hue
    })
  }

  updateSaturation (saturation) {
    this.setState({
      saturation: saturation
    })
  }

  updateLightness (lightness) {
    this.setState({
      lightness: lightness
    })
  }

  updateAlpha (alpha) {
    this.setState({
      alpha: alpha
    })
  }

  render () {
    const hsla = `hsla(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%, ${this.state.alpha})`
    return <div>
      <h1>HSLA Color Picker</h1>
      <section>
        <figure>
          <div style={{ backgroundColor: hsla }} />
        </figure>
        <p>{hsla}</p>
        <form>
          <ul>
            <li><p>Hue</p><input value={this.state.hue} name='hue' type='range' min='0' max='360' onInput={(event) => { this.updateHue(event.target.value) }} /> </li>
            <li><p>Saturation</p><input value={this.state.saturation} name='saturation' type='range' min='0' max='100' onInput={(event) => { this.updateSaturation(event.target.value) }} /> </li>
            <li><p>Lightness</p><input value={this.state.lightness} name='lightness' type='range' min='0' max='100' onInput={(event) => { this.updateLightness(event.target.value) }} /> </li>
            <li><p>Alpha</p><input value={this.state.alpha} name='alpha' type='range' min='0.00' max='1.00' step='.01' onInput={(event) => { this.updateAlpha(event.target.value) }} /> </li>
          </ul>
        </form>
      </section>
    </div>
  }
}
// JS
// let hue = 128
// let sat = 100
// let light = 50
// let alpha = 1
// // hsla(128, 100%, 50%, 1)
// const getHSL = () => {
//   return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
// }
//
// const main = () => {
//   const colorsquare = document.querySelector('.colorsquare')
//   const hueInput = document.querySelector('input[name=hue]')
//   hueInput.addEventListener('input', () => {
//     hue = hueInput.value
//     colorsquare.style.backgroundColor = getHSL()
//     document.querySelector('h3').textContent = getHSL()
//   })
//   const satInput = document.querySelector('input[name=sat]')
//   satInput.addEventListener('input', () => {
//     sat = satInput.value
//     colorsquare.style.backgroundColor = getHSL()
//     document.querySelector('h3').textContent = getHSL()
//   })
//   const lightInput = document.querySelector('input[name=light]')
//   lightInput.addEventListener('input', () => {
//     light = lightInput.value
//     colorsquare.style.backgroundColor = getHSL()
//     document.querySelector('h3').textContent = getHSL()
//   })
//   const alphaInput = document.querySelector('input[name=alpha]')
//   alphaInput.addEventListener('input', () => {
//     alpha = alphaInput.value
//     colorsquare.style.backgroundColor = getHSL()
//     document.querySelector('h3').textContent = getHSL()
//   })
//
//   document.getElementById('sat')
//   document.getElementById('light')
// }
//
// document.addEventListener('DOMContentLoaded', main)

// html
//     <section>
//     <div class="colorsquare">
//       <h1></h1>
//     </div>
//   </section>
//   </body>
// </html>

export default App
