import { shallow } from  "enzyme";
import  App  from  "./App";

describe("<App/>", () => {
	it("should render correctly", () => {
		const  wrapper = shallow(<App  />);
		expect(wrapper).toHaveLength(1);
	});
});
