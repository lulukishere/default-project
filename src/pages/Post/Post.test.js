import { shallow } from 'enzyme';

import Post from './Post';
import PostItem from 'components/PostItem';
import Button from 'components/Button';

describe('<Post />', () => {
  const loadPost = jest.fn();
  const props = {
    post: {
      error: null,
      loading: false,
      data: [],
    },
    loadPost,
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Post {...props} />);
  });

  afterEach(() => {
    loadPost.mockClear();
  });

  it("should render button title as 'Load Post'", () => {
    expect(
      wrapper.find(Button).dive().find('[data-testid="button"]').text(),
    ).toEqual('Load Post');
  });

  it('should render empty message', () => {
    expect(wrapper.find('[data-testid="post-empty-message"]').text()).toEqual(
      'No data',
    );
  });

  it("should render button title as 'Loading...'", () => {
    wrapper.setProps({ post: { ...props.post, loading: true } });

    expect(
      wrapper.find(Button).dive().find('[data-testid="button"]').text(),
    ).toEqual('Loading...');
  });

  it('should renders the post items', () => {
    const data = [
      {
        id: 1,
        title: 'The Title',
        body: 'The body',
      },
    ];

    wrapper.setProps({ post: { ...props.post, data } });

    expect(
      wrapper.find(PostItem).dive().find({ children: 'The Title' }).length,
    ).toEqual(1);
  });

  it('loadPost should be called', () => {
    wrapper
      .find(Button)
      .dive()
      .find('[data-testid="button"]')
      .simulate('click');

    expect(loadPost).toBeCalled();
  });
});
