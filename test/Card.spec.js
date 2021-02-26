import Card from "@/components/Card.vue";
import { shallowMount } from "@vue/test-utils";

describe("Card.vue", () => {
  it("should render the correct title", () => {
    const title = "Analysis";
    const wrapper = shallowMount(Card, {
      propsData: { title },
    });
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toEqual("Analysis");
  });
});
