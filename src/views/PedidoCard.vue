<template>
  <section class="pedido-card">
    <h1 class="titulo">Detalhes do pedido</h1>
    <div class="item-card">
      <h1 class="titulo">Status atual</h1>
      <p class="valor">{{pedido.status}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Nº do pedido</h1>
      <p class="valor">{{pedido.numero}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Produtos</h1>
      <p class="valor">{{total('quantidade', pedido.produtos)}}
        <span>
          <a href="javascript:void(0);"  @click="exibirLista = !exibirLista">
            <font-awesome-icon icon="caret-down" class="icon"/>
          </a>
        </span>
      </p>
      <dl class="lista-produtos" v-show="exibirLista">
        <dt class="item" v-for="item in pedido.produtos" :key="item.nome">
          {{`${item.quantidade} ${item.quantidade>1?'itens':'item'} ${item.status}`}}
        </dt>
      </dl>
    </div>
    <div class="item-card">
      <h1 class="titulo">Data do pedido</h1>
      <p class="valor">{{pedido.data}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Valor Total</h1>
      <p class="valor">R${{total('preco', pedido.produtos).toFixed(2)}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Forma de pagamento</h1>
      <p class="valor">{{pedido.pagamento}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Prazo de entrega</h1>
      <p class="valor">{{pedido.prazo}}</p>
    </div>
    <div class="item-card">
      <h1 class="titulo">Endereço de entrega</h1>
      <p class="valor">{{pedido.endereco}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pedidoCard',
  props: ['pedido'],
  data() {
    return {
      exibirLista: false,
    }
  },
  methods: {
    total(atributo, lista){
      if(atributo == 'preco'){
        return lista.reduce((prev, cur) => prev + cur.preco, 0);
      }else if(atributo == 'quantidade'){
        return lista.reduce((prev, cur) => prev + cur.quantidade, 0);  
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.pedido-card{
    padding: 15px;
    margin: 15px 0;
    box-shadow: 1px 2px 10px 0px rgba( 0, 0, 0, 0.16 );
    border-radius: 3px;
    border-bottom: inset 5px #ffd740;
    background-color: #ffffff;
    box-sizing: border-box;
    >.titulo{
        font-size: 1.1em;
        text-transform: uppercase;
        text-align: left;
        color: #bdbdbd;
        font-family: 'Lato' sans-serif;
        padding-bottom: 12px;
    }
    >.item-card{
        text-align: left;
        margin: 15px 0;

        >.titulo{
            color: #bdbdbd;
            font-family: 'Lato' sans-serif;
        }

        >.valor{
            color: #757575;
            font-size: 1.1em;
        }

        >.lista-produtos{
            background-color: #ebebeb;
            padding: 0.8em;
            >.item{
                color: #039be5;
                padding: 0.4em 0;
                font-family: 'Lato' sans-serif;
                font-size: 1.1em;
            }
        }
    }
    >.item-card:first-child{
        >.valor{
            color: #4caf50;
        }
    }
    .icon{
        margin-left: 12px;
        color: #039be5;
    }
}

</style>
