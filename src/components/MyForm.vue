<template>
  <div class="my-form">
    <div class="my-form__head">
      <div class="my-form__title">Добавление пользователя</div>
      <div @click="closeForm" class="my-form__close">✖</div>
    </div>
    <form @submit.prevent class="my-form__body">
      <div class="my-form__item">
        <label for="name" class="my-form__label">
          Имя:
        </label>
        <input
          :value="form.name"
          @input="setName"
          type="text"
          id="name"
          class="my-form__input"
        />
      </div>
      <div class="my-form__item">
        <label for="phone" class="my-form__label">
          Телефон:
        </label>
        <input
          v-mask="'+7 ### ### ## ##'"
          :value="form.phone"
          @input="setPhone"
          type="text"
          id="phone"
          class="my-form__input"
        />
      </div>
      <div class="my-form__item">
        <label for="boss" class="my-form__label">
          Начальник:
        </label>
        <select @change="setOption" id="boss" class="my-form__select">
          <option></option>
          <option
            v-for="option in options"
            :key="option.id"
            :value="option.id"
            class="my-form__option"
            >{{ option.name }}</option
          >
        </select>
      </div>
      <div class="my-form__item">
        <my-button @btnClick="createNewOne">Сохранить</my-button>
      </div>
    </form>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton'

export default {
  name: 'my-form',
  components: {
    MyButton
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      form: {
        name: '',
        phone: '',
        id: '',
        parent: null,
        children: []
      }
    }
  },
  methods: {
    createNewOne () {
      this.form.id = Date.now().toString()
      if (!this.name && !this.phone) {
        this.$emit('create', this.form)
        this.form = {
          name: '',
          phone: '',
          id: '',
          children: []
        }
      }
    },
    setName (e) {
      this.form.name = e.target.value
    },
    setPhone (e) {
      this.form.phone = e.target.value
    },
    setOption (e) {
      this.form.parent = e.target.value
    },
    closeForm () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style>
.my-form {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  width: fit-content;
}
.my-form__item {
  display: flex;
}
.my-form__item:not(:last-child) {
  margin-bottom: 20px;
}
.my-form__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}
.my-form__form {
  display: flex;
  flex-direction: column;
}
.my-form__label {
  min-width: 100px;
  word-wrap: break-word;
  margin-right: 10px;
}
.my-form__input {
  width: 100%;
}
.my-form__select {
  width: 100%;
}
.my-form__close {
  cursor: pointer;
}
</style>
