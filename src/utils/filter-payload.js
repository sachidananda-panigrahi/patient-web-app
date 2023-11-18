const filterPayload = payload => {
  const filteredPayload = payload
  Object.keys(filteredPayload).forEach(
    k =>
      (filteredPayload[k] === undefined ||
        filteredPayload[k] === null ||
        filteredPayload[k] === '') &&
      delete filteredPayload[k]
  )
  return filteredPayload
}

export default filterPayload
