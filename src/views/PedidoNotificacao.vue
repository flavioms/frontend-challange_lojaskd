<template>
  <section class="pedido-notificacao">
    <figure class="logo-notificacao">
      <img src="../assets/chat_bubble.png" class="logo" alt="Ícone que representa mensagem">
    </figure>
    <article class="text-notificacao">
      <p class="text">
        {{msg}}
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'pedidoNotificacao',
  props: ['msg'],
}
</script>

<style lang="scss" scoped>
.pedido-notificacao{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    padding: 15px;
    margin: 15px 0;
    border-radius: 3px;
    background-image: linear-gradient(to right, #039be5 30%, #03a9f4 0);
    box-shadow: 3px 5px 20px 0px rgba( 0, 0, 0, 0.19 );
    >.logo-notificacao{
      max-width: 30%;
      >.logo{
        width: 50%;
        margin-right: 20px;
      }
    }
    >.text-notificacao{
      max-width: 70%;
      >.text{
        color: #ffffff;
        font-size: 1.1em;
      }
    }
}

.pedido-notificacao::before{
    content: '';
    border: solid;
    border-width: 10px 15px;
    border-color:  #03a9f4 #03a9f4 transparent transparent;
    position: absolute;
    right: 0;
    bottom: -15px;
}
</style>
