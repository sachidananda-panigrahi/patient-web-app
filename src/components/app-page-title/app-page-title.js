import { Box, Divider, Typography } from '@mui/material'

export default function AppPageTitle({ title }) {
  return (
    <>
      <Box
        sx={{
          minHeight: 80,
          padding: 3.5,
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex',
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
    </>
  )
}
