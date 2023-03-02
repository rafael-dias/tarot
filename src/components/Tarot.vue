<script >
import { store } from '@/store.js'
export default {
  data() {
    return {
      store,
      imgpath:"public/imgs/",
      fltArcano:"",
      fltCabala:"",
      fltNumero:"",
      fltNaipe:"",
      fltPlaneta:"",
      fltSigno:"",
      fltMundo:"",
      fltPalavrasChaves:"",
      filterKey:"",

       
    }
  },
  computed: {
    filteredData() {
      // const sortKey = this.sortKey
      
      const filterKey = this.store.filterKey && this.store.filterKey.toLowerCase()
      const fltArcano = this.store.fltArcano && this.store.fltArcano.toLowerCase()
      const fltCabala = this.store.fltCabala && this.store.fltCabala.toLowerCase()
      const fltNumero = this.store.fltNumero && this.store.fltNumero.toLowerCase()
      const fltNaipe = this.store.fltNaipe && this.store.fltNaipe.toLowerCase()
      const fltPlaneta = this.store.fltPlaneta && this.store.fltPlaneta.toLowerCase()
      const fltSigno = this.store.fltSigno && this.store.fltSigno.toLowerCase()
      const fltMundo = this.store.fltMundo && this.store.fltMundo.toLowerCase()
      const fltPalavrasChaves = this.store.fltPalavrasChaves && this.store.fltPalavrasChaves.toLowerCase()
     
      // const order = this.sortOrders[sortKey] || 1
      let data = this.store.deck
      if (filterKey) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
      }

      if (fltArcano) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltArcano) > -1
            })
          })
      }
      if (fltCabala) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltCabala) > -1
            })
          })
      }
      if (fltNumero) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltNumero) > -1
            })
          })
      }
      if (fltNaipe) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltNaipe) > -1
            })
          })
      }
      if (fltPlaneta) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltPlaneta) > -1
            })
          })
      }
      if (fltSigno) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltSigno) > -1
            })
          })
      }
      if (fltMundo) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltMundo) > -1
            })
          })
      }
      if (fltPalavrasChaves) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(fltPalavrasChaves) > -1
            })
          })
      }
      //   data = data.slice().sort((a, b) => {
      //     a = a[sortKey]
      //     b = b[sortKey]
      //     return (a === b ? 0 : a > b ? 1 : -1) * order
      //   })
      // }
      return data
    
    }
  },
  methods:{
    Filtro(filtro,   event, valor=0,){
      if(valor){
        this.store[filtro] == valor ? this.store[filtro] = '': this.store[filtro] = valor
      }else{
        this.store[filtro] == event.target.innerText ? this.store[filtro] = '': this.store[filtro] = event.target.innerText
      }
    },
    LimparFiltro(){
      
      this.store.filterKey = ""
      this.store.fltArcano = ""
      this.store.fltCabala = ""
      this.store.fltNumero = ""
      this.store.fltNaipe = ""
      this.store.fltPlaneta = ""
      this.store.fltSigno = ""
      this.store.fltMundo = ""
      this.store.fltPalavrasChaves = ""
    },
    Descricao(carta){
      this.store.carta = carta
      this.$router.push('/descricao')
  
    }
  },
  
}
</script>

<template>
  <div class="tarot">
    <!-- <div class=" mesa btn" data-bs-toggle="offcanvas" href="#menufiltros" role="button" aria-controls="menufiltros"> <span>MESA</span> </div> -->
    <div class="btn-abrir"  data-bs-toggle="offcanvas" href="#menufiltros" role="button" aria-controls="menufiltros"> <img loading="lazy" class="img-fluid" src="public/hex.png">  </div>
<div class="offcanvas   offcanvas-end text-bg-dark"   data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1" id="menufiltros" aria-labelledby="menufiltrosLabel">
  <div class="btn-fechar" data-bs-dismiss="offcanvas" aria-label="Close">   <img loading="lazy" class="img-fluid" src="public/hex.png" > </div>
<div class="offcanvas-header">
    <h5 class="offcanvas-title" id="menufiltros">Filtros</h5>
    <button type="button" class="btn btn-sm btn-secondary" @click="LimparFiltro"> Limpar</button>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div>
      <span>Pesquisar</span>
      <div class="input-group mb-3">
  <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
  <input :value="fltPalavrasChaves" @input="event => fltPalavrasChaves = event.target.value" class="form-control" placeholder="Pesquisar" aria-label="Pesquisar" />
