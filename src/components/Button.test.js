import { shallow } from 'enzyme';

import { Button } from 'components';

describe('<Button />', () => {
  const onClick = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button title="The Button" onClick={onClick} />)
  });

  afterEach(() => {
    onClick.mockClear();
  });

  it('should render the button', () => {
    expect(wrapper.find('[data-testid="button"]').length).toEqual(1);
  });

  it('onClick should be called', () => {
    wrapper.find('[data-testid="button"]').simulate('click');

    expect(onClick).toBeCalled();
  });
});
