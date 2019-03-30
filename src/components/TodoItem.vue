<template>
    <li class="todo-item">
      <div class="view" v-show="!editing">
        <!-- toggles for todo -->
        <input class="toggle"
          type="checkbox"
          :checked="todo.done"
          @change="toggleTodo(todo)">
        <!-- todo文字显示区域 -->
        <div class="thetext" v-text="todo.text" @dblclick="editing = true"></div>
        <!-- 任务删除按钮 -->
        <el-button  class="destroy" type="danger" icon="el-icon-delete" circle @click="removeTodo(todo)"></el-button>
      </div>
      <!-- 编辑状态下输入框 -->
      <input class="edit"
        v-show="editing"
        :value="todo.text"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        @blur="doneEdit">
    </li>
  <!-- </div> -->
</template>

<style scoped lang="less">
.todo-item {
  border-radius: 4px;
  height: 50px;
  line-height: 50px;
  border-bottom: dashed gray;
}
.view {
  position: relative;
  height: 50px;
}
.destroy {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  border: none;
}
.thetext {
  position: absolute;
  top: 0;
  right: 40px;
  left: 40px;
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
  private doneEdit(e: any): void {
    const value = e.target.value.trim();
    const { todo } = this;
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
  private cancelEdit(e: any): void {
    e.target.value = this.todo.text;
    this.editing = false;
  }
}
</script>
