import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import DrawerAppBar from './header'
import * as Styled from './styles'

export default function ApplicationLayout() {
  return (
    <>
      <DrawerAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: 8,
          minHeight: '100vh',
          backgroundColor: '#eeeeee',
        }}
      >
        <Styled.DrawerHeader />
        <Outlet />
      </Box>
    </>
  )
}
