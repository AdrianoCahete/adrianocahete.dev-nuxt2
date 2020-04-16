export default function ({ $featureToggle }) {
  $featureToggle.isQueryStringAllowed((props) => {
    return true
  })
}
