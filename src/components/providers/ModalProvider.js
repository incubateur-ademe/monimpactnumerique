import React, { useState } from 'react'
import ModalContext from 'utils/ModalContext'

export default function ModalProvider(props) {
  const [CO2E, setCO2E] = useState(false)
  const [installInstructions, setInstallInstructions] = useState(false)
  const [perimetre, setPerimetre] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        CO2E,
        setCO2E,
        installInstructions,
        setInstallInstructions,
        perimetre,
        setPerimetre,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
