import React from 'react';
import T from 'prop-types';

const PostItem = ({ id, title, body, onClick }) => {
  const handleClick = React.useCallback(() => {
    typeof onClick === 'function' && onClick(id)
  }, [onClick, id]);

  return (
    <div data-testid="post-item-container" onClick={handleClick}>
      <h1 data-testid="post-item-title">{title}</h1>
      <p data-testid="post-item-body">{body}</p>
    </div>
  );
};

PostItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired,
  onClick: T.func,
};

export default React.memo(PostItem);
