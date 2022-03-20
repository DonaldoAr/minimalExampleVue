const app = Vue.createApp({
  data(){
    return{
      Author: "Luis",
      mensaje: "Hola mundo con Vue"
    }},

    methods:{
      chageName(event){
        console.log(event);
        this.Author = "Donaldo";
        this.phraseUpperCase()
      },
      phraseUpperCase(){
        this.mensaje = this.mensaje.toUpperCase()
      }
    }
});

app.mount('#myApp');