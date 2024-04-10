import React from 'react';

import burger_logo from '../../assets/burger-logo.png';

import styles from  './header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {count, showCartPage} = this.props;

        return(
            <div className={styles.header}>
                <img width='50' height='50' src={burger_logo} alt='burger' />

                <span onClick={() => showCartPage(false)}>MyLogo</span>

                <div onClick={() => showCartPage(true)} className={styles.cart}>Cart {count}</div>
            </div>
        )
    }
}

export default Header;
