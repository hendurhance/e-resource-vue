<template>
   <header>
       <h1> {{ title }} </h1>
    </header> 
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
header{
    text-align: center;
    background: #0967d2;
    padding: 2em;
    color: #fff;
}
</style>