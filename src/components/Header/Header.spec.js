import Vue from 'vue';
import { mount } from '@vue/test-utils'
import {it} from 'vitest';
import HeaderComponent from './index.vue';
import router from "../../router"

describe('HeaderComponent', () => {
  it('header must always be the same', async () => {
    router.push("/")
    await router.isReady()
    const wrapper = mount(HeaderComponent, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})