import AppTable from 'src/components/app-table/app-table'
import { HeadCells } from './data'
import usePatientData from 'src/hooks/use-patient-data'

export default function PatientTable({ ageRange }) {
  const { data, isLoading } = usePatientData({ ageRange })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <AppTable headCells={HeadCells} data={data} />
}
