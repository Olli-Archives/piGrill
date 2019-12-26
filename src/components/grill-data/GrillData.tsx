import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';

export default function GrillData() {

  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams } = grillControls
  const grillStatus = grillParams.grillOn ? 'Grill On' : 'Grill Off';
  const grillMode = grillParams.smokeOn ? 'Smoke' : 'Grill'

  return (
    <>
      <ul>
        <li> Grill Status: {grillStatus}</li>
        <li> Grill Mode: {grillMode}</li>
        <li> Target Grill Temp: {grillParams.targetGrillTemp}</li>
        <li> Grill Temp: N/A</li>
        <div className={`display_${grillParams.probeOneOn.toString()}`}>
          <li>{grillParams.probeOneName} Target Temp: {grillParams.targetProbeOneTemp}</li>
          <li>{grillParams.probeOneName} Temp : N/A</li>
        </div>
        <div className={`display_${grillParams.probeTwoOn.toString()}`}>
          <li>{grillParams.probeTwoName} Target Temp: {grillParams.targetProbeTwoTemp}</li>
          <li>{grillParams.probeTwoName} Temp: N/A</li>
        </div>
      </ul>
      < button onClick={() => setGrillParams({ ...grillParams, grillOn: !grillParams.grillOn })}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      <button onClick={() => setGrillParams({ ...grillParams, smokeOn: !grillParams.smokeOn })}>
        {grillParams.smokeOn === true ? 'Smoke Mode' : 'Grill Mode'}
      </button>
    </>
  )
} 