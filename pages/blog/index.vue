<template>
    <main class="container">
        <div v-if="posts" class="content">
            <Breadcrumb />
            <h1>Blog</h1>
    
            <div class="flex">
                <div v-for="post in posts" :key="post.id">
                    <article>
                        <header class="amber">{{ post.title.toUpperCase() }}</header>
                        {{ post.body.slice(0, 1000) + "..." }}

                        <footer>
                            <NuxtLink :to="`/blog/${post.id}`" class="secondary">Read more</NuxtLink>
                        </footer>

                    </article>
                </div>
            </div>
        </div>

        <div v-else aria-busy="true"></div>

    </main>
</template>

<script setup>

    const { data : posts } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=15')

</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;

        .content {
            width: 100%;
            height: 100%;

            h1 {
                font-size: 50px;
                color: #EFF1F4;
                margin-bottom: 50px;
            }

            .amber {
                color: rgb(255, 191, 0) ;
            }

            article {
                color : #EFF1F4;
            }
        }
    }
</style>