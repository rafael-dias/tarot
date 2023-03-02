<script >
import { store } from '@/store.js'
export default {
  data() {
    return {
      store,
      imgpath:"public/imgs/",
      cartas:[],
      carta_certa:{},
      palavras_chave:[],
      resposta_atual:0,
      resultado:null,
      pontos:0,
      resultado_certas : [],
      resultado_erradas : []      
    }
  },
  computed: {
   
  },
  created(){

    this.CartasAleatorias()

  },
  methods:{
    PalavrasChaves(){
    var numa = 0
    var ate = this.store.palavras_chaves[this.carta_certa.id].palavras_chaves.length
    var sequencia = []
    var palavras_chave = []
      for (let index = 0; index < 3; index++) {
        numa = Math.floor(Math.random() * (ate - 0) + 0)
        while (sequencia.indexOf(numa) != -1) {
          numa = Math.floor(Math.random() * (ate - 0) + 0)
        }
        sequencia[index] = numa;
         palavras_chave[index] = this.store.palavras_chaves[this.carta_certa.id].palavras_chaves[numa];

      }
      this.palavras_chave = palavras_chave

    },
    
    CartasAleatorias(){
      var de = 0
      var ate = this.store.deck.length
      var sequencia = []
      var cartas = []
      var numa = 0
      
      
       for (let index = 0; index < 3; index++) {
        numa = Math.floor(Math.random() * (ate - de) + de)
        while (sequencia.indexOf(numa) != -1) {
          numa = Math.floor(Math.random() * (ate - de) + de)
        }
        sequencia[index] = numa;
        cartas[index] = this.store.deck[numa];
        cartas[index].certa = false

        
      }
      var escolhe_carta = Math.floor(Math.random() * (3 - 0) + 0)
      cartas[escolhe_carta].certa = true
      this.cartas = cartas
      this.carta_certa = cartas[escolhe_carta]
      this.PalavrasChaves()
    },

    Resposta(index){
      var self = this
      if(index == this.carta_certa.id){
        this.resultado = true
        this.pontos +=1 
        this.resultado_certas.push(index)
      }else{
        this.resultado_erradas.push(index)
        this.resultado = false
        
      }
      this.resposta_atual += 1 

      setTimeout(() => {
        self.CartasAleatorias()
         self.resultado = null
      }, 3000);
    },
    Recomecar(){
      this.resposta_atual = 0
      this.pontos = 0
      this.resultado = null
      this.resultado_certas = []
      this.resultado_erradas = []

       this.CartasAleatorias()

    }
  },
  
}
</script>

<template>
  <div class="tarot" v-if="cartas[0].nome">
    
    <div v-show="resposta_atual < 10">

      <div class="container d-flex justify-content-center" >
        <div class="row">

        <div class="carta" v-for="(carta, index) in cartas"  @click="Resposta(carta.id)">
          
          <img loading="lazy" :src="imgpath+carta.img" alt="" class="img-fluid" :class="[carta_certa.id != carta.id && resultado != null ? 'cartas-erradas' : '', carta_certa.id == carta.id && resultado != null ? 'carta-certa' : '']">
          <!-- <img loading="lazy" :src="imgpath+carta.img" alt="" class="img-fluid" :class="[carta_certa.id != carta.id && resultado != null ? 'cartas-erradas' : '']"> -->
          <div class="nome text-center">
            <span>{{ carta.numero.slice(1,-1) }} - {{ carta.nome }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center">
      
      <div class="row">
        <div v-show="resultado != null" class="alert text-center" role="alert" :class="[resultado == true?'alert-success':'alert-danger']" v-text="resultado == true ? 'Acertou!':'Errou!'">
          
        </div>
        <div class="campo-palavras-chave text-center ">
          <h2>Qual carta corresponde?</h2>
          <label class="palavras-chave " v-for="(item, index) in palavras_chave">• {{item}}</label>
          
        </div> 
        <!-- <div class="descricao">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint alias eaque id cumque, illo, similique aperiam natus doloribus possimus, necessitatibus unde quidem velit consectetur voluptatum corporis explicabo atque esse.
        </div> -->
      </div>
    </div>
  </div>
  <div v-show="resposta_atual == 10">
    <div class="container d-flex justify-content-center text-center">
      <div class="row">
        <div style="margin-top: 200px;" > 

          <h3> Você acertou {{pontos}} de 10</h3>
          <br>
          <p>Cartas que vc acertou:</p>
           <label class="palavras-chave " v-for="(item, index) in resultado_certas"> {{store.deck[item].nome}} <span v-if="index < resultado_certas.length-1">, </span></label>
           <br>
           <br>
            <p>Cartas que vc errou:</p>
           <label class="palavras-chave " v-for="(item, index) in resultado_erradas"> {{store.deck[item].nome}} <span v-if="index < resultado_erradas.length-1">, </span></label>
           <br>
           <br>
           <br>
          <button class="btn btn-secondary bs-dark" @click="Recomecar()">Recomeçar</button>
        </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>

.cartas-erradas{
  filter: grayscale(100%);
  filter: opacity(30%);
}
.carta-certa{
  box-shadow: -0.2em -0.2em 0.2em #6910f3 ,-0.2em 0.2em 0.2em #6910f3, 0.2em -0.2em 0.2em #6910f3, 0.2em 0.2em 0.2em #6910f3; 
  
}
.palavras-chave{
  padding: 1px;
  margin: 6px;
  font-size: 15px;
  color: bisque;
  line-height: 30px;
   border-radius: 5px;
    border-collapse: collapse;
  box-decoration-break: clone;
  /* display: inline; */
  background-color: #0e0e0f;
  box-shadow: 0.250em 0 0 #0e0e0f,-0.250em 0 0 #0e0e0f;
}
.campo-palavras-chave{
  /* width: 300px; */
    max-width: 50em;

}
.btn-fechar{
  position:absolute;
  height: 50px;
  width: 40px;
  /* background-color: #6910f3; */
  background-color: #212529;
  left: -40px;
  top: 70%;
  display: block !important;
  border-radius: 20% 0% 0% 20%;
}
.btn-abrir{
  cursor: pointer;
  position:fixed;
  height: 50px;
  width: 40px;
  /* background-color: #6910f3; */
  background-color: #212529;
  right: 0px;
  top: 70%;
  display: block !important;
  border-radius: 20% 0% 0% 20%;
}

.mesa{
  position: absolute;
  right: 0px;
  top: 0px;
  color: chartreuse;
  width: 100px;
  text-align: center;
  text-align-last: center;
  height: 100px;
  border-radius: 0% 0% 0% 100%;
  background-color: black;
}
.filtros{
  position: absolute; 
  left: 10px;
}
.container {
  display: flex;
}
.carta{
  cursor: pointer;
  position: relative;
  max-width: 200px;
  padding: 12px;
  /* background-color:rgb(56, 56, 56); */
  color:white
}
.carta img{
  width: 100%;
}
.ftr-badge{
  margin:2px
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.fativo{
  background-color: #6910f3 !important;
}


@media (min-width: 1024px) {
 
}
</style>
