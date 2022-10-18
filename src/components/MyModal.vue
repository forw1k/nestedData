<template>
  <div class="my-modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-modal'
}
</script>

<style>
.my-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(206, 206, 206, 0.5);
}
</style>
