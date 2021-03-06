import { render, fireEvent, screen } from '@testing-library/react';

import Post from './Post';

describe('<Button />', () => {
  const loadPost = jest.fn();
  const props = {
    post: {
      error: null,
      loading: false,
      data: [],
    },
    loadPost,
  };

  afterEach(() => {
    loadPost.mockClear();
  });

  it("should render button title as 'Load Post'", () => {
    render(<Post {...props} />);

    expect(screen.getByTestId('button').textContent).toEqual('Load Post');
  });

  it('should render empty message', () => {
    render(<Post {...props} />);

    expect(screen.getByTestId('post-empty-message').textContent).toEqual('No data');
  });

  it("should render button title as 'Loading...'", () => {
    render(
      <Post post={{ ...props.post, loading: true }} loadPost={loadPost} />,
    );

    expect(screen.getByTestId('button').textContent).toEqual('Loading...');
  });

  it('should renders the post items', () => {
    const data = [{
      id: 1,
      title: 'The Title',
      body: 'The body',
    }];

    render(
      <Post post={{ ...props.post, data,  }} loadPost={loadPost} />,
    );

    expect(screen.getByText(/The Title/i)).toBeInTheDocument();
  });

  it('loadPost should be called', () => {
    render(<Post {...props} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(loadPost).toBeCalled();
  });
});
