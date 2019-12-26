import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';

export default function NavBar() {

  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams, toggleBoolean } = grillControls


  return (
    <>
      <button
        name="displayProbeModal"
        onClick={e => toggleBoolean(e)}
      > SET MEAT PROBES</button>
      < button onClick={() => setGrillParams({ ...grillParams, grillOn: !grillParams.grillOn })}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      <button onClick={() => setGrillParams({ ...grillParams, smokeOn: !grillParams.smokeOn })}>
        {grillParams.smokeOn === true ? 'Smoke Mode' : 'Grill Mode'}
      </button>

    </>
  )
}