import { connect } from 'react-redux';

import { sendRequest } from 'store/post/actions';

import Post from './Post';

const mapStateToProps = ({ post }) => ({ post });
const mapDispatchToProps = { loadPost: sendRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Post);
