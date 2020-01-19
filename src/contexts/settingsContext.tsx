import React, { createContext, useState } from 'react'
import { GrillSettings } from '../types/types';
import { State } from 'xstate';

export const SettingsContext = createContext({} as Context)
const defaults: GrillSettings = {
  targetGrillTemp: 120,
  targetProbeOneTemp: 100,
  probeOneName: 'Probe One',
  targetProbeTwoTemp: 100,
  probeTwoName: 'Probe Two',
  grillStatus: 'idle',
  probeOneOn: false,
  probeTwoOn: false,
  smokeOn: false,
  loading: false,
}

export function SettingsContextProvider(props: any) {
  const [grillParams, setGrillParams] = useState(defaults)

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('name', e.target, 'value', e.target)
    setGrillParams({ ...grillParams, [e.target.name]: e.target.value })
  }

  const toggleBoolean = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e', e.target.name, 'from cont', grillParams[e.target.name as keyof GrillSettings])

    setGrillParams({ ...grillParams, [e.target.name]: !grillParams[e.target.name as keyof GrillSettings] })
  }

  const updateContext = (state: State<Context>) => {
    setGrillParams({ ...grillParams, smokeOn: state.value === "smoke", grillStatus: state.value.toString() })
    console.log('updatedContext', grillParams);
  }

  const loading = () => {
    console.log('setting loading state', grillParams.loading)
    setGrillParams({ ...grillParams, loading: true })
    console.log(grillParams.loading)
  }

  const finishedLoading = () => { setGrillParams({ ...grillParams, loading: false }) }

  return (
    <SettingsContext.Provider value={{
      grillParams,
      setGrillParams,
      updateValue,
      toggleBoolean,
      loading,
      finishedLoading,
      updateContext
    }}>
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
  loading: Function,
  finishedLoading: Function,
  updateContext: Function
}

interface StateMachineContext {
  mode: string,
  status: string
}
