<template>
  <div class="home">
    <input
      placeholder="New Task"
      @keyup.enter="addTodo"
      autofocus
      autocomplete="off"/>
    <ul class="pte-todolist">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState( { todos: (state: any) => state.todos } ),
  },
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  private todo = {
    done: true,
    text: 'test',
    id: '1',
  };

  public addTodo(e: any) {
    const text = e.target.value;
    if (text.trim()) {
      this.$store.dispatch('addTodo', text);
    } else {
      this.$store.dispatch('addTodo', 'New Task');
    }
    e.target.value = '';
  }

}
</script>
