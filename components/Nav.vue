<template>
    <header class="header">
        <div class="container">
            <nav>
                <ul>
                    <li><strong>Mentor</strong></li>
                </ul>
                <ul>
                    <li><a href="#" class="secondary">About</a></li>
                    <li><a href="#" class="secondary">Blog</a></li>
                    <li><a href="#" class="secondary ri-github-fill icon"></a></li>
                    <li><a href="#" class="secondary ri-discord-fill icon"></a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>
    .header {
        padding: 8px;
        border-bottom: 1px solid #ffffff2f;
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