/* eslint-disable */

export const actions = {
  event({ app }, event) {
    console.log('ANALYTIC', event, window.ga)
    window.ga ? window.ga('send', 'event', event.event1 || '', event.event2 || '', event.event3 || '') : console.log('NO WINDOW GA')
  }
}


