<template>
  <div>
    <div v-for="row in rows" :key="row.id" class="my-table__parent">
      <div class="my-table__inner">
        <div
          :class="{
            'my-table__cell_nested': row.children.length || row.parent
          }"
          class="my-table__cell"
        >
          {{ row.name }}
        </div>
        <div class="my-table__cell">{{ row.phone }}</div>
      </div>
      <my-row
        v-if="row.children"
        class="my-table__children"
        :rows="row.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-row',
  props: {
    rows: {
      type: Array
    }
  }
}
</script>

<style>
.my-table__children {
  padding-left: 1rem;
}
.my-table__cell {
  border: 1px solid #595959;
  transition: 0.3s;
  cursor: pointer;
}
.my-table__cell:hover {
  background: #cecece;
}
.my-table__inner {
  width: 100%;
  display: flex;
}
.my-table__cell:first-child {
  width: 100%;
  padding: 10px 10px 10px 20px;
}
.my-table__cell:last-child {
  width: 300px;
  padding: 10px;
  flex-shrink: 0;
}
.my-table__cell_nested {
  position: relative;
}
.my-table__cell_nested:before {
  position: absolute;
  content: "+";
  left: 5px;
  top: 30%;
  font-weight: bold;
}
</style>
