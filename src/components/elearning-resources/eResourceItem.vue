<template>
    <li>
        <base-card>
            <header>
                <h3> {{title }} </h3>
                <base-button mode="flat">Delete</base-button>
            </header>
            <p> {{ description }} </p>
            <nav>
                <a :href="link">View Resources</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['title', 'description', 'link']
}
</script>

<style scoped>

li{
    margin: auto;
    max-width: 35rem;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3{
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p{
    margin: 0.5rem 0;
}

a{
    text-decoration: none;
    color: skyblue;
}

a:hover, a:active{
    color: powderblue;
}

</style>