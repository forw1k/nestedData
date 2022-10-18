<template>
  <button @click="$emit('btnClick')" class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.my-btn {
  border: 1px solid #636363;
  padding: 5px 10px;
  background: #d8d8d8;
  width: fit-content;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}
.my-btn:hover {
  background: #ececec;
}
</style>
