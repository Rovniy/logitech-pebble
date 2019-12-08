/* eslint-disable */

export const actions = {
  event({ app }, event) {
    if (window.ga) {
      console.log('ANALYTIC', event)
      window.ga('send', 'event', event.event1 || '', event.event2 || '', event.event3 || '')
    }
  }
}
