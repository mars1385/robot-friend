import React, {Component} from 'react';




class Header extends Component {
    // making header to not re render
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <h1 className='f1'>Robot Friends</h1>
        );
    }
};

export default Header;