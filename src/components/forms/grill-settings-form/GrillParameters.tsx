import React, { useContext } from 'react';
import { NumberInputField } from '../../../helper-components/form-components/NumberInput'
import { SettingsContext } from '../../../contexts/settingsContext';

export default function GrillSettingsForm(props: Props) {
  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams } = grillControls

  return (
    <>
      <div>
        <button
          name="probeOneOn"
          onClick={() => setGrillParams({ ...grillParams, probeOneOn: grillParams.probeOneOn })}
        >Enable Probe 1</button>
        <button
          name="probeTwoOn"
          onClick={() => setGrillParams({ ...grillParams, probeOneOn: grillParams.probeOneOn })}
        >Enable Probe 2</button>

        <h2>Target Grill Temperature:</h2>
        <NumberInputField
          max={400}
          min={200}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGrillParams({ ...grillParams, targetGrillTemp: e.target.value }) }}
          name="targetGrillTemp"
          value={grillParams.targetGrillTemp}
        />

      </div>

      <div className={`display_${grillParams.probeOneOn.toString()}`}>
        <h2>Target Probe Temp:</h2>
        <NumberInputField
          max={500}
          min={120}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGrillParams({ ...grillParams, probeOneTargetTemp: e.target.value }) }}
          name="targetProbeOneTemp"
          value={grillParams.targetProbeOneTemp}
        />
      </div>

      <div className={`display_${grillParams.probeTwoOn.toString()}`}>
        <h2>Target Probe Temp:</h2>
        <NumberInputField
          max={500}
          min={120}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setGrillParams({ ...grillParams, probeTwoTargetTemp: e.target.value }) }}
          name="targetProbeTwoTemp"
          value={grillParams.targetProbeTwoTemp}
        />
      </div>
      <div>

      </div>


      {/* SWITCH TO CONTEXT AND SEND TO APP*/}
      {/* <button onClick={() => callback(
        {
          grillTemp,
          probeOneTemp,
          probeTwoTemp,
          probeOneStatus,
          probeTwoStatus
        }
      )}>SUBMIT UPDATES</button> */}
    </>

  );
}

interface Props {
  callback: Function
}

export interface GrillSettings {
  targetGrillTemp: number,
  targetProbeOneTemp: number,
  targetProbeTwoTemp: number,
  grillOn: boolean,
  probeOneOn: boolean,
  probeTwoOn: boolean,
  smokeOn: boolean,
}