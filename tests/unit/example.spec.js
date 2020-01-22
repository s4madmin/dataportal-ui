import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AnnotationAnalysis from '../views/AnnotationAnalysis.vue'

describe('AnnotationAnalysis.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Test Message'
    const wrapper = shallowMount(AnnotationAnalysis, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
