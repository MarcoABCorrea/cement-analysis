// import sinon from 'sinon';

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

    // const spy = sinon.spy()
    // const wrapper = mount(ScatterChart, {
    //   propsData: {
    //     chartData: spy
    //   }
    // })
    // await wrapper.find('button.yes').trigger('click')

    // spy.should.have.been.calledWith('yes')

    // const wrapper = mount(ScatterChart, {
    //   propsData: {
    //     chartData: chartData,
    //   },
    // });

    // const wrapper = shallowMount(ScatterChart, {
    //   propsData: { chartData },
    // });
    // expect(wrapper.contains("canvas")).toBe(true);
    // expect(wrapper.find("canvas").exists()).toBeFalsy();
  });
});
