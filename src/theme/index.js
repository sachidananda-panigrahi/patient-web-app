import { useMemo } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

import { palette } from './palette'
import { typography } from './typography'

export default function ThemeProvider({ children }) {
  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  )

  const theme = createTheme(baseOption)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
