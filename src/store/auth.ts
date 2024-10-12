export const state = () => ({
    isAuthenticated: false,
  })
  
  export const mutations = {
    setAuth(state: { isAuthenticated: any }, payload: any) {
      state.isAuthenticated = payload
    },
  }
  
  export const actions: any = {
    login({ commit }: any) {
      commit('setAuth', true)
    },
    logout({ commit }: any) {
      commit('setAuth', false)
    },
  }
  