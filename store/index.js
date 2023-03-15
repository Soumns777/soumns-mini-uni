import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import User from '@/store/modules/user'

Vue.use(Vuex)



export default new Vuex.Store({
  plugins: [createPersistedState({ // 使用持久化插件
    // paths: ['app'], // 持久化部分数据
    storage: {
      getItem: (key) => uni.getStorageSync(key),
      setItem: (key, value) => uni.setStorageSync(key, value),
      removeItem: (key) => uni.removeStorageSync(key),
    }
  })],
  modules: {
    User
  }
})
