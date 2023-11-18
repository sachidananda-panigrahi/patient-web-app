import React from 'react'

import AppSlider from 'src/components/app-slider'
import debounced from 'src/utils/debounced'
import PatientTable from './patient-table'

const defaultAgeRange = [60, 80]

export default function Patient() {
  const [ageRange, setAgeRange] = React.useState(defaultAgeRange)

  const debouncedOnChange = debounced(300, newValue => {
    setAgeRange(newValue)
  })

  return (
    <>
      <AppSlider
        defaultAgeRange={defaultAgeRange}
        onChange={debouncedOnChange}
      />
      <PatientTable ageRange={ageRange} />
    </>
  )
}
