<template>
    <button :class="mode">
     <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button{
    border-radius: 3px;
    background: #0967d2;
    color: #fff;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 20px;
    transition: all .25s ease-in-out;
    cursor: pointer;
}

button:hover, 
button:active{
    opacity: .8;
}

.flat{
    background-color: transparent;
    color: #0967d2;
}

.flat:hover,
.flat:active{
    background: #eeeeee;
}
</style>