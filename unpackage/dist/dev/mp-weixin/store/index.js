"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    //存放状态
    "token": "",
    "username": "foo"
  },
  mutations: {},
  getters: {},
  actions: {}
});
exports.store = store;
