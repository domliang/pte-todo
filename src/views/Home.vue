<template>
  <div class="home">
    <el-button type="primary" @click="showNew = true">New Task</el-button>
    <ul class="pte-todolist">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
    <el-dialog title="Edit Todo" :visible.sync="showNew">
      <el-input placeholder="Please input" v-model="newTaskText"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showNew = false">Cancel</el-button>
        <el-button type="primary" @click="addTodo(newTaskText)">Confirm</el-button>
      </span>
    </el-dialog> 
  </div>
</template>

<style lang="less" scoped>
  .pte-todolist {
    list-style-type: none;
    padding: 0;
  }
</style>


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
  private showNew: boolean = false;
  private newTaskText: string = '';

  public addTodo(e: any) {
    const text = this.newTaskText.trim() || 'New Task';
    this.$store.dispatch('addTodo', text);
    this.showNew = false;
    this.newTaskText = '';
  }
}
</script>
