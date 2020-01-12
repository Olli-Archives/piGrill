import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import axios, { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
import { AxiosService } from '../../service/axios';



export default function GrillData() {

  const axiosService = new AxiosService('http://192.168.1.16:3001/')

  const grillControls = useContext(SettingsContext)
  const { grillParams, setGrillParams } = grillControls
  const grillStatus = grillParams.grillOn ? 'Grill On' : 'Grill Off';
  const grillMode = grillParams.smokeOn ? 'Smoke' : 'Grill'

  const api = async () => {
    const response = await axios.post<AxiosPromise>('127.0.0.1/grill')
    console.log(response)
  }

  return (
    <>
      <ul>
        <li> Grill Status: {grillStatus}</li>
        <li> Grill Mode: {grillMode}</li>
        <li> Target Grill Temp: {grillParams.targetGrillTemp}</li>
        <li> Grill Temp: N/A</li>
        <div className={`display_${grillParams.probeOneOn.toString()}`}>
          <li>{grillParams.probeOneName} Target Temp: {grillParams.targetProbeOneTemp}</li>
          <li>{grillParams.probeOneName} Temp : N/A</li>
        </div>
        <div className={`display_${grillParams.probeTwoOn.toString()}`}>
          <li>{grillParams.probeTwoName} Target Temp: {grillParams.targetProbeTwoTemp}</li>
          <li>{grillParams.probeTwoName} Temp: N/A</li>
        </div>
      </ul>
      < button onClick={() => {
        setGrillParams({ ...grillParams, grillOn: !grillParams.grillOn })
        axiosService.post({
          endPoint: 'grill-state',
          body: {
            state: `${grillParams.grillOn ? 'off' : 'on'}`
          }
        })
      }}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      <button onClick={
        () => setGrillParams({ ...grillParams, smokeOn: !grillParams.smokeOn })
      }>
        {grillParams.smokeOn === true ? 'Smoke Mode' : 'Grill Mode'}
      </button>
      <button onClick={() => { api() }}>SUBMIT CHANGES</button>
    </>
  )
} 