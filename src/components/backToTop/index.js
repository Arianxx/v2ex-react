import React, {PureComponent} from 'react';

import './index.css';


export class BackToTop extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    this.node = document.getElementById('backBox');
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    this.setState({
      show: document.documentElement.scrollTop > 800 || document.body.scrollTop > 800
    });
  };

  handleClick = () => {
    this.backAnimate();
  };

  backAnimate = () => {
    const height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height > 20) {
      window.requestAnimationFrame(this.backAnimate);
      window.scrollTo(0, height - height / 8);
    }
  };

  render() {
    return (
      <div className={'backBox ' + (this.state.show ? 'show' : '')} id='backBox' onClick={this.handleClick}>
        <p className='backEle'>↑</p>
      </div>
    )
  }
}