const state = {
  listTask: []
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);
  },
  DELETE_TASK: (state, index) => {
    let listTask = state.listTask;

    listTask.splice(index, 1);

    state.listTask = listTask;
  },
  UPDATE_STATUS_TASK: (state, task) => {
    let index = task.index;
    let status = task.status;

    state.listTask[index].status = status;
  },
  UPDATE_TITLE_TASK: (state, task) => {
    let index = task.index;
    let title = task.title;

    state.listTask[index].title = title;
  }
}

const actions = {
  setNewTask({ commit }, newTask) {
    commit('SET_NEW_TASK', newTask);
  },
  deleteTask({ commit }, index) {
    commit('DELETE_TASK', index);
  },
  updateStatusTask({ commit }, task) {
    commit('UPDATE_STATUS_TASK', task);
  },
  updateTitleTask({ commit }, task) {
    commit('UPDATE_TITLE_TASK', task);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};


