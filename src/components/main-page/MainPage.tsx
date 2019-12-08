import React from 'react';
import { NumberInputField } from '../../helper-components/form-components/NumberInput'


export default class MainPage extends React.Component {

  state: state = {
    targetGrillTemp: 200,
    targetProbeOneTemp: 120,
    targetProbeTwoTemp: 120,
    grillOn: false,
    probeOneOn: false,
    probeTwoOn: false
  }

  updateState = (e: any) => {
    console.log('e', e)
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  toggleProbeState = (e: any) => {
    const key: keyof state = e.target.name
    this.setState((previousState: state) => (
      { [key]: !previousState[key] }
    ))
  }

  render() {

    return (
      <main>
        <h1>Welcome to Pi Grill!</h1>
        <button
          name="probeOneOn"
          onClick={this.toggleProbeState}
        >Enable Probe 1</button>
        <button
          name="probeTwoOn"
          onClick={this.toggleProbeState}
        >Enable Probe 2</button>

        <div>
          <p>Target Grill Temp:</p>

          <NumberInputField
            max={400}
            min={200}
            onChange={this.updateState}
            name="targetGrillTemp"
            value={this.state.targetGrillTemp}
          />

        </div>

        <div className={`display_${this.state.probeOneOn.toString()}`}>
          <p>Target Probe Temp:</p>
          <NumberInputField
            max={500}
            min={120}
            onChange={this.updateState}
            name="targetProbeOneTemp"
            value={this.state.targetProbeOneTemp}
          />
        </div>

        <div className={`display_${this.state.probeTwoOn.toString()}`}>
          <p>Target Probe Temp:</p>
          <NumberInputField
            max={500}
            min={120}
            onChange={this.updateState}
            name="targetProbeTwoTemp"
            value={this.state.targetProbeTwoTemp}
          />
        </div>

        <div>
          <button>START GRILL</button>
          <button>STOP GRILL</button>
        </div>
      </main>
    )
  }
}

interface state {
  targetGrillTemp: number,
  targetProbeOneTemp: number,
  targetProbeTwoTemp: number,
  grillOn: boolean,
  probeOneOn: boolean,
  probeTwoOn: boolean,
}