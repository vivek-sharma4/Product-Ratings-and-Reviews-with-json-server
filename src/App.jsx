import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default App;
