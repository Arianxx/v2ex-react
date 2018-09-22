import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {store} from "./redux/store";

ReactDom.render(
    <Provider store={store}>
      <h1>Hello, react-redux!</h1>
    </Provider>,
    document.getElementById('root')
);