/*eslint linebreak-style: [2, "windows"]*/
<template>
    <div class="splash-screen">
      <img class="logo" alt="LojasKD logo" src="../assets/logo.png">
    </div>
</template>

<script>
export default {
  name: 'splash',
  methods: {
    load(el) {
      setTimeout(() => {
        el.$router.push('login');
      }, 3000);
    },
  },
  mounted() {
    this.load(this);
  },
};
</script>

<style lang="scss" scoped>
    .splash-screen{
        height: calc(100vh - 30px);
        width: 100vw;
        >.logo{
            width: 50%;
            position: relative;
            top: 40%;
            transform: translateY(-50%);
        }
    }
</style>
