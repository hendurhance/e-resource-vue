<template>
  <ul>
    <elearning-resources 
    v-for="res in storedResources" 
    :key="res.id" 
    :title="res.title"
    :description="res.description"
    :link="res.link"
    ></elearning-resources>
  </ul>
</template>

<script>
import eLearningResouces from './components/elearning-resources/eResourceItem.vue'

export default {
  components: {
    'elearning-resources': eLearningResouces
  },
  data(){
    return{
      storedResources: [
        { 
          id: 'official-guide', 
          title: 'Official Guide', 
          description: 'The official Vue.js development guide', 
          link: 'https://vuejs.org'
        },
        { 
          id: 'google', 
          title: 'Google', 
          description: 'Google search engine', 
          link: 'https://google.com'
        },
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}


</style>
