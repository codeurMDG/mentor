<template>
    <main class="container">
        <div v-if="posts" class="content">
            <Breadcrumb />
            <h1>Blog</h1>

            <!-- Afficher les articles paginés -->
            <div class="flex">
                <div v-for="post in paginatedPosts" :key="post.id">
                    <article>
                        <header class="amber">{{ post.title.toUpperCase() }}</header>
                        {{ post.body.slice(0, 1000) + "..." }}
                        <footer>
                            <NuxtLink :to="`/blog/${post.id}`" class="secondary">Read more</NuxtLink>
                        </footer>
                    </article>
                </div>
            </div>

            <!-- Contrôles de pagination -->
            <div v-if="posts.length > 8">
                <nav class="pagination">
                    <button :disabled="currentPage === 1" @click="prevPage">Previous</button>
                    <span>Page {{ currentPage }} of {{ totalPages }}</span>
                    <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
                </nav>
            </div>
        </div>

        <div v-else aria-busy="true"></div>
    </main>
</template>


<script setup>
import { ref, computed } from 'vue';

const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20');

// Pagination state
const currentPage = ref(1);
const itemsPerPage = 8;

// Calculer le nombre total de pages
const totalPages = computed(() => {
    return posts.value ? Math.ceil(posts.value.length / itemsPerPage) : 0;
});

// Obtenir les articles pour la page actuelle
const paginatedPosts = computed(() => {
    if (!posts.value) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return posts.value.slice(start, end);
});

// Méthodes de navigation
function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
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
            color: rgb(255, 191, 0);
        }

        article {
            color: #EFF1F4;
        }
    }
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
}

.pagination button {
    padding: 0.5rem 1rem;
    border: 1px solid rgb(255, 191, 0) ;
    border-radius: 4px;
    background-color: rgb(255, 191, 0) ;;
    cursor: pointer;
}

.pagination button:disabled {
    background-color: #E8AE01;
    cursor: not-allowed;
}

.pagination span {
    font-weight: bold;
}
</style>