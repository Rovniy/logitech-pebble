/* eslint-disable */

export const actions = {
  event({ app }, event) {
    console.log('ANALYTIC', event, window.ga)
    window.ga ? window.ga('send', 'event', event.event, event.event_link) : console.log('NO WINDOW GA')
  }
}


