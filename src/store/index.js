import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        persons: [
        ],
    },
    actions:{
        addNewPerson(context,payload){
                axios.post('http://localhost:3000/persons ',payload).then(response => {
                    context.commit('addNewPerson',response.data)
                })
        },
        getAllPersons(context){
            axios.get('http://localhost:3000/persons').then(response =>{
                context.commit('toPerssons', response.data)
            })
        }
    },
    mutations:{
            addNewPerson(state,payload){
                state.persons.push(payload)
            },
            delPerson(state,payload){
                state.persons.splice(payload,1)
            },
            toPersons(state,payload){
                state.persons = payload
            }
    },
    getters:{
        getPersons(state){return state.persons},
        getCounterPersons(state){return state.persons.lengh},
        getCountMen(state){
            let mens = state.persons.filter(person => {return person.gender == 1
            })
                return mens.length
        },

        getCountWomen(state) {
            let womens = state.persons.filter(person =>{
                return person.gender == 0
            })
        return womens.length
        }
    }
})