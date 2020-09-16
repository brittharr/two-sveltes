import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'second app'
  }
});

export default app;