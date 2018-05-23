<template>
  <div>
      <h1>Component 3 这是用vuex的</h1>
    {{getName}}
    {{$store.state.name}}
    <button @click="changeName" value="更名">更名</button>
    <button @click="rename" value="更名">更名</button>
    
    
  </div>
</template>

<script>
export default {
  computed:{
    // getName(){
    //   return this.$store.state.name
    // }
    getName(){//在store里面加getters后
      return this.$store.getters.getReverseName
    }
  },
  methods:{
    changeName () {
      this.$store.commit('updateName')//来自store的方法
    },
    rename () {
        this.$store.dispatch('updateNameAsync')
    }
  }
}
</script>