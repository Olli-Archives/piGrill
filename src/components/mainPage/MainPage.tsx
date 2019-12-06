import React from 'react';

export default class MainPage extends React.Component {

  state: state = {
    targetGrillTemp: 0,
    targetProbeOneTemp: 0,
    targetProbeTwoTemp: 0,
    grillOn: false,
    probeOneOn: false,
    probeTwoOn: false
  }

  updateState = (e: any) => {
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
          <input
            name="targetGrillTemp"
            value={this.state.targetGrillTemp}
            onChange={this.updateState}
            placeholder="Temp" />
        </div>

        <div className={`display_${this.state.probeOneOn.toString()}`}>
          <p>Target Probe Temp:</p>
          <input
            value={this.state.targetProbeOneTemp}
            onChange={this.updateState}
            name="targetProbeOneTemp"
            placeholder="Temp" />
        </div>

        <div className={`display_${this.state.probeTwoOn.toString()}`}>
          <p>Target Probe Temp:</p>
          <input
            value={this.state.targetProbeTwoTemp}
            onChange={this.updateState}
            name="targetProbeTwoTemp"
            placeholder="Temp" />
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