<template>
    <base-dialog v-if="inputIsEmpty" title="Invalid Input" @close="closeDialog">
     <template #default>
       <p>Sorry, at least one input feild is empty</p>
       <p>Kindly fill out the input feild</p>
     </template>
     <template #actions>
       <base-button @click="closeDialog">Close</base-button>
     </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitInputs">
          <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="titleInput">
          </div>
          <div class="form-control">
            <label for="title">Description</label>
            <textarea name="description" ref="descriptionInput" id="description" rows="3"></textarea>
          </div>
          <div class="form-control">
            <label for="title">Link</label>
            <input id="link" name="link" type="url" ref="urlInput">
          </div>
          <div>
             <base-button type="submit">Add Resource</base-button>
          </div>
      </form>
    </base-card>
</template>

<script>
export default {
  inject: ['addResources'],
  data(){
    return{
      inputIsEmpty: false,
    }
  },
  methods: {
    submitInputs(){
      const titleSubmit = this.$refs.titleInput.value;
      const descriptionSubmit = this.$refs.descriptionInput.value;
      const urlSubmit = this.$refs.urlInput.value;
      
      // Check if input is empty
      if(
          titleSubmit.trim() === '' ||
          descriptionSubmit.trim() === '' || 
          urlSubmit.trim() === '')
        {
        this.inputIsEmpty = true;
        return;
      }

      this.addResources(titleSubmit, descriptionSubmit, urlSubmit)
    },
    closeDialog(){
      this.inputIsEmpty = false;
    }
  }
}
</script>

<style scoped>
label{
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
input,
textarea{
    display: block;
    width: 100%;
    font: inherit;
    padding: .15rem;
    border: 1px solid #0e0e0e;
}

input:focus,
textarea:focus{
    outline: none;
    border-color: #0c0c0c;
    background-color: #fefefe;
}

.form-control{
    margin: 1rem 0;
}

</style>