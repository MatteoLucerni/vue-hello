console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      hello: 'Hello my friend!',
      imageName: 'Paperella Boolean',
      image:
        'https://boolean-landings.s3.eu-central-1.amazonaws.com/blog/1651666448paperella-169.jpeg',
    };
  },
});

// La monto nell'html
app.mount('#root');
