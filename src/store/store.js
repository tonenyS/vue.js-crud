import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let mongo_api = "http://localhost:5000/api/food/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    foods: []
  },

  mutations: {
    fetchFood(state, { res }) {
      state.foods = res.data;
    },
    addFood(state, { payload }) {
      state.foods.push(payload);
    },
    deleteFood(state, { payload }) {
      state.foods.splice(payload.index, 1);
    },
    editFood(state, { payload }) {
      state.foods[payload.index].building = payload.building;
      state.foods[payload.index].name = payload.name;
      state.foods[payload.index].lastname = payload.lastname;
      state.foods[payload.index].tel = payload.tel;
      state.foods[payload.index].tel2 = payload.tel2;   
      state.foods[payload.index].Floor = payload.Floor;   
      state.foods[payload.index].Room = payload.Room;  
      state.foods[payload.index].isp = payload.isp;
      state.foods[payload.index].ISPCode = payload.ISPCode;
      state.foods[payload.index].MemberNumber = payload.MemberNumber;
      state.foods[payload.index]. Fees = payload. Fees;
      state.foods[payload.index].Confirming = payload.Confirming;
      state.foods[payload.index].team = payload.team;
    }
  },

  actions: {
    async fetchFood({ commit }) {
      await Axios.get(mongo_api)
        .then(res => commit("fetchFood", { res }))
        .catch(err => alert(err));
    },
    async addFood({ commit }, payload) {
      await Axios.post(mongo_api, payload)
        .then(() => commit("addFood", { payload }))
        .catch(err => alert(err));
    },
    async deleteFood({ commit }, payload) {
      alert(payload._id);
      await Axios.delete(mongo_api + payload._id)
        .then(() => commit("deleteFood", { payload }))
        .catch(err => alert(err));
    },
    async editFood({ commit }, payload) {
      await Axios.put(mongo_api + payload._id, payload)
        .then(() => commit("editFood", { payload }))
        .catch(err => alert(err));
    }
  },

  getters: {
    foods: state => state.foods
  }
});