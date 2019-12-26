import React from 'react';


export const TextInputField = (props: Props) => {
  const {

    onChange,
    name,
    value
  } = props

  return (
    <>
      <input

        name={name}
        value={value}
        type="string"
        onChange={e => onChange(e)}
      />
    </>
  )
}

export interface Props {
  name?: string,
  value: string,
  onChange: Function,
}