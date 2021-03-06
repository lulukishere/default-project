import { Provider } from 'react-redux';

import store from 'store/index';

import { Post } from 'pages';

function App() {
  return (
    <Provider store={store}>
      <Post />
    </Provider>
  );
}

export default App;
