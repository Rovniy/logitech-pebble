export const state = () => ({
  loadCounter: 0,
  resourcesToDownload: []
})

export const getters = {
  isPreloading: state => state.loadCounter <= 0
}

export const mutations = {
  ADD_RESOURCE: state => state.loadCounter++,
  REMOVE_RESOURCE: state => state.loadCounter--
}

export const actions = {
  addResource: ({ commit }) => commit('ADD_RESOURCE'),
  removeResource: ({ commit }) => commit('REMOVE_RESOURCE'),
}
