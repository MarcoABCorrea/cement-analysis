import CompressiveStrengthPanel from "@/components/CompressiveStrengthPanel.vue";
import ScatterChart from "@/components/ScatterChart.vue";
import { shallowMount } from "@vue/test-utils";

describe("CompressiveStrengthPanel.vue", () => {
  it("should emit the button click to parent component", () => {
    const wrapper = shallowMount(CompressiveStrengthPanel);
    const button = wrapper.find("button");
    button.trigger("click");
    const chart = wrapper.find(ScatterChart);
    expect(chart.props()).toEqual({ msg: "message" });

    // const wrapper = mount(CompressiveStrengthPanel);
    // const data = { id: 1, id: 2 };
    // const buttonWrapper = mount(ButtonsSection, {
    //   propsData: { data },
    // });
    // wrapper.findComponent(buttonWrapper).vm.$emit("clicked");
    // expect(wrapper.find("<compressive-strength-panel/>").exists()).toBeTruthy();

    // expect(wrapper.html()).toContain("Compressive Strength");
  });
});
// describe("CompressiveStrengthPanel.vue", () => {
//   it("should emit the button click to parent component", () => {
//     expect(1).toBe(1);
//   });
// });
