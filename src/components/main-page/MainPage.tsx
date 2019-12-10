import React, { useState, useContext } from 'react';
import GrillSettingsForm, { GrillSettings } from '../forms/grill-settings-form/GrillParameters'
import SettingsContextProvider, { SettingsContext } from '../../contexts/settingsContext';


export default function MainPage() {
  // const [grillStatus, setGrillStatus] = useState(false);
  // const [smokeMode, setSmokeMode] = useState(false);



  const submitChanges = (changes: GrillSettings) => {
    console.log('changes', changes)
  }

  const grillControls = useContext(SettingsContext)
  // console.log('grillControls', grillControls)
  console.log(grillControls.grillParams)

  return (
    <main>
      <div>
        <h1>Welcome to Pi Grill!</h1>
        <ul>
          <li>Grill Temp Grill Setpoint</li>
          <li>Probe 1 Temp: probe 1 setpoint</li>
          <li>Probe 2 Temp: probe 2 setpoint</li>
        </ul>
      </div>
      <button onClick={() => grillControls.setGrillParams({ ...grillControls.grillParams, grillOn: !grillControls.grillParams.grillOn })}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      {/* <button onClick={() => setSmokeMode(!smokeMode)}>
        {smokeMode === true ? 'Smoke Mode' : 'Grill Mode'}
      </button> */}

      <GrillSettingsForm callback={submitChanges} />
    </main>
  )

}
