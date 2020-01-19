import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import { AxiosService } from '../../service/axios';

export default function GrillData() {

  const axiosService = new AxiosService('http://192.168.1.16:3001/')
  const grillControls = useContext(SettingsContext)
  const { grillParams, toggleBoolean, updateContext } = grillControls
  const grillStatus = grillParams.grillStatus
  const grillMode = grillParams.smokeOn ? 'Smoke' : 'Grill'

  const updateButtons = () => {
    axiosService.get({
      endPoint: 'status'
    })
      .then(res => {
        updateContext(res.data);
      })
  }

  useEffect(updateButtons, [])

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
      < button
        // disabled={grillParams.loading}
        name="grillOn"
        disabled={grillParams.loading}
        onClick={() => {
          axiosService.post({
            endPoint: 'send',
            body: {
              targetState: 'START'
            }
          })
        }}>
        Start Grill
      </button>
      <button
        onClick={
          () => {
            axiosService.post({
              endPoint: 'send',
              body: {
                targetState: 'SELECT_MODE',
                context: {
                  contextField: 'targetMode',
                  contextFieldContent: 'smoke'
                }
              }
            })
          }
        }>
        SMOKE MODE
      </button>
      <button
        onClick={
          () => {
            axiosService.post({
              endPoint: 'send',
              body: {
                targetState: 'SELECT_MODE',
                context: {
                  contextField: 'targetMode',
                  contextFieldContent: 'grill'
                }
              }
            })
          }
        }>
        GRILL MODE
      </button>
    </>
  )
} 