import React, { useContext } from 'react';
import GrillSettingsForm from '../forms/grill-settings-form/GrillParameters'
import { SettingsContext } from '../../contexts/settingsContext';
import GrillData from '../grill-data/GrillData';
import NavBar from '../nav-bar/NavBar'
import ProbeModal from '../forms/probe-modal/ProbeModal';
import GrillTempModal from '../forms/grill-temp-modal/GrillTempModal';


export default function MainPage() {
  const submitChanges = () => {
    console.log('changes')
  }
  const grillControls = useContext(SettingsContext)
  console.log(grillControls.grillParams)

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to Pi Grill!</h1>
        {grillControls.grillParams.displayProbeModal ? <ProbeModal /> : null}
        {grillControls.grillParams.displayGrillTempModal ? <GrillTempModal /> : null}
        <GrillData />
        <button onClick={submitChanges}>Submit</button>
      </main>
    </>
  )
}
