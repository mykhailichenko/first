import React from 'react';

import styles from  './cart.module.css';

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {
            burgers,
            deleteBurger,
            increaseBurgerCount,
            decreaseBurgerCount,
        } = this.props;

        return(
            <div>
                {
                    burgers.map(burger => {
                        return(
                            <div
                                key={burger.id}
                                className={styles.cart_item}
                            >
                                <span>{burger.name}</span>

                                <div onClick={() => decreaseBurgerCount(burger.id)} className={styles.btn}>-</div>

                                <span>{burger.count}</span>

                                <div onClick={() => increaseBurgerCount(burger.id)} className={styles.btn}>+</div>

                                <div
                                    className={styles.delete}
                                    onClick={() => deleteBurger(burger.id)}
                                >
                                    Delete
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CartPage;
