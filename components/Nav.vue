<template>
    <header class="header">
        <div class="container">
            <nav>
                <ul>
                    <li class="logo">
                        <NuxtImg src="../public/Logo/codeur-logo.png" alt="logo" width="28" height="28" />
                        <strong>Mentor</strong>
                    </li>
                </ul>
                <ul>
                    <li><NuxtLink to="/about" class="secondary">About</NuxtLink></li>
                    <li><NuxtLink top="/blog" class="secondary">Blog</NuxtLink></li>
                    <li><NuxtLink to="#" class="secondary ri-github-fill icon"></NuxtLink></li>
                    <li><NuxtLink to="#" class="secondary ri-discord-fill icon"></NuxtLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>
    .header {
        padding: 8px;
        border-bottom: 1px solid #ffffff2f;

        .logo {
            display: flex;
            align-items: center; 
            gap: 10px;
        }

        strong {
            font-size: 30px;
            color: #fff;
        }

        .icon {
            font-size: 28px;
            &:hover {
                text-decoration: none;
                color: #fff;
            }
        }
    }

</style>