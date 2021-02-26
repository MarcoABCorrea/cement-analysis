import VButton from "@/components/VButton.vue";
import { shallowMount } from "@vue/test-utils";

describe("VButton.vue", () => {
  it("should render the correct title", () => {
    const text = "Click me";
    const wrapper = shallowMount(VButton, {
      propsData: { text },
    });
    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.find("button").text()).toEqual("Click me");
  });

  it("should emit click event", () => {
    const wrapper = shallowMount(VButton);
    wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
