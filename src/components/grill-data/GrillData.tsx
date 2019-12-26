import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';

export default function GrillData() {

  const grillControls = useContext(SettingsContext)
  const { grillParams } = grillControls

  const grillStatus = grillParams.grillOn ? 'Grill On' : 'Grill Off';
  const grillMode = grillParams.smokeOn ? 'Smoke' : 'Grill'


  return (
    <ul>
      <li> {grillStatus} / {grillMode} </li>
      <li> Grill Temperature: / Target {grillParams.targetGrillTemp}</li>
      <div className={`display_${grillParams.probeOneOn.toString()}`}>
        <li>{grillParams.probeOneName} Target Temp: {grillParams.targetProbeOneTemp}</li>
      </div>
      <div className={`display_${grillParams.probeTwoOn.toString()}`}>
        <li>{grillParams.probeTwoName} Target Temp: {grillParams.targetProbeTwoTemp}</li>
      </div>
    </ul>
  )
} 