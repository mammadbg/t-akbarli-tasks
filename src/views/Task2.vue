<template>
  <div class="todo">
    <h1 class="todo__title text-primary">Todo app</h1>
    <div class="todo__create">
      <h4 class="w-100">Enter name and Create todo</h4>
      <input type="text" class="todo__create--name" v-model="newTodoName" />
      <button
        class="btn"
        @click="createTodo()"
        :disabled="!newTodoName"
        :class="{ 'btn-primary': newTodoName }"
      >
        Create task
      </button>
    </div>
    <div class="todo__list">
      <div class="row">
        <div
          class="col-12 col-sm-2 col-md-4 col-lg-3"
          v-for="(todo, index) in todoList"
          :key="index + Math.random()"
        >
          <div class="todo__list--item">
            <div class="image">
              <img src="../assets/post-image.jpeg" alt="" />
            </div>
            <p class="name">{{ todo.name }}</p>
            <button class="btn btn-danger" @click="removeTodo(todo.id)">
              Delete todo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoName: "",
      todoList: [],
    };
  },
  methods: {
    createTodo() {
      this.todoList.push({
        name: this.newTodoName,
        id: `todoItem${Math.random().toString(16).slice(2)}`,
      });
    },
    removeTodo(id) {
      var index = this.todoList.findIndex(function (o) {
        return o.id === id;
      });
      if (index !== -1) this.todoList.splice(index, 1);
      console.log(this.todoList);
    },
  },
};
</script>

<style></style>
