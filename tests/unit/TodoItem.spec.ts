import { shallowMount } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('TodoItem active item', () => {
    const todo = {
      id: 'id1',
      text: 'text1',
      done: false,
    };
    const wrapper = shallowMount(TodoItem, {
      propsData: { todo },
      stubs: ['el-dialog', 'el-input', 'el-button'],
    });
    expect(wrapper.find('.thetext').text()).toMatch(todo.text);
    expect(wrapper.find('.el-icon-circle-check').element.style.display).toMatch('none');
  });
  it('TodoItem done item', () => {
    const todo = {
      id: 'id2',
      text: 'text2',
      done: true,
    };
    const wrapper = shallowMount(TodoItem, {
      propsData: { todo },
      stubs: ['el-dialog', 'el-input', 'el-button'],
    });
    expect(wrapper.find('.thetext').text()).toMatch(todo.text);
    expect(wrapper.find('.el-icon-circle-check-outline').element.style.display).toMatch('none');
  });
});
