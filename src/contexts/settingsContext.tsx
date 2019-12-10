import React, { createContext, useState } from 'react'
import GrillSettingsForm, { GrillSettings } from '../components/forms/grill-settings-form/GrillParameters'

export const SettingsContext = createContext({} as {
  grillParams: GrillSettings,
  setGrillParams: Function
})

const defaults: GrillSettings = {
  targetGrillTemp: 120,
  targetProbeOneTemp: 100,
  targetProbeTwoTemp: 100,
  grillOn: false,
  probeOneOn: false,
  probeTwoOn: false,
}


export function SettingsContextProvider(props: any) {
  const [grillParams, setGrillParams] = useState(defaults)

  return (
    <SettingsContext.Provider value={{ grillParams, setGrillParams }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

// <{props}, {state}>




// class SettingsContextProvider extends Component<{}, GrillSettings>{


//   render() {
//     return (
//       <SettingsContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </SettingsContext.Provider>
//     )
//   }
// }

export default SettingsContextProvider
