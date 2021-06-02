import Cookie from 'js-cookie';
import { getListTask, getTypeFilter } from '../../helper/getDataInCookie';

const state = {
  listTask: getListTask(),
  typeFilter: getTypeFilter()
};

const mutations = {
  SET_NEW_TASK: (state, newTask) => {
    state.listTask.push(newTask);

    Cookie.set('list-task', state.listTask);
  },
  DELETE_TASK: (state, index) => {
    let listTask = state.listTask;

    listTask.splice(index, 1);

    state.listTask = listTask;

    Cookie.set('list-task', state.listTask);
  },
  DELETE_ALL_TASK: (state) => {
    state.listTask = [];

    Cookie.set('list-task', state.listTask);
  },
  UPDATE_STATUS_TASK: (state, task) => {
    let index = task.index;
    let status = task.status;

    state.listTask[index].status = status;

    Cookie.set('list-task', state.listTask);
  },
  UPDATE_TITLE_TASK: (state, task) => {
    let index = task.index;
    let title = task.title;

    state.listTask[index].title = title;

    Cookie.set('list-task', state.listTask);
  },
  SET_TYPE_FILTER: (state, type) => {
    state.typeFilter = type;

    Cookie.set('type-filter', state.typeFilter);
  },
}

const actions = {
  setNewTask({ commit }, newTask) {
    commit('SET_NEW_TASK', newTask);
  },
  deleteTask({ commit }, index) {
    commit('DELETE_TASK', index);
  },
  deleteAllTask({ commit }) {
    commit('DELETE_ALL_TASK');
  },
  updateStatusTask({ commit }, task) {
    commit('UPDATE_STATUS_TASK', task);
  },
  updateTitleTask({ commit }, task) {
    commit('UPDATE_TITLE_TASK', task);
  },
  setTypeFilter({ commit }, type) {
    commit('SET_TYPE_FILTER', type);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};


