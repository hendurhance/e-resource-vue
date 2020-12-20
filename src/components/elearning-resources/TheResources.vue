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
   <keep-alive>
       <component :is="tabSelected"></component>
   </keep-alive>
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
            eresources: this.storedResources,
            addResources: this.addResources,
            deleteResource: this.deleteResource
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
        },
        addResources(title, description, url){
            const newResource = {
                id: Math.round(Math.random() * 100000).toString(),
                title: title,
                description: description,
                link: url
            };
            this.storedResources.unshift(newResource);
            this.tabSelected = 'stored-resources';
        },
        deleteResource(id){
            const resIndex = this.storedResources.findIndex(res => res.id === id);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>