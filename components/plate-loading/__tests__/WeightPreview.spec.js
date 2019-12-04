import { mount } from '@vue/test-utils'
import WeightPreview from '../WeightPreview'

describe('WeightPreview', () => {
  it('renders a 70 kg squat correctly', () => {
    const onePlate = '<div class="kg25 weight plate plate-kg25"></div>'

    const wrapper = mount(WeightPreview, {
      propsData: {
        value: 70,
        squat: true
      }
    })

    expect(wrapper.find('#plates-wrapper').html()).toContain(onePlate)
  })

  it('renders a 140kg dip correctly', () => {
    const twentyFivePlate = '<div class="kg25 weight plate plate-kg25"></div>'
    const fifteenPlate =  '<div class="kg15 weight plate plate-kg15"></div>'


    const wrapper = mount(WeightPreview, {
      propsData: {
        value: 140,
        squat: false
      }
    })

    expect(wrapper.find('#plates-wrapper').html()).toContain(fifteenPlate)
    expect(wrapper.find('#plates-wrapper').html()).toContain(twentyFivePlate)
  })

  it('renders the textual kg value correctly', () => {
    const wrapper = mount(WeightPreview, {
      propsData: {
        value: 140,
        squat: false
      }
    })

    expect(wrapper.find('#textual').text()).toEqual('140 Kilogramm')
  })

  it('renders double numbers in the german format', () => {
    const wrapper = mount(WeightPreview, {
      propsData: {
        value: 24.5,
        squat: false
      }
    })

    expect(wrapper.find('#textual').text()).toEqual('24,5 Kilogramm')
  })
})
