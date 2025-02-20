import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import AnimatedImage from './components/AnimatedImage.vue';
import AnimatedComponent from './components/AnimatedComponent.vue';

const app = createApp(App);

// Register the AnimatedImage component globally
app.component('AnimatedImage', AnimatedImage);

// Register the AnimatedComponent globally
app.component('AnimatedComponent', AnimatedComponent);

app.use(router);
app.use(VueScrollTo);
app.mount('#app');
