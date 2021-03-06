import { connect } from 'react-redux';

import { SEND_REQUEST } from 'store/post/types';

import Post from './Post';

const mapStateToProps = ({ post }) => ({ post });
const mapDispatchToProps = (dispatch) => ({
  loadPost: () => dispatch({ type: SEND_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
