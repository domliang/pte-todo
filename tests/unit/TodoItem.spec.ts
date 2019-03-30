import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/TodoItem.vue';

describe('TodoItem.vue', () => {
  it('renders props.msg when passed', () => {
    const todo = {
      id: 'id1',
      text: 'text1',
      done: false,
    };
    const wrapper = shallowMount(HelloWorld, {
      propsData: { todo },
      stubs: ['el-dialog', 'el-input', 'el-button'],
    });
    expect(wrapper.find('.thetext').text()).toMatch(todo.text);
  });
});
