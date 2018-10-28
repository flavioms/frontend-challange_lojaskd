/*eslint linebreak-style: [2, "windows"]*/
<template>
  <div>
    <a href="javascript:void(0);" @click="displayMenu = !displayMenu" class="menu" id="menu" title="menu">
      <font-awesome-icon icon="ellipsis-v" />
    </a>
    <ul class="menu-links" v-show="displayMenu">
      <li class="item">No site da LojasKD:</li>
      <li class="item" v-for="item in links" :key="item.url">
        <router-link class="link" :to="item.url">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      displayMenu: false,
    };
  },
  props: ['links'],
  methods: {
    documentClick(event) {
      let className = event.target.className;
      if(typeof className == 'string' && className != 'link'){
        this.displayMenu = false;
      }
    }
  },
  mounted: function () {
    this.$parent.$el.addEventListener('click', this.documentClick)
  },
};
</script>

<style lang="scss" scoped>
.menu{
  text-decoration: none;
  font-size: 1.5em;
  color: white;
}

.menu-links{
  position: absolute;
  right: 1em;
  top: 1em;
  border-radius: 6px;
  background-color: #ffffff;
  
  >.item{
    font-size: 1.2em;
    padding: 20px;
    >.link{
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  >.item:first-child{
    background-color: #ffd740;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 6px 6px 0 0;
  }
  >.item:last-child{
    border-top: solid rgba(0, 0, 0, 0.4) .5px;
  }
  >.item:hover:nth-child(n+2){
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
