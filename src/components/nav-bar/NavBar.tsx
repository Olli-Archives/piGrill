import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams, toggleBoolean } = grillControls


  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/probes">PROBES</Link>
      <Link to="/grill">GRILL</Link>
    </>
  )
}