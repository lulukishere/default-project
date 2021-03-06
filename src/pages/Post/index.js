import { connect } from 'react-redux';

import { sendRequest as loadPost } from 'store/post/actions';

import Post from './Post';

const mapStateToProps = ({ post }) => ({ post });
const mapDispatchToProps = { loadPost };

export default connect(mapStateToProps, mapDispatchToProps)(Post);
