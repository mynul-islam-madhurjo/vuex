import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state){
            state.counter = state.counter+1;
        },
        increase(state,payload){
            state.counter = state.counter + payload.value;
        }
    },
    actions: {
        increment(context){
            // actions allow asynchronous code execution unlike getters
            setTimeout(function(){
                context.commit('increment');
            }, 2000);
        }
    },
    getters: {
        // We can also pass other getters to the getter function
        finalCounter(state){
            return state.counter*2;
        },
        // _ is used instead of state as we are suing getters inside another getter 
        normalizedCounter(_,getters){
            const finalCounter = getters.finalCounter;
            if (finalCounter>100){
                return 100;
            }else{
                return finalCounter
            }
        }
    }
});

export default store;