import React from 'react';
import T from 'prop-types';

import { PostItem, Button } from 'components';

const Post = ({ post, loadPost }) => {
  const handleClick = React.useCallback(() => {
    loadPost();
  }, [loadPost]);

  return (
    <>
      <Button
        title={post.loading ? 'Loading...' : 'Load Post'}
        onClick={handleClick}
      />
      {!post.data.length && <p data-testid="post-empty-message">No data</p>}
      {post.data.map((item) => (
        <PostItem key={item.id} {...item} />
      ))}
    </>
  );
};

Post.propTypes = {
  post: T.shape({
    error: T.oneOf([T.instanceOf(Error).isRequired, T.number]),
    loading: T.bool.isRequired,
    data: T.arrayOf(
      T.shape({
        id: T.number.isRequired,
        title: T.string.isRequired,
        body: T.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  loadPost: T.func.isRequired,
};

Post.defaultProps = {
  post: {
    error: null,
    loading: false,
    data: [],
  },
  loadPost: () => undefined,
};

export default Post;
