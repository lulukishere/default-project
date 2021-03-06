import T from 'prop-types';

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} data-testid="button">
      {title}
    </button>
  );
};

T.propTypes = {
  title: T.string.isRequired,
  onClick: T.func,
};

export default Button;
