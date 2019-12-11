import React, { useState, useContext } from 'react';
import GrillSettingsForm, { GrillSettings } from '../forms/grill-settings-form/GrillParameters'
import { SettingsContext } from '../../contexts/settingsContext';


export default function MainPage() {
  const submitChanges = () => {
    console.log('changes')
  }

  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams } = grillControls
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
      <button onClick={() => setGrillParams({ ...grillParams, grillOn: !grillParams.grillOn })}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      <button onClick={() => setGrillParams({ ...grillParams, smokeOn: !grillParams.smokeOn })}>
        {grillParams.smokeOn === true ? 'Smoke Mode' : 'Grill Mode'}
      </button>
      <GrillSettingsForm />
      <button onClick={submitChanges}>Submit</button>
    </main>
  )

}
