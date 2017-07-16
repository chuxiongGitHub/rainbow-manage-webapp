import Vuex from 'vuex'
import Vue from 'vue'

if (process.env.NODE_ENV !== 'production') {
  Vue.use(Vuex)
}

export default new Vuex.Store({
  modules: {
    student: require('./student').default,
    teacher: require('./teacher').default,
    map: require('./map').default
  }
})
