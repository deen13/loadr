import { mount } from "@vue/test-utils"
import WeightPreview from "../WeightPreview"

describe("WeightPreview", () => {
  it("renders a 70 kg squat correctly", () => {
    const wrapper = mount(WeightPreview, {
      propsData: {
        weight: 70,
        squat: true
      },
    })

    expect(wrapper.html()).toContain('<div class="kg25 weight plate plate-kg25"></div>')
  })

  it("renders a 140kg dip correctly", () => {
    const wrapper = mount(WeightPreview, {
      propsData: {
        weight: 140,
        squat: false
      },
    })

    expect(wrapper.html()).toBe("<div>" +
      "<div class=\"kg25 weight plate plate-kg25\"></div>" +
      "<div class=\"kg25 weight plate plate-kg25\"></div>" +
      "<div class=\"kg25 weight plate plate-kg25\"></div>" +
      "<div class=\"kg25 weight plate plate-kg25\"></div>" +
      "<div class=\"kg25 weight plate plate-kg25\"></div>" +
      "<div class=\"kg15 weight plate plate-kg15\"></div>" +
      "</div>")
  })
})
