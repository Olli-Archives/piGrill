import React, { useContext, useEffect } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import { AxiosService } from '../../service/axios';

export default function GrillData() {

  const axiosService = new AxiosService('http://192.168.1.16:3001/')
  const grillControls = useContext(SettingsContext)
  const { grillParams, toggleBoolean, updateContext } = grillControls
  const grillStatus = grillParams.grillOn ? 'Grill On' : 'Grill Off';
  const grillMode = grillParams.smokeOn ? 'Smoke' : 'Grill'

  const test = () => {
    axiosService.get({
      endPoint: 'status'
    })
      .then(res => {
        updateContext(res.data);
      })
  }

  useEffect(test, [])

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
        onClick={(e) => {

          e.persist()
          axiosService.post({
            endPoint: 'grill-state',
            body: {
              state: `${grillParams.grillOn ? 'off' : 'on'}`
            }
          })
            .then(res => {
              if (res) {
                toggleBoolean(e)
              }
            })

        }}>
        {grillControls.grillParams.grillOn === true ? 'Grill Off' : 'Grill On'}
      </button>
      <button
        name="smokeOn"
        disabled={grillParams.loading}
        onClick={
          (e) => {
            e.persist()
            axiosService.post({
              endPoint: 'grill-mode',
              body: {
                smoke: `${grillParams.smokeOn ? 'off' : 'on'}`
              }
            })
              .then(res => {
                console.log('smoke res', res, 'e', e)
                if (res) {
                  toggleBoolean(e)

                }
              })

          }
        }>
        {grillParams.smokeOn === true ? 'Smoke Mode' : 'Grill Mode'}
      </button>
      <button >SUBMIT CHANGES</button>
    </>
  )
} 