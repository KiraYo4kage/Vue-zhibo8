export default function getterCreator(getters) {
  const obj = {}
  getters.forEach( getter => obj[getter] = (state) => state[getter] )
  return obj
}
