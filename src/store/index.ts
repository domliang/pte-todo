import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import actions from './actions';
import plugins from './plugins';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  actions,
  mutations,
  plugins,
});

store.dispatch('init');

export default store ;
