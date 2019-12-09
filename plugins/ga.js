/* eslint-disable */

export default () => {
  window.dataLayer = window.dataLayer || []

  const gtag = () => {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'AW-699434004')
}
