<template>

    <hr>

    <main class="container">
        <small>&copy; Copy right {{ date }} Prod by <a href="https://codeur-mdg.vercel.app/" target="_blank" class="secondary">Codeur MDG</a></small>
    </main>

</template>

<script setup>

const date = new Date().getFullYear()

</script>

<style scoped>

    hr {
        margin-top: 50px;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
    }


</style>