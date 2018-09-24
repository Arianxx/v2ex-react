import React, {PureComponent} from 'react';

import './footer.css'


export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className='container text-center footer_text'>
          <p>
            Copyright (c) 2018 Arianx
          </p>
        </div>
      </footer>
    )
  }
}