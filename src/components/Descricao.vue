<script >
import { store } from '@/store.js'
export default {
  data() {
    return {
      store,
      imgpath:"public/imgs/",
      
    }
  },
  computed: {
   
  },
  created(){
    var self = this

    // verifica se o objeto é vazio
    if(Object.keys(this.store.carta).length === 0 && this.store.carta.constructor === Object){
      self.$router.push('/')
    }
  },
  methods:{

  }
  
}
</script>

<template>
  <div class="tarot" v-if="store.carta.nome">
    
    <div class="container d-flex justify-content-center" >
      <div class="row">

        <div class="carta "  >
      
          <div class="nome text-center">
            <h2>{{ store.carta.numero.slice(1,-1) }} - {{ store.carta.nome }}</h2>
          </div>
          <img loading="lazy" :src="imgpath+store.carta.img" alt="" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center">

      <div class="row">
        
        <div class="campo-palavras-chave text-center ">
          <h2>Palavras-chave</h2>
            <label class="palavras-chave " v-for="(item, index) in store.palavras_chaves[store.carta.id].palavras_chaves">• {{item}}</label>
            
          </div>
          <!-- <div class="descricao">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint alias eaque id cumque, illo, similique aperiam natus doloribus possimus, necessitatibus unde quidem velit consectetur voluptatum corporis explicabo atque esse.
          </div> -->
        </div>
      </div>
  </div>
</template>

<style scoped>
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
