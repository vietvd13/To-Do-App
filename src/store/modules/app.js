const state = {
  listTask: []
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);
  }
}

const actions = {
  setNewTask({ commit }, newTask) {
    commit('SET_NEW_TASK', newTask);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};


