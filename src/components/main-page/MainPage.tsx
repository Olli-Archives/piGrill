import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import GrillData from '../grill-data/GrillData';
import NavBar from '../nav-bar/NavBar'
import ProbeModal from '../forms/probe-modal/ProbeModal';
import GrillTempModal from '../forms/grill-temp-modal/GrillTempModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function MainPage() {

  const grillControls = useContext(SettingsContext)
  console.log(grillControls.grillParams)

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/probes">
            <ProbeModal />
          </Route>
          <Route path="/grill">
            <GrillTempModal />
          </Route>
          <Route path="">
            <GrillData />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
