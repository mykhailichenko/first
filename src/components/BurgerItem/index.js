import React from 'react';

import burger_image from '../../assets/burger-4.png';

import styles from  './burgeri-item.module.css';

class BurgerItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {burger, addNewBurger} = this.props;

        return(
            <div className={styles.wrapper}>
                <div className={styles.burger_image}>
                    <img width={170} src={burger_image} alt='Burger'/>
                </div>

                <div className={styles.burger_title}>
                    {burger.name}
                </div>

                <div className={styles.burger_body}>
                    {burger.description}
                </div>

                <div
                    className={styles.burger_add}
                    onClick={() => {
                        addNewBurger(burger);
                    }}
                >
                    Add to Cart
                </div>
            </div>
        )
    }
}

export default BurgerItem;
