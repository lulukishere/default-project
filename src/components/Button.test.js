import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from 'components';

describe('<Button />', () => {
  const onClick = jest.fn();

  afterEach(() => {
    onClick.mockClear();
  });

  it('should render the button', () => {
    render(<Button title="The Button" onClick={onClick} />);

    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('onClick should be called', () => {
    render(<Button title="The Button" onClick={onClick} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(onClick).toBeCalled();
  });
});
