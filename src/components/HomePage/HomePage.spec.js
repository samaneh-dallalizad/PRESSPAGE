import Vue from 'vue';
import { mount } from '@vue/test-utils'
import HomepageComponent from './index.vue';
import {it} from 'vitest';
import router from "../../router"

describe('HomepageComponent', () => {
  it('homepage must always be the same', async () => {
    router.push("/")
    await router.isReady()
    const wrapper = mount(HomepageComponent, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})