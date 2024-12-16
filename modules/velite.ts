import { defineNuxtModule } from '@nuxt/kit';
import { build } from 'velite';

export default defineNuxtModule({
  async setup(_, nuxt) {
    nuxt.hook('build:before', async () => {
      const isDev = nuxt.options.dev;
      await build({ watch: isDev, clean: !isDev });
    });
  },
});
