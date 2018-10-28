/*eslint linebreak-style: [2, "windows"]*/
<template>
  <main class="container">
    <img src="../assets/logo.png" alt="Logo da lojasKD" class="logo">
    <form action="" class="form" v-validate>
      <h1 class="title">Acompanhar Pedido</h1>
      <InputForm
        class="input"
        id="pedido"
        name="pedido"
        label="Número do Pedido"
        type="text"
        v-model="pedido.numero"
        v-validate="'required'"
        :error="errors.first('pedido')"
      />
      <InputForm
        class="input"
        id="cpf"
        name="CPF"
        label="CPF ou CNPJ"
        type="text"
        v-model="pedido.cpf"
        v-validate="'required'"
        :error="errors.first('CPF')"
      />
      <button type="submit" class="button">Acompanhar</button>
      <a href="http://www.lojaskd.com.br" class="link">LojasKD.com.br</a>
    </form>
  </main>
</template>
<script>
import InputForm from '@/components/InputForm.vue';

export default {
  name: 'login',
  components: {
    InputForm,
  },
  data() {
    return {
      pedido: {
        numero: '',
        cpf: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .container{
    height: calc(100vh - 30px);
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0) 35%, #0287cf 0);

    >.logo{
      margin: 30px 0;
      max-width: 200px;
    }

    @media screen and (max-width: 812px) {
      >.form{
        margin: 0 15px;
      }
    }

    @media screen and (min-width: 812px) {
      >.form{
        margin: 0 30%;
      }
    }

    >.form{
      background-color: #ffffff;
      padding: 35px 15px;
      border-radius: 3px;
      box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.16);
      position: relative;

      >.title{
        font-size: 1.5em;
        text-align: left;
        padding: 10px 11px;
        color: #0288d1;
      }

      >.title:before{
        content: '';
        border-style: solid;
        border-width: 1em 2px;
        border-color: #0288d1;
        position: absolute;
        width: 0;
        height: 0;
        left: 0;
        top: 32px;
      }

      >.input{
        margin: 35px 0;
      }

      >.button{
        display: block;
        width: 100%;
        border: none;
        border-radius: 3px;
        background-color: #0288d1;
        color: white;
        padding: 12px 90px;
        margin-bottom: 18px;
        font-family: Arial;
        font-size: .9em;
        letter-spacing: normal;
        box-shadow: 0px 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      >.link{
        font-family: Arial;
        font-size: 12px;
        padding: 35px 0;
        color: #03a9f4;
      }
    }
  }

</style>

