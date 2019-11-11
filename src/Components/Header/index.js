import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdPerson, MdShoppingCart, MdAdd, MdRemove, MdClear } from 'react-icons/md'

import * as CartActions from '../../Store/modules/cart/actions';
import { formatPrice } from '../../Util/format';

import { Container, Profile, Cart, Categories, Dropdown, DropdownCart, CartHeader, ProductCart, Total } from './styles';

class Header extends Component {
  
  container = React.createRef();
  state = {
    open: false,
    open1: false,
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
        open1: false,
      });
    }
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  handleButtonClickCart = () => {
    this.setState(state => {
      return {
        open1: !state.open1,
      };
    });
  };
  

  render() {
    const { cartSize, cart, removeFromCart, updateAmount, total } = this.props

    function increment(product) {
      updateAmount(product.id, product.amount + 1)
    }

    function decrement(product) {
      updateAmount(product.id, product.amount - 1)
    }

    return (
      <Container ref={this.container}>
        <h1>CAKE</h1>
  
        <Categories>
          <h2>Categoria 1</h2>
          <h2>Categoria 2</h2>
          <h2>Categoria 3</h2>
          <h2>Categoria 4</h2>
        </Categories>
  
        <div>
        <Profile onClick={this.handleButtonClick}>
          <MdPerson size={20} color="#999" />
          <h2>Minha Conta</h2>
        </Profile>
  
        {this.state.open && (
          <Dropdown>
            <strong>Olá, usuário</strong>
            <span>teste@teste.com.br</span>
          </Dropdown>
        )}
  
        <Cart onClick={this.handleButtonClickCart}>
          <MdShoppingCart size={20} color="#999" />
          <span>{cartSize}</span>
        </Cart>

        {this.state.open1 && (
          <DropdownCart>
            <CartHeader>
              <h2>MEU CARRINHO</h2>
              <span>{cartSize}</span>
              <MdClear size={16} color="#fff" />
            </CartHeader>

            <ProductCart>
            { cart.map(product => (
              <>
                <div>
                  <MdClear size={20} color="#fa8072" 
                  onClick={() => removeFromCart(product.id)}/>
                  <img src={product.image} 
                  alt={product.title}/>
                  <strong>{product.title}</strong>
                </div>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemove size={16} color="#fa8072" />
                  </button>
                    <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAdd size={16} color="#fa8072" />
                  </button>
                </div>
                <span>{product.subTotal}</span>
              </>
            ))}
            </ProductCart>

            <Total>
              <strong>Total: {total}</strong>
              <button type="button">Comprar
                <MdShoppingCart size={16} color="#fff" />
              </button>
            </Total>

          </DropdownCart>
        )}
        </div>  
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount)
  })), 
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)),
  cartSize: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header)