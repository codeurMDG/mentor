<template>
    <main class="container">
        <Breadcrumb />
        <hr>
        <template v-if="post">

            <h2 class="amber">{{ post.title.toUpperCase() }}</h2>
            <p>{{ post.body }}</p>
        </template>
    </main>
</template>

<script setup>

    import Breadcrumb from '~/components/Breadcrumb.vue';

    const route = useRoute()

    const {data : post} = useFetch('https://jsonplaceholder.typicode.com/posts/' + route.params.id)

</script>

<style>

    .amber {
        color: rgb(255, 191, 0) ;
    }

</style>