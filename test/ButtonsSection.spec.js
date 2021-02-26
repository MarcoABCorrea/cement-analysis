import ButtonsSection from "@/components/ButtonsSection.vue";
import { mount } from "@vue/test-utils";

describe("ButtonsSection.vue", () => {
  it("should render with 2 buttons", () => {
    const buttons = [
      {
        id: "1-52.5",
      },
      {
        id: "3-42.5",
      },
    ];
    const wrapper = mount(ButtonsSection, {
      propsData: { buttons },
    });
    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.findAll("button").length).toBe(2);
  });
});
