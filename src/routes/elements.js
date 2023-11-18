import { Suspense, lazy } from 'react'

const Loadable = Component => props => (
  <Suspense fallback={'Loading...'}>
    <Component {...props} />
  </Suspense>
)

export const PatientPage = Loadable(lazy(() => import('src/pages/patient')))
