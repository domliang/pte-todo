<template>
  <div class="home">
    <div class="page-top">
      <el-button class="new-task-btn" type="primary" @click="showNew = true">New Task</el-button>
      <h3>Active : {{todoActivedCount}}/{{todoCount}}</h3>
    </div>
    <div class="empty-area" v-show="todoCount > 0">
      <el-button @click="toggleAll">toggle All</el-button>
      <el-button @click="clearCompleted">clear Completed</el-button>
    </div>
    <ul class="pte-todolist">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
    <div class="empty-area" v-show="todoCount === 0">
      <i class="el-icon-success done"></i>
      <h3 class="done-desc">every thing is done</h3>
    </div>
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
  .page-top {
    text-align: center;
  }
  .pte-todolist {
    list-style-type: none;
    padding: 0;
  }
  .empty-area {
    text-align: center;
    .done {
      font-size: 150px;
      color: darkgrey;
    }
    .done-desc {
      color: gray;
    }
  }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/TodoItem.vue';
import { mapState } from 'vuex';
import _ from 'lodash';

@Component({
  computed: {
    ...mapState( {
      todos: (state: any) => state.todos,
      todoCount: (state: any) => state.todos.length,
      todoActivedCount: (state: any) => {
        return _.chain(state.todos)
        .filter((todo: any) => !todo.done)
        .value().length;
      },
      } ),
  },
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  private showNew: boolean = false;
  private newTaskText: string = '';

  private clearCompleted(): void {
    this.$store.dispatch('clearCompleted');
  }

  private toggleAll(): void {
    this.$store.dispatch('toggleAll');
  }

  // new todo
  private addTodo(): void {
    const text = this.newTaskText.trim() || 'New Task';
    this.$store.dispatch('addTodo', text);
    this.showNew = false;
    this.newTaskText = '';
  }
}
</script>
