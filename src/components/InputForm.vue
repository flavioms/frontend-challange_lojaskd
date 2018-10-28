<template>
  <div class="form-group">
    <label class="form-label" :for="id">
      {{label}}
      <span >*</span>
    </label>
    <input
      :id="id"
      class="form-input"
      :name="name"
      :type="type"
      @focus="focus"
      @blur="blur"
      @input="$emit('input', $event.target.value)"
    />
    <span class="form-error" v-if="error">
      {{error}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  $_veeValidate: {
    value() {
      return this.$el.value;
    },
    name() {
      return this.name;
    },
  },
  props: {
    type: {
      type: String,
    },
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    value: {
      type: null,
    },
    error: {
      type: String,
    },
  },
  methods: {
    focus(event) {
      event.target.parentElement.classList.add('focused');
    },
    blur(event) {
      const inputValue = event.target.value;
      if (!inputValue) {
        event.target.classList.remove('filled');
        event.target.parentElement.classList.remove('focused');
      } else {
        event.target.classList.add('filled');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-group {
  position:relative;
  font-family: 'Lato', sans-serif;
}
.form-label {
  position: absolute;
  left: 0;
  top: 10px;
  color: #757575;
  background-color: #fff;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  >span{
    color: #e53935;
  }
}
.focused .form-label {
  transform: translateY(-125%);
  font-size: .9em;
  color: #89d0f3;
}
.form-input {
  position: relative;
  padding: 16px 0;
  width: 100%;
  outline: 0;
  border: 0;
  color: #757575;
  box-shadow: 0 -2px 0 0 #e5e5e5 inset;
  transition: box-shadow 150ms ease-out;
  &:focus {
    box-shadow: 0 -2px 0 0 #0288d1 inset;
  }
  &:invalid{
    box-shadow: 0 -2px 0 0 #e53935 inset;
  }
}
.form-input.filled {
  box-shadow: 0 -2px 0 0 #4caf50 inset;
}
.form-error{
  background-color: #e53935;
  color: #ffffff;
  border-radius: 3px;
  margin: 0 4em;
  display: inline-block;
  position: relative;
}
.form-error::before{
  content: '';
  border: solid;
  border-width: 10px 10px;
  border-color: transparent transparent #e53935 #e53935;
  position: absolute;
  left: 0;
  top: -1em;
}
</style>
