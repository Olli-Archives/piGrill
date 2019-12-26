import React, { useContext } from 'react';
import GrillSettingsForm, { GrillSettings } from '../forms/grill-settings-form/GrillParameters'
import { SettingsContext } from '../../contexts/settingsContext';
import GrillData from '../grill-data/GrillData';


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
        <GrillData />
      </div>
      < button onClick={() => setGrillParams({ ...grillParams, grillOn: !grillParams.grillOn })}>
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
