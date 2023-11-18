import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

import withErrorBoundary from 'src/components/app-error-boundary'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 100,
    label: '100',
  },
]

function AppSlider({ defaultAgeRange, onChange }) {
  const [ageRange, setAgeRange] = React.useState([60, 80])

  const handleChange = (event, newValue) => {
    setAgeRange(newValue)
    if (onChange && typeof onChange === 'function') {
      onChange(newValue)
    }
  }

  return (
    <Box sx={{ width: 420, display: 'flex', flexDirection: 'row', mb: 3 }}>
      <Typography variant="subtitle1" sx={{ width: 200 }}>
        Filter by Age
      </Typography>
      <Slider
        aria-label="Restricted values"
        marks={marks}
        value={ageRange}
        valueLabelDisplay="auto"
        color="secondary"
        onChange={handleChange}
      />
    </Box>
  )
}

export default withErrorBoundary(AppSlider)
