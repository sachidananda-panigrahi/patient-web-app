function path(root, sublink) {
  return `${root}${sublink}`
}

const APP_ROOT = '/'
const PATIENT_ROOT = path(APP_ROOT, 'patient')

export const PATH_APPLICATION = {
  root: APP_ROOT,
  patient: {
    root: PATIENT_ROOT,
    list: path(PATIENT_ROOT, '/list'),
  },
}
