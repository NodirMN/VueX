<template>
  <div id="app">
    <input type="text" v-model='person.name'><br>
    <label for=""><input type="radio" name="gender" value="1" v-model="person.gender">Erkak</label>
    <label for=""><input type="radio" name="gender" value="0" v-model="person.gender">Ayol</label>
    <button @click="add()">Qo'shish</button>
  <div>
      <h1>Ishchilar soni:{{countPersons}} |
    Erkaklar soni:{{countMen}} |
    Ayollar soni:{{countWomen}}</h1>
    <ul>
      <li v-for='(person,index) of persons' :key='index' @click='del(index)'>{{person.name}} | {{person.gender}}</li>
    </ul>
  </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      person: {}
    }
  },
  methods:{
    del(index){
      this.$store.commit('delPerson',index)
    },
    add(){
      this.$store.dispatch('addNewPerson', this.person)
      this.person = {}
    }
  },
  computed: {
    countPersons(){return this.$store.getters.getCountPersons},
    countMen(){return this.$store.getters.getCountMen},
    countWomen(){return this.$store.getters.getCountWomen},

    
    persons(){
      return this.$store.getters.getPersons
    }
  },
  created(){
    this.$store.dispatch('getAllPersons')
  }
}
</script>

<style>
</style>
