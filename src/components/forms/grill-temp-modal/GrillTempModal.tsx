import React, { useContext } from 'react';
import { NumberInputField } from '../../../helper-components/form-components/NumberInput'
import { SettingsContext } from '../../../contexts/settingsContext';

export default function GrillTempModal() {
  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams, updateValue, toggleBoolean } = grillControls

  return (
    <>
      <div>
        <h2>Target Grill Temperature:</h2>
        <NumberInputField
          max={400}
          min={200}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { updateValue(e) }}
          name="targetGrillTemp"
          value={grillParams.targetGrillTemp}
        />
      </div>
    </>
  );
}
