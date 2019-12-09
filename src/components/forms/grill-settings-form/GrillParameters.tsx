import React, { useState } from 'react';
import { NumberInputField } from '../../../helper-components/form-components/NumberInput'

export default function GrillSettingsForm(props: Props) {
  const [grillTemp, setGrillTemp] = useState(200);
  const [probeOneTemp, setProbeOneTemp] = useState(120);
  const [probeTwoTemp, setProbeTwoTemp] = useState(120);
  const [probeOneStatus, setProbeOneStatus] = useState(false);
  const [probeTwoStatus, setProbeTwoStatus] = useState(false);

  const { callback } = props

  return (
    <>
      <div>
        <button
          name="probeOneOn"
          onClick={() => setProbeOneStatus(!probeOneStatus)}
        >Enable Probe 1</button>
        <button
          name="probeTwoOn"
          onClick={() => setProbeTwoStatus(!probeTwoStatus)}
        >Enable Probe 2</button>

        <h2>Target Grill Temperature:</h2>
        <NumberInputField
          max={400}
          min={200}
          onChange={setGrillTemp}
          name="targetGrillTemp"
          value={grillTemp}
        />

      </div>

      <div className={`display_${probeOneStatus.toString()}`}>
        <h2>Target Probe Temp:</h2>
        <NumberInputField
          max={500}
          min={120}
          onChange={setProbeOneTemp}
          name="targetProbeOneTemp"
          value={probeOneTemp}
        />
      </div>

      <div className={`display_${probeTwoStatus.toString()}`}>
        <h2>Target Probe Temp:</h2>
        <NumberInputField
          max={500}
          min={120}
          onChange={setProbeTwoTemp}
          name="targetProbeTwoTemp"
          value={probeTwoTemp}
        />
      </div>
      <div>

      </div>


      {/* SWITCH TO CONTEXT AND SEND TO APP*/}
      <button onClick={() => callback(
        {
          grillTemp,
          probeOneTemp,
          probeTwoTemp,
          probeOneStatus,
          probeTwoStatus
        }
      )}>SUBMIT UPDATES</button>
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
}