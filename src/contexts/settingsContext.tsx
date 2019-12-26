import React, { createContext, useState } from 'react'
import GrillSettingsForm from '../components/forms/grill-settings-form/GrillParameters'
import { types } from '@babel/core'
import { GrillSettings } from '../types/types';

export const SettingsContext = createContext({} as Context)

const defaults: GrillSettings = {
  targetGrillTemp: 120,
  targetProbeOneTemp: 100,
  probeOneName: 'Probe One',
  targetProbeTwoTemp: 100,
  probeTwoName: 'Probe Two',
  grillOn: false,
  probeOneOn: false,
  probeTwoOn: false,
  smokeOn: false,
}


export function SettingsContextProvider(props: any) {
  const [grillParams, setGrillParams] = useState(defaults)

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('name', e.target, 'value', e.target)
    setGrillParams({ ...grillParams, [e.target.name]: e.target.value })
  }

  const toggleBoolean = (e: React.ChangeEvent<HTMLInputElement>) => {

    setGrillParams({ ...grillParams, [e.target.name]: !grillParams[e.target.name as keyof GrillSettings] })
  }

  return (
    <SettingsContext.Provider value={{ grillParams, setGrillParams, updateValue, toggleBoolean }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider

interface Context {
  grillParams: GrillSettings,
  setGrillParams: Function,
  updateValue: Function,
  toggleBoolean: Function,
}
