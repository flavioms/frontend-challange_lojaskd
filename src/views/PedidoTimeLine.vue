<template>
  <section class="pedido-timeline">
    <ul>
      <li class="step complete">
        <p class="date">20 Dez 2017</p>
        <font-awesome-icon class="icon check" icon="check-circle" />
        <p class="status">Novo</p>
        <a href="" class="info check"><font-awesome-icon icon="info-circle" /></a>
      </li>

      <li class="step complete">
        <p class="date">23 Dez 2017</p>
        <font-awesome-icon class="icon check" icon="check-circle" />
        <p class="status">Aprovado</p>
        <a href="" class="info check"><font-awesome-icon icon="info-circle"/></a>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </li>

      <li class="step progress">
        <p class="date">26 Dez 2017</p>
        <font-awesome-icon class="icon check" icon="clock" />
        <p class="status">Acompanhando seus móveis</p>
        <a href="" class="info check"><font-awesome-icon icon="info-circle" /></a>
      </li>

      <li class="step next">
        <p class="date"></p>
        <font-awesome-icon class="icon check" icon="circle" />
        <p class="status">Recebido</p>
        <a href="" class="info check"><font-awesome-icon icon="info-circle" /></a>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

.pedido-timeline{
  padding: 0 15px;
  margin: 15px 0;
  box-shadow: 1px 2px 10px 0px rgba( 0, 0, 0, 0.16 );
  border-radius: 3px;
  border-bottom: inset 5px #ffd740; 
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
}

.step{
  display: grid;
  align-items: center;
  position: relative;
  min-height: 100px;
  margin: 15px 0;
  background: #ffffff;
  grid-template-columns: 20% 10% auto 10%;
  grid-template-areas: 
  "date icon status info"
  ". . text text";

  >.date{
    grid-area: date;
    font-size: 1.2em;
    color: #bdbdbd;
  }
  >.icon{
    grid-area: icon;
    font-size: 2em;
    margin-left: 10px;
    z-index: 3;
    background: #ffffff;
  }
  >.status{
    grid-area: status;
    font-size: 1.2em;
    color: #757575;
    text-align: left;
    margin-left: 15px;
  }
  >.info{
    grid-area: info;
    font-size: 1.2em;
  }
  >.text{
    grid-area: text;
    text-align: left;
    margin-left: 15px;
    color: #bdbdbd;
    font-size: .8em;
  }
}

.step:not(:first-child){
  >.status::after{
    content: '';
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    top: -80%;
    left: 27%;
    width: 2px;
    bottom: 80%;
    background-color:black;
  }
}

.step.complete{
  >.icon {
    color:#039BE5;
  }
  .info{
    color: #039BE5;
  }
  >.status::after{
    background-color:#039BE5;
  }
}

.step.progress{
  >.icon {
    color:#4CAF50;
  }
  .info{
    color: #4CAF50;
  }
  >.status::after{
    background-color:#4CAF50;
  }
}

.step.next{
  >.icon {
    color:#BDBDBD;
  }
  .info{
    color: #BDBDBD;
  }
  >.status::after{
    background-color:#BDBDBD;
  }
}

</style>
