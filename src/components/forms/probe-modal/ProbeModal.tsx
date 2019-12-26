import React, { useContext } from 'react';
import { NumberInputField } from '../../../helper-components/form-components/NumberInput';
import { TextInputField } from '../../../helper-components/form-components/TextInput';
import { SettingsContext } from '../../../contexts/settingsContext';


export default function ProbeModal() {
  const grillControls = useContext(SettingsContext);
  const { updateValue, grillParams, toggleBoolean } = grillControls;

  return (
    <main>
      <h5>Probe 1</h5>
      <TextInputField
        value={grillParams.probeOneName}
        name="probeOneName"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateValue(e)}
      />
      <NumberInputField
        max={500}
        min={120}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          updateValue(e);
        }}
        name="targetProbeOneTemp"
        value={grillParams.targetProbeOneTemp}
      />
      <button
        onClick={e => toggleBoolean(e)}
        name="probeOneOn">{grillParams.probeOneOn ? "Disable Probe" : "Enable Probe"}</button>
      <h5>Probe 2</h5>
      <TextInputField
        value={grillParams.probeTwoName}
        name="probeTwoName"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateValue(e)}
      />
      <NumberInputField
        max={500}
        min={120}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { updateValue(e) }}
        name="targetProbeTwoTemp"
        value={grillParams.targetProbeTwoTemp}
      />
      <button
        onClick={e => toggleBoolean(e)}
        name="probeTwoOn">{grillParams.probeTwoOn ? "Disable Probe" : "Enable Probe"}</button>
    </main>
  )
}