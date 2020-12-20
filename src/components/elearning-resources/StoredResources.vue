<template>
  <ul>
    <elearning-resources 
        v-for="res in eresources" 
        :key="res.id" 
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
    ></elearning-resources>
  </ul>
</template>

<script>
import eLearningResouces from './eResourceItem.vue'

export default {
    inject: ['eresources'],
    components: {
        'elearning-resources': eLearningResouces
    }
}
</script>

<style scoped>

ul{
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 35rem;
}

</style>