import React, {PureComponent} from 'react';

import './footer.css'


export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className='container text-center footer_text'>
          <p>
            This site benefits from <a href='https://www.v2ex.com/p/7v9TEc53' target="_blank">V2EX API</a>.
          </p>
          <p>
            Copyright (c) 2018 <a href="https://arianx.me" target="_blank">ArianX</a>
          </p>
        </div>
      </footer>
    )
  }
}