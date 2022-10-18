<template>
  <div class="app">
    <my-button @btnClick="toggleModal" class="btn">Добавить</my-button>
    <my-table @sorting="sortRows" :headers="headers" :rows="sortedRows" />
    <my-modal v-if="isModalVisible">
      <my-form
        :options="options"
        @create="addNewRow"
        @closeModal="toggleModal"
      />
    </my-modal>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable'
import MyButton from '@/components/MyButton'
import MyModal from '@/components/MyModal'
import MyRow from '@/components/MyRow'
import MyForm from '@/components/MyForm'
export default {
  name: 'App',
  components: {
    MyTable,
    MyButton,
    MyModal,
    MyRow,
    MyForm
  },
  data () {
    return {
      rows: [],
      headers: [
        { id: '1', name: 'Имя', value: 'name' },
        { id: '2', name: 'Телефон', value: 'phone' }
      ],
      currentSortDir: 'asc',
      currentSort: 'name',
      isModalVisible: false
    }
  },
  computed: {
    sortedRows () {
      return [...this.rows].sort((a, b) => {
        let modifier = 1
        if (this.currentSortDir === 'desc') modifier = -1
        if (
          a[this.currentSort].toLowerCase() < b[this.currentSort].toLowerCase()
        ) {
          return -1 * modifier
        }
        if (
          a[this.currentSort].toLowerCase() > b[this.currentSort].toLowerCase()
        ) {
          return 1 * modifier
        }
        return 0
      })
    },
    options () {
      return this.getNestedData(this.rows)
    }
  },
  methods: {
    addNewRow (formItem) {
      if (formItem.parent === null) {
        this.rows.push(formItem)
      } else {
        this.rows.map(person => {
          this.searchCurrentNode(person, formItem)
        })
      }
      this.isModalVisible = false
    },
    searchCurrentNode (curNode, formItem) {
      if (curNode.id === formItem.parent) {
        curNode.children.push(formItem)
      }
      for (const node of curNode.children) {
        this.searchCurrentNode(node, formItem)
      }
    },
    sortRows (val) {
      this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      this.currentSort = val
    },
    toggleModal () {
      this.isModalVisible = !this.isModalVisible
    },
    getNestedData (data) {
      let result = []
      data.forEach(item => {
        const { name, id } = item
        result.push({ name, id })
        if (item.children) {
          result.push(...this.getNestedData(item.children))
        }
      })
      return result
    }
  },
  mounted () {
    this.rows = JSON.parse(localStorage.getItem('rows')) || []
  },
  updated () {
    localStorage.setItem('rows', JSON.stringify(this.rows))
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.btn {
  margin-bottom: 10px;
}
</style>
