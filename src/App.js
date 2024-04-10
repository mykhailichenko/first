import React from 'react';

import CartPage from './pages/CartPage';

import Header from './components/Header';
import BurgerItem from './components/BurgerItem';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            burgers: [],
            cart: [],
            showCart: false,
            loading: false,
        }

        this.addNewBurger = this.handleAddBurger.bind(this);
        this.showCartPage = this.handleShowCart.bind(this);
        this.deleteBurger = this.handleDeleteBurger.bind(this);
        this.decreaseBurgerCount = this.handleDecreaseBurgerCount.bind(this);
        this.increaseBurgerCount = this.handleIncreaseBurgerCount.bind(this);
    }


    componentDidMount() {
        this.setState({
            ...this.state,
            loading: true,
        });

        fetch('https://my-burger-api.herokuapp.com/burgers').then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                ...this.state,
                loading: false,
                burgers: data,
            })
        })
    }

    handleAddBurger(burger) {
        const tempCart = [...this.state.cart];
        const tempIndex = tempCart.findIndex(item => item.id === burger.id);

        if( tempIndex !== -1) {
            tempCart[tempIndex].count += 1;

            this.setState({
                ...this.state,
                cart: tempCart,
            });
        } else {
            this.setState({
                ...this.state,
                cart: [
                    ...tempCart,
                    {
                        ...burger,
                        count: 1,
                    }
                ],
            });
        }
    }

    handleDeleteBurger(id) {
        this.setState({
            ...this.state,
            cart: this.state.cart.filter(item => item.id !== id),
        });
    }

    handleDecreaseBurgerCount (burger_id) {
        const tempCart = [...this.state.cart];
        const tempIndex = tempCart.findIndex(item => item.id === burger_id);

        if(tempCart[tempIndex].count !== 1) {
            tempCart[tempIndex].count -= 1;

            this.setState({
                ...this.state,
                cart: tempCart,
            });
        }
    }

    handleIncreaseBurgerCount (burger_id) {
        const tempCart = [...this.state.cart];
        const tempIndex = tempCart.findIndex(item => item.id === burger_id);

        if(tempCart[tempIndex].count !== 50) {
            tempCart[tempIndex].count += 1;

            this.setState({
                ...this.state,
                cart: tempCart,
            });
        }
    }

    handleShowCart(show) {
        this.setState({
            ...this.state,
            showCart: show,
        })
    }

    render () {
        return(
            <div>
                <Header
                    count={this.state.cart.length}
                    showCartPage={this.showCartPage}
                />

                {
                    this.state.showCart
                        ?
                        <CartPage
                            burgers={this.state.cart}
                            deleteBurger={this.deleteBurger}
                            decreaseBurgerCount={this.decreaseBurgerCount}
                            increaseBurgerCount={this.increaseBurgerCount}
                        />
                        :
                        this.state.loading ?
                            <div>Loading burgers...</div>
                            :
                            this.state.burgers.map(burger => {
                                return(
                                    <BurgerItem
                                        key={burger.id}
                                        burger={burger}
                                        addNewBurger={this.addNewBurger}
                                    />
                                )
                            })
                }
            </div>
        )
    }
}

export default App;
