export default function getQueryStringParams(params) {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&')
}
