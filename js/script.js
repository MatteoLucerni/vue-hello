console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      hello: 'Hello my friend!',
    };
  },
});

// La monto nell'html
app.mount('#root');
