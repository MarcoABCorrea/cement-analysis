import CompressiveStrengthPanel from "@/components/CompressiveStrengthPanel.vue";
import { shallowMount } from "@vue/test-utils";

describe("CompressiveStrengthPanel.vue", () => {
  it("should emit the button click to parent component", () => {
    const response = [
      {
        "recorded-at": "2019-06-06T06:00:00",
        "sample-id": "2019-06-00646",
        "comp. str. 2d": 49,
        "comp. str. 7d": null,
        "comp. str. 28d": 74.7,
        "d'": 11,
        CO2: 0.6,
        CaO: 64.7,
        MgO: 1.05,
        Al2O3: 4.3,
        SO3: 3.64,
        K2O: 0.53,
        Na2O: 0.25,
        "Cl-": 0.043,
        TiO2: 0.21,
        MnO: 0.06,
        C3S: 62.3,
        C2S: 13.6,
        Calcite: null,
      },
      {
        "recorded-at": "2019-06-04T06:00:00",
        "sample-id": "2019-06-00349",
        "comp. str. 2d": 50.6,
        "comp. str. 7d": null,
        "comp. str. 28d": 73,
        "d'": 10.8,
        CO2: 0.3,
        CaO: 64.8,
        MgO: 1.02,
        Al2O3: 4.36,
        SO3: 3.69,
        K2O: 0.53,
        Na2O: 0.25,
        "Cl-": 0.056,
        TiO2: 0.22,
        MnO: 0.06,
        C3S: 60.9,
        C2S: 16.3,
        Calcite: null,
      },
    ];

    const wrapper = shallowMount(CompressiveStrengthPanel);
    wrapper.vm.setChartData(response);
  });
});
