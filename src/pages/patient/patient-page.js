import { Container } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { APPLICATION_NAME } from 'src/app-config'
import Patient from 'src/features/patient'
import AppPageTitle from 'src/components/app-page-title'

export default function PatientPage() {
  return (
    <>
      <Helmet>
        <title>{`Patient List| ${APPLICATION_NAME}`}</title>
      </Helmet>
      <AppPageTitle title="Patient List" />
      <Container maxWidth={false}>
        <Patient />
      </Container>
    </>
  )
}
