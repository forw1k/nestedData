<template>
  <div class="my-table">
    <div class="my-table__head">
      <div
        @click="sortByTitle(header.value)"
        v-for="header in headers"
        :key="header.id"
        class="my-table__title"
      >
        {{ header.name }}
      </div>
    </div>
    <my-row :rows="rows" />
  </div>
</template>

<script>
import MyRow from '@/components/MyRow'
export default {
  name: 'my-table',
  components: {
    MyRow
  },
  props: {
    rows: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    sortByTitle (header) {
      this.$emit('sorting', header)
    }
  }
}
</script>

<style>
.my-table {
  width: 600px;
  display: flex;
  flex-direction: column;
}
.my-table__head {
  display: flex;
  width: 100%;
}
.my-table__title {
  width: 100%;
  padding: 10px;
  border: 1px solid #595959;
  transition: 0.3s;
  cursor: pointer;
}
.my-table__title:hover {
  background: #cecece;
}
.my-table__body {
  display: flex;
  flex-direction: column;
}
.my-table__row {
  display: flex;
  width: 100%;
}
</style>
