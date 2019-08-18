import React from 'react';
import ReactDom from 'react-dom'

import Main from './Main/index.js'

const MainWeb = () => {
  return <Main />
}

ReactDom.render(<MainWeb />, document.getElementById('root'))