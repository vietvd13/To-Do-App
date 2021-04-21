const state = {
  listTask: []
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);
  },
  DELETE_TASK: (state, index) => {
    var listTask = state.listTask;

    listTask.splice(index, 1);

    state.listTask = listTask;
  }
}

const actions = {
  setNewTask({ commit }, newTask) {
    commit('SET_NEW_TASK', newTask);
  },
  deleteTask({ commit }, index) {
    commit('DELETE_TASK', index);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};


