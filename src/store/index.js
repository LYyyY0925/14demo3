import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    radio:'',
    checkbox:[],
    zwjs:""
  },
  mutations: {
    addSex(state,radio){
      state.radio=radio;
    },
    addHobby(state,checkbox){
      state.checkbox.push(checkbox);
    },
    addZwjs(state,zwjs){
      state.zwjs=zwjs;
    }

  },
  actions: {
  },
  modules: {
  }
})
