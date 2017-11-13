/**
 * Created by Aijun on 2017/11/10.
 */

import Vue from 'vue'

import DateUtil from './DateUtil'

const components = {
    "v-base-button":require('./v-base-button.vue')
};

const utils = {
    DateUtil:DateUtil,
};

const install = function (Vue, opts = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.prototype.$utils = utils;
};

//auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: '0.0.15',
    install,
    ...components,
    ...utils
};

export default API;