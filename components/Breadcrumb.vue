<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ul>
      
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <template v-if="index < breadcrumbs.length - 1">
          <NuxtLink :to="crumb.link">{{ crumb.label }}</NuxtLink>
        </template>
        <template v-else>
          <span>{{ crumb.label }}</span>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

// Generate breadcrumbs dynamically
const route = useRoute();
const breadcrumbs = route.path
  .split('/')
  .filter((segment) => segment)
  .map((segment, index, array) => ({
    label: decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1)),
    link: '/' + array.slice(0, index + 1).join('/'),
  }));

// Add a "Home" link at the start
breadcrumbs.unshift({ label: 'Home', link: '/' });
</script>


<style scoped>
.breadcrumb {
  display: flex;
  gap: 0.5rem;
}

.breadcrumb ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.breadcrumb li {
  display: flex;
  align-items: center;
}

.breadcrumb li+li::before {
  content: "/";
  margin: 0 0.5rem;
  color: var(--color-muted, #6c757d);
}

.home-icon {
  font-size: 20px;
  color: var(--color-muted, #6c757d);
  margin-right: 5px;
}
</style>