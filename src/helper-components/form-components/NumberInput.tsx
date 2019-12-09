import React from 'react';


export const NumberInputField = (props: Props) => {
  const {
    max,
    min,
    onChange,
    name,
    value
  } = props

  return (
    <>
      <input
        max={max}
        min={min}
        name={name}
        value={value}
        type="number"
        onChange={e => onChange(e.target.value)}
      />
      {value > max || value < min ? `input is out of range (${min} - ${max})` : null}
    </>
  )
}

export interface Props {
  max: number,
  min: number,
  name?: string,
  value: number,
  onChange: Function,
}