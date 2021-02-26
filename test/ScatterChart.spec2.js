// import sinon from 'sinon';
import CompressiveStrengthPanel from "@/components/CompressiveStrengthPanel.vue";
import { mount } from "@vue/test-utils";

describe("ScatterChart.vue", () => {
  it("should render the chart", () => {
    const chartData = {
      datasets: [
        {
          label: "2 days",
          data: [
            {
              x: "2019-10-10T05:00:00",
              y: 49.3,
            },
            {
              x: "2019-08-01T08:00:00",
              y: 50,
            },
            {
              x: "2019-07-23T06:00:00",
              y: 48.9,
            },
          ],
        },
      ],
    };

    const wrapper = mount(CompressiveStrengthPanel, {
      propsData: { chartData },
    });
    expect(wrapper.contains("canvas")).toBe(true);
  });
});
