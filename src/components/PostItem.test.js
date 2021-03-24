// import { render, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import { PostItem } from 'components';

describe('<PostItem />', () => {
  const onClick = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PostItem id={1} title="The Title" body="The body" onClick={onClick} />,
    );
  });

  afterEach(() => {
    onClick.mockClear();
  });

  it('should render title correctly', () => {
    expect(wrapper.find('[data-testid="post-item-title"]').text()).toEqual(
      'The Title',
    );
  });

  it('should render body correctly', () => {
    expect(wrapper.find('[data-testid="post-item-body"]').text()).toEqual(
      'The body',
    );
  });

  it('onClick should be called', () => {
    wrapper.find('[data-testid="post-item-container"]').simulate('click');
    expect(onClick).toBeCalledWith(1);
  });
});
