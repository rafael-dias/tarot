import{_ as C,s as g,c as r,w as _,v as h,a as s,F as m,r as f,n as x,t as i,b as p,o,f as b,p as k,d as y}from"./index-a3ea9fc8.js";const M={data(){return{store:g,imgpath:"public/imgs/",cartas:[],carta_certa:{},respondeu:!1,palavras_chave:[],resposta_atual:0,resultado:null,pontos:0,resultado_certas:[],resultado_erradas:[]}},computed:{},created(){this.CartasAleatorias()},methods:{PalavrasChaves(){var a=0,n=this.store.palavras_chaves[this.carta_certa.id].palavras_chaves.length,u=[],c=[];for(let e=0;e<3;e++){for(a=Math.floor(Math.random()*(n-0)+0);u.indexOf(a)!=-1;)a=Math.floor(Math.random()*(n-0)+0);u[e]=a,c[e]=this.store.palavras_chaves[this.carta_certa.id].palavras_chaves[a]}this.palavras_chave=c},CartasAleatorias(){var a=0,n=this.store.deck.length,u=[],c=[],e=0;for(let t=0;t<3;t++){for(e=Math.floor(Math.random()*(n-a)+a);u.indexOf(e)!=-1;)e=Math.floor(Math.random()*(n-a)+a);u[t]=e,c[t]=this.store.deck[e],c[t].certa=!1}var d=Math.floor(Math.random()*(3-0)+0);c[d].certa=!0,this.cartas=c,this.carta_certa=c[d],this.PalavrasChaves()},Resposta(a){this.respondeu||(a==this.carta_certa.id?(this.resultado=!0,this.pontos+=1,this.resultado_certas.push(a)):(this.resultado_erradas.push(a),this.resultado=!1),this.resposta_atual+=1),this.respondeu=!0},ProximaCarta(){this.CartasAleatorias(),this.respondeu=!1,this.resultado=null},Recomecar(){this.resposta_atual=0,this.pontos=0,this.resultado=null,this.respondeu=!1,this.resultado_certas=[],this.resultado_erradas=[],this.CartasAleatorias()}}},l=a=>(k("data-v-1d16ea03"),a=a(),y(),a),w={key:0,class:"tarot"},R={class:"container d-flex justify-content-center mb-5"},A={class:"row"},P=["onClick"],S=["src"],q={key:0,class:"nome text-center"},z={key:1,class:"nome text-center"},I={class:"container d-flex justify-content-center"},N={class:"row"},V=["textContent"],j=l(()=>s("br",null,null,-1)),B=l(()=>s("br",null,null,-1)),Q=[j,B],D={class:"campo-palavras-chave text-center"},E=l(()=>s("h2",null,"Qual carta corresponde?",-1)),F={class:"palavras-chave"},O={class:"container d-flex justify-content-center text-center"},L={class:"row"},T={style:{"margin-top":"200px"}},G=l(()=>s("br",null,null,-1)),H=l(()=>s("p",null,"Cartas que vc acertou:",-1)),J={class:"palavras-chave"},K={key:0},U=l(()=>s("br",null,null,-1)),W=l(()=>s("br",null,null,-1)),X=l(()=>s("p",null,"Cartas que vc errou:",-1)),Y={class:"palavras-chave"},Z={key:0},$=l(()=>s("br",null,null,-1)),ee=l(()=>s("br",null,null,-1)),se=l(()=>s("br",null,null,-1));function te(a,n,u,c,e,d){return e.cartas[0].nome?(o(),r("div",w,[_(s("div",null,[s("div",R,[s("div",A,[(o(!0),r(m,null,f(e.cartas,(t,v)=>(o(),r("div",{class:"carta col-4",onClick:ae=>d.Resposta(t.id)},[s("img",{loading:"lazy",src:e.imgpath+t.img,alt:"",class:x(["img-fluid mb-2",[e.carta_certa.id!=t.id&&e.resultado!=null?"cartas-erradas":"",e.carta_certa.id==t.id&&e.resultado!=null?"carta-certa":""]])},null,10,S),t.tipo=="maior"?(o(),r("div",q,[s("p",null,i(e.store.algRomanos[Number(t.numero.slice(1,-1))]),1),s("h6",null,i(t.nome),1)])):p("",!0),t.tipo!="maior"?(o(),r("div",z,[_(s("p",null,i(t.numero.slice(1,-1)),513),[[h,t.numero!="nn"]]),s("h6",null,i(t.nome),1)])):p("",!0)],8,P))),256))])]),s("div",I,[s("div",N,[_(s("div",{class:x(["alert text-center",[e.resultado==!0?"alert-success":"alert-danger"]]),role:"alert",textContent:i(e.resultado==!0?"Acertou!":"Errou!")},null,10,V),[[h,e.resultado!=null]]),_(s("div",{class:"btn btn-info",onClick:n[0]||(n[0]=t=>d.ProximaCarta())},"Proxima Carta",512),[[h,e.respondeu==!0]]),_(s("div",null,Q,512),[[h,e.respondeu==!0]]),s("div",D,[E,(o(!0),r(m,null,f(e.palavras_chave,(t,v)=>(o(),r("label",F,"• "+i(t),1))),256))])])])],512),[[h,e.resposta_atual<10]]),_(s("div",null,[s("div",O,[s("div",L,[s("div",T,[s("h3",null," Você acertou "+i(e.pontos)+" de 10",1),G,H,(o(!0),r(m,null,f(e.resultado_certas,(t,v)=>(o(),r("label",J,[b(i(e.store.deck[t].nome)+" ",1),v<e.resultado_certas.length-1?(o(),r("span",K,", ")):p("",!0)]))),256)),U,W,X,(o(!0),r(m,null,f(e.resultado_erradas,(t,v)=>(o(),r("label",Y,[b(i(e.store.deck[t].nome)+" ",1),v<e.resultado_erradas.length-1?(o(),r("span",Z,", ")):p("",!0)]))),256)),$,ee,se,s("button",{class:"btn btn-secondary bs-dark",onClick:n[1]||(n[1]=t=>d.Recomecar())},"Recomeçar")])])])],512),[[h,e.resposta_atual==10]])])):p("",!0)}const oe=C(M,[["render",te],["__scopeId","data-v-1d16ea03"]]);export{oe as default};