</div>
    </div>
    <div><span>Tipo de Arcano: </span>
      <div>
      <span class=" ftr-badge badge  btn text-bg-secondary" :class="[store.fltArcano == 'maior' ? 'fativo' : '' ]" @click="Filtro('fltArcano', $event)">maior</span>
      <span class=" ftr-badge badge btn text-bg-secondary" :class="[store.fltArcano == 'menor' ? 'fativo' : '' ]" @click="Filtro('fltArcano', $event)">menor</span>
       <span class=" ftr-badge badge btn text-bg-secondary" :class="[store.fltArcano == 'menor corte' ? 'fativo' : '' ]" @click="Filtro('fltArcano', $event, 'menor corte')">corte</span>
    </div>
  </div>
  <br>
    <div><span>Numero: </span>
      <div>
        
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n0n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n0n')">0</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n1n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n1n')">1</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n2n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n2n')">2</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n3n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n3n')">3</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n4n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n4n')">4</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n5n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n5n')">5</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n6n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n6n')">6</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n7n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n7n')">7</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n8n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n8n')">8</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n9n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event,'n9n')">9</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n10n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n10n')">10</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n11n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n11n')">11</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n12n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n12n')">12</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n13n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n13n')">13</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n14n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n14n')">14</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n15n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n15n')">15</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n16n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n16n')">16</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n17n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n17n')">17</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n18n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n18n')">18</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n19n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n19n')">19</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n20n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n20n')">20</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNumero == 'n21n' ? 'fativo' : '' ]" @click="Filtro('fltNumero', $event, 'n21n')">21</span>
    </div>
  </div>
  <br>
    <div><span>Naipes: </span>
      <div>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNaipe == 'bastões' ? 'fativo' : '' ]" @click="Filtro('fltNaipe', $event)">bastões</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNaipe == 'copas' ? 'fativo' : '' ]" @click="Filtro('fltNaipe', $event)">copas</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNaipe == 'espadas' ? 'fativo' : '' ]" @click="Filtro('fltNaipe', $event)">espadas</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltNaipe == 'pantaculos' ? 'fativo' : '' ]" @click="Filtro('fltNaipe', $event)">pantaculos</span>
    </div>
  </div>
  <br>
    <div><span> Relação Cabala: </span>
      <div>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Kether' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Kether</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Chokmah' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Chokmah</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Binah' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Binah</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Chesed' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Chesed</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Geburah' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Geburah</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Tipheret' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Tipheret</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Netzach' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Netzach</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Hod' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Hod</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Yesod' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Yesod</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltCabala == 'Malkuth' ? 'fativo' : '' ]" @click="Filtro('fltCabala', $event)">Malkuth</span>
    </div>
  </div>
  <br>
    <div><span>Relação Planeta: </span>
      <div>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Saturno' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Saturno</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Jupiter' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Jupiter</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Marte' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Marte</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Sol' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Sol</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Venus' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Venus</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Mercurio' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Mercurio</span>
        <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltPlaneta == 'Lua' ? 'fativo' : '' ]" @click="Filtro('fltPlaneta', $event)">Lua</span>
    </div>
  </div>
  <br>
    <div><span>Relação Signo: </span>
      <div class="">
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Áries' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Áries</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Touro' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Touro</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Gêmeos' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Gêmeos</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Câncer' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Câncer</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Leão' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Leão</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Virgem' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Virgem</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Libra' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Libra</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Escorpião' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Escorpião</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Sagitário' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Sagitário</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Capricórnio' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Capricórnio</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Aquário' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Aquário</span>
      <span class=" ftr-badge badge rounded-pill btn text-bg-secondary" :class="[store.fltSigno == 'Peixes' ? 'fativo' : '' ]" @click="Filtro('fltSigno',$event)"> Peixes</span>
  
    </div>
  </div>
  <br>
  <!-- <div>
      <span>mundo: </span>
      <div>
       </div>
  </div> -->
  </div>
</div>
    <div class="container">
      <!-- <pre>{{ store.deck }}</pre> -->
      <div class="row">

        <div class="carta col-md-3 col-sm-6" v-for="(carta, index) in filteredData" :key="index" @click="Descricao(carta)">
            <div class="numero text-center">
            {{ carta.numero.slice(1,-1) }}
          </div>
          <img loading="lazy" :src="imgpath+carta.img" alt="" class="img-fluid">
          <div class="nome text-center">
            {{ carta.nome }}
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<style scoped>
.btn-fechar{
  position:absolute;
   cursor: pointer;
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
.btn-abrir img, .btn-fechar img{
    position: absolute;
    top: 5px;
    left: 1px;
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
