<template>
    <li class="todo-item">
      <div class="view">
        <!-- toggles for todo -->
        <!-- <input class="toggle"
          type="checkbox"
          :checked="todo.done"
          @change="toggleTodo(todo)"> -->
          <!-- el-icon-check -->
        <i class="el-icon-circle-check toggle" v-show="todo.done" @click="toggleTodo(todo)"></i>
        <i class="el-icon-circle-check-outline toggle" v-show="!todo.done" @click="toggleTodo(todo)"></i>
        <!-- 编辑按钮 -->
        <i class="el-icon-more edit" @click="editing = true"></i>
        <!-- <el-button type="primary" class="edit" icon="el-icon-more" circle @click="editing = true"></el-button> -->
        <!-- todo文字显示区域 -->
        <div class="thetext" v-text="todo.text"></div>
        <!-- 任务删除按钮 -->
        <i class="el-icon-close destroy" @click="removeTodo(todo)"></i>
      </div>

      <el-dialog title="Edit Todo" :visible.sync="editing">
        <el-input placeholder="Please input" v-model="todo.text"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelEdit()">Cancel</el-button>
          <el-button type="primary" @click="doneEdit()">Confirm</el-button>
        </span>
      </el-dialog>      
    </li>
  <!-- </div> -->
</template>

<style scoped lang="less">
.todo-item {
  border-radius: 4px;
  line-height: 50px;
  border-bottom: dashed gray;
}
.view {
  position: relative;
  height: 50px;
}
.destroy {
  font-size: 26px;
  color: red;
  position: absolute;
  top: 12px;
  right: 0;
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
  left: 40px;
  top: 12px;
}
.thetext {
  position: absolute;
  top: 0;
  right: 40px;
  left: 80px;
  bottom: 0;
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

  private toggleTodo(todo: any): void {
    this.$store.dispatch('toggleTodo', todo);
  }

  private removeTodo(todo: any): void {
    this.$store.dispatch('removeTodo', todo);
  }

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
