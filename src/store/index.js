import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyC_uxS2e-BfCgDIxhshSn5MFEt3-kTh-5U',
  databaseURL: 'https://pomato-timer.firebaseio.com',
  authDomain: 'pomato-timer.firebaseapp.com'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
  state: {
    ...state,
    configRef,
    statisticsRef,
    firebaseApp
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})
