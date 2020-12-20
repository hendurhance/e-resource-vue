<template>
   <base-card>
     <base-button 
     @click="setTabSelected('stored-resources')"
     :mode="storedResourcesBtn"
     >Stored Resources</base-button>
     <base-button
     @click="setTabSelected('add-resource')"
     :mode="addResourceBtn"
     >Add Resource</base-button>
   </base-card>
   <component :is="tabSelected"></component>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data(){
        return{
            tabSelected: 'stored-resources',
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
                }
            ]
        };
    },
    provide(){
        return{
            eresources: this.storedResources
        };
    },
    computed:{
        storedResourcesBtn(){
            return this.tabSelected === 'stored-resources' ? null : 'flat';
        },
        addResourceBtn(){
            return this.tabSelected === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setTabSelected(tab){
            this.tabSelected = tab;
        }
    }
}
</script>