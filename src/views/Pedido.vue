/*eslint linebreak-style: [2, "windows"]*/
<template>
  <main class="container">
    <TopNav titulo="LojasKD" subtitulo="www.lojaskd.com.br" :links="links"></TopNav>
    <div class="pedido">
      <PedidoCard :pedido="pedido"></PedidoCard>

      <PedidoNotificacao :msg="notificacao"></PedidoNotificacao>

      <PedidoTimeLine></PedidoTimeLine>
    </div>
    
  </main>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import PedidoCard from '@/views/PedidoCard.vue';
import PedidoNotificacao from '@/views/PedidoNotificacao.vue';
import PedidoTimeLine from '@/views/PedidoTimeLine.vue';

export default {
  name: 'pedido',
  components: {
    TopNav,
    PedidoCard,
    PedidoNotificacao,
    PedidoTimeLine

  },
  data() {
    return {
      notificacao: 'Acompanhamos cada detalhe da produção até a entrega de cada um dos seus móveis. Quer ver?',
      links: {
        link1: {
          url: '/',
          name: 'Login/Cadastro',
        },
        link2: {
          url: '/atendimento',
          name: 'Atendimento',
        },
        link3: {
          url: '/promocoes',
          name: 'Promoções',
        },
        link4: {
          url: '/sair',
          name: 'Sair',
        },
      },
      pedido: {
        status: 'Acompanhando seus móveis',
        numero: '11225589',
        produtos: [
          {nome: 'Mesa', quantidade: 1, preco: 385, nota: '', status: 'Com a transportadora', foto: 'https://cdn-fotos-s3.meumoveldemadeira.com.br/fotos-moveis/foto-completa-da-mesa-de-jantar-4-lugares-ape-nozes_album.jpg'},
          {nome: 'Cadeira', quantidade: 2, preco: 200, nota: '', status: 'Em produção', foto: 'https://www.cadeirasparaescritorio.ind.br/media/product/29b/cadeira-eames-dkr-4-pes-em-madeira-assento-estofado-amarelo-306.jpg'},
          {nome: 'Armário', quantidade: 1, preco: 800, nota: '', status: 'Item Entregue', foto:'https://cdnv2.moovin.com.br/elare/imagens/produtos/original/armario-2-portas-noblesse-1620x900-mobitec-moveis-9fd7870f4b321cb08c319e8495a0a13d.jpg'},
          {nome: 'Nicho 30x30', quantidade: 1, preco: 100, nota: '', status: 'Em produção', foto:'https://cdn-fotos-s3.meumoveldemadeira.com.br/fotos-moveis/nicho-colecoes-branco-giz-1_album.jpg'}
        ],
        data: '09/01/2017',
        pagamento: 'Cartão de crédito Mastercard',
        prazo: '00/00/2000 a 00/00/0000',
        endereco: 'Avenida Marechal Mário Guedes, 40 apto 192 Jaguaré 05348010 SÃO PAULO - SP'
      },
    };
  },
  
};
</script>

<style lang="scss" scoped>
.container{
    background-image: linear-gradient(to bottom, #0287cf 40%, rgba(255, 0, 0, 0) 0);
    box-sizing: border-box;
}
.container::before{
    content: ' ';
    background-color: #ffd740;
    position: absolute;
    left: 0;
    top: 0;
    height: 10px;
    width: 100%;
}

.pedido {
  padding: 0 15px;
}

</style>
