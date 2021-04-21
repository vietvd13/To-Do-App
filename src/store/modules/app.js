const state = {
  listTask: [],
  originListTask: [],
  typeFilter: 0
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);
    state.originListTask.push(newTask);
  },
  DELETE_TASK: (state, index) => {
    let listTask = state.listTask;

    listTask.splice(index, 1);

    state.listTask = listTask;
    state.originListTask = listTask;
  },
  UPDATE_STATUS_TASK: (state, task) => {
    let index = task.index;
    let status = task.status;

    state.listTask[index].status = status;
    state.originListTask[index].status = status;
  },
  UPDATE_TITLE_TASK: (state, task) => {
    let index = task.index;
    let title = task.title;

    state.listTask[index].title = title;
    state.originListTask[index].title = title;
  },
  SET_TYPE_FILTER: (state, type) => {
    state.typeFilter = type;
  },
  FILTER_LIST_TASK: (state, type) => {
    let listTask = state.originListTask;

    switch (type) {
      case 0:
        state.listTask = listTask;

        break;
      case 1:
        state.listTask = listTask.filter(option => option.status === true);

        break;
      case 2:
        state.listTask = listTask.filter(option => option.status === false);

        break;
      case 3:
        state.listTask = [];
        state.originListTask = [];

        break;
      default:

    }
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
  },
  setTypeFilter({ commit }, type) {
    commit('SET_TYPE_FILTER', type);
  },
  filterListTask({ commit }, type) {
    commit('FILTER_LIST_TASK', type);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};


