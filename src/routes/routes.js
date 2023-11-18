import { createBrowserRouter, Navigate } from 'react-router-dom'

import { PatientPage } from './elements'
import { ApplicationLayout } from 'src/layouts'
import { PATH_APPLICATION } from './paths'

export default function Routes() {
  return createBrowserRouter([
    {
      path: PATH_APPLICATION.root,
      element: <Navigate to={PATH_APPLICATION.patient.root} replace />,
      index: true,
    },
    {
      path: PATH_APPLICATION.patient.root,
      element: <ApplicationLayout />,
      children: [
        {
          element: <Navigate to={PATH_APPLICATION.patient.list} replace />,
          index: true,
        },
        {
          path: PATH_APPLICATION.patient.list,
          element: <PatientPage />,
          index: true,
        },
      ],
    },
  ])
}
