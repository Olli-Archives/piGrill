import React, { createContext, Component } from 'react'
import { GrillSettings } from '../components/forms/grill-settings-form/GrillParameters'

export const SettingsContext = createContext({})


// <{props}, {state}>
class SettingsContextProvider extends Component<{}, GrillSettings>{
  state = {
    targetGrillTemp: 120,
    targetProbeOneTemp: 100,
    targetProbeTwoTemp: 100,
    grillOn: false,
    probeOneOn: false,
    probeTwoOn: false,
  }

  render() {
    return (
      <SettingsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsContextProvider
