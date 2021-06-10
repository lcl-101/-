import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  const wrapper = mount(Counter);
  it("renders props.msg when passed", () => {
    expect(wrapper.text()).toMatchSnapshot();
  });
  it("cont++", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
