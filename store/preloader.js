import { FILES_LIST } from '../constants/uploader'

export const state = () => ({
  loadCounter: 0,
  readyImages: 0
})

export const getters = {
  preloaderProgress: state => Math.floor(state.readyImages / state.loadCounter * 100),
  isPreloading: state => state.readyImages !== state.loadCounter
}

export const mutations = {
  ADD_RESOURCE: (state, count) => state.loadCounter += count,
  IMAGE_READY: state => state.readyImages++,
}

export const actions = {
  init: ({ dispatch }) => {
    dispatch('addResource', FILES_LIST.length)
    dispatch('preloadImages')
  },
  addResource: ({ commit }, count) => commit('ADD_RESOURCE', count),
  preloadImages({ dispatch }) {
    FILES_LIST.forEach(img => dispatch('loadImage', img))
  },
  loadImage({ commit }, imgPath) {
    const domImage = document.createElement('img')
    domImage.onload = () => {
      commit('IMAGE_READY')
    }
    domImage.src = imgPath
  }
}
