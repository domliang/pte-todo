<template>
    <li class="todo-item">
      <div class="view">
        <!-- toggles for todo -->
        <i class="el-icon-circle-check toggle" v-show="todo.done" @click="toggleTodo(todo)"></i>
        <i class="el-icon-circle-check-outline toggle" v-show="!todo.done" @click="toggleTodo(todo)"></i>
        <!-- todo文字显示区域 -->
        <div class="thetext" v-bind:class="{done: todo.done}" v-text="todo.text"></div>
        <!-- 编辑按钮 -->
        <i class="el-icon-more edit" @click="editing = true"></i>
      </div>

      <el-dialog title="Edit Todo" :visible.sync="editing">
        <el-input placeholder="Please input" v-model="todo.text"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="removeTodo(todo)">delete</el-button>
          <hr>
          <el-button @click="cancelEdit()">Cancel</el-button>
          <el-button type="primary" @click="doneEdit()">Confirm</el-button>
        </span>
      </el-dialog>      
    </li>
  <!-- </div> -->
</template>

<style scoped lang="less">
.todo-item {
  line-height: 50px;
  border-bottom: dashed gray;
}
.view {
  position: relative;
  height: 50px;
}
.toggle {
  font-size: 26px;
  color: dodgerblue;
  position: absolute;
  left: 0;
  top: 12px;
}
.edit {
  font-size: 26px;
  position: absolute;
  top: 12px;
  right: 0;
}
.thetext {
  position: absolute;
  top: 0;
  right: 40px;
  left: 40px;
  bottom: 0;
}
.thetext.done {
  text-decoration:line-through;
  color: gray;
}
</style>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    todo: String,
  },
})
export default class TodoItem extends Vue {
  @Prop() public todo: any;

  // 编辑状态
  private editing: boolean = false;

  // actions 由于没有使用过class-components的mapactions 所以手动
  // 状态切换
  private toggleTodo(todo: any): void {
    this.$store.dispatch('toggleTodo', todo);
  }

  // 删除
  private removeTodo(todo: any): void {
    this.$store.dispatch('removeTodo', todo);
  }

  // 编辑
  private editTodo({todo, value}: {todo: any, value: any}): void {
    this.$store.dispatch('editTodo', {
        todo,
        value,
      });
  }

  // actions end

  // 编辑todo
  private doneEdit(): void {
    const { todo } = this;
    const value = todo.text;
    if (!value) {
      this.removeTodo(todo);
    } else if (this.editing) {
      this.editTodo({
        todo,
        value,
      });
      this.editing = false;
    }
  }

  // 取消编辑状态
  private cancelEdit(): void {
    this.editing = false;
  }
}
</script>
