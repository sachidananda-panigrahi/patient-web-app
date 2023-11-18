import dayjs from 'dayjs'
import useSWR from 'swr'

import swrFetcher from 'src/utils/swr-fetcher'

export default function usePatientData({ ageRange }) {
  const { data, error } = useSWR('/Patient', swrFetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
  })

  let patientData =
    data?.entry?.map(entry => {
      const birthDate = dayjs(entry?.resource?.birthDate)
      const age = dayjs().diff(birthDate, 'year') // calculate age

      return {
        id: entry?.resource?.id,
        name: `${entry?.resource?.name?.[0]?.given?.[0]} ${entry?.resource?.name?.[0]?.given?.[1]}`,
        gender: entry?.resource?.gender,
        birthDate: entry?.resource?.birthDate,
        age: age, // add age to the returned object
        address: entry?.resource?.address?.[0]?.text,
        phone: entry?.resource?.telecom?.[0]?.value,
      }
    }) ?? []

  // filter patientData to only include patients within the age range
  patientData = patientData.filter(
    patient => patient.age >= ageRange[0] && patient.age <= ageRange[1]
  )

  return {
    data: patientData,
    isLoading: !error && !data,
    isError: error,
  }
}
