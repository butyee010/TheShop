import React , {Component} from 'react';
import './Header.scss';


export default class Header extends Component {

  defualtText(text) {
    return !!text ? text : "-"; 
  }

  render() {
    let {text} = this.props;
    return (
        <div>
          <label>{this.defualtText(text)}</label>
        </div>
    );
  }
}


/* const Header = () => (
  let {}
  <header className="Header">
    Header tests
  </header>
); */

// export default Header;
