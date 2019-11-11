import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../Util/format';
import api from '../../Services/api';

import * as CartActions from '../../Store/modules/cart/actions';

import { Container, ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };
  
  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product =>({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data})
  }

  handleAddProduct = product => {
    const { addToCart }  = this.props;
    
    addToCart(product)
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <h1>Produtos em destaque</h1>
  
        <ProductList>
  
          {products.map(product => (
            <li key={product.id}>
            <img src={product.image}
              alt="Bombom" />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
  
            <button type="button" 
            onClick={() => this.handleAddProduct(product)}>
              <span>Comprar</span>
              <MdAddShoppingCart size={16} color="#fff" />
            </button>
          </li>
          ))}
  
        </ProductList>
  
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);