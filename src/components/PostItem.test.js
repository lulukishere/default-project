import { render, fireEvent, screen } from '@testing-library/react';

import { PostItem } from 'components';

describe('<PostItem />', () => {
  const onClick = jest.fn();
  const Component = (
    <PostItem id={1} title="The Title" body="The body" onClick={onClick} />
  );

  afterEach(() => {
    onClick.mockClear();
  });

  it('should render title correctly', () => {
    render(Component);

    expect(screen.getByTestId('post-item-title').textContent).toEqual(
      'The Title',
    );
  });

  it('should render body correctly', () => {
    render(Component);

    expect(screen.getByTestId('post-item-body').textContent).toEqual(
      'The body',
    );
  });

  it('onClick should be called', () => {
    render(Component);

    fireEvent.click(screen.getByTestId('post-item-container'));
    expect(onClick).toBeCalledWith(1);
  });
});
