import Vue from 'vue';

const Store = function Store(option = {}) {
    const {state = {}, mutations = {}, actions = {}, getters={}} = option;
    this._vm = new Vue({
        data: {
            $sstate: state
        }
    })
    this._mutations = mutations
    this._actions = actions
    this._getters = getters
    const ref = this
    const commit = ref.commit
    const dispatch = ref.dispatch

    this.commit = function boundCommit(type, paylod){
        return commit.call(ref, type, paylod)
    }

    this.dispatch = function boundDispatch(type, paylod){
        return dispatch.call(ref, type, paylod)
    }
}

Store.prototype.commit = function(type, paylod) {
    if(this._mutations[type]){
        this._mutations[type](this.state, paylod)
    }
}

Store.prototype.dispatch = function(type, paylod){
    if(this._actions[type]){
        this._actions[type]({
            state: this.state,
            commit: this.commit,
            paylod,
        })
    }
}

Store.prototype.getters = function(type){
    if(this._getters[type]){
        this._getters[type](this.state)
    }
}

Object.defineProperties(Store.prototype,{
    state: {
        get: function(){
            return this._vm.$data.$sstate
        }
    }
})

export default {Store}