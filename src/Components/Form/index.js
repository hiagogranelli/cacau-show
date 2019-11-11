import React from 'react';

import { Container, Input } from './styles';

export default function Form() {
  return (
    <Container>
        <div>
            <h2>Newsletter</h2>
            <span>Receba nosssa promoções<br/> e novidades. Inscreva-se:</span>
        </div>
        <Input>
            <form action="">
                <input type="text" placeholder="Seu nome"/>
                <input type="text" placeholder="Seu e-mail"/>
                <button>Enviar</button>
            </form>
        </Input>
    </Container>
  );
}
