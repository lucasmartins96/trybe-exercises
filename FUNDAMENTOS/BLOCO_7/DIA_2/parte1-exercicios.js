const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const orderObj = order;
  const deliveryPerson = orderObj.order.delivery.deliveryPerson;
  const customerName = orderObj.name;
  const customerTel = orderObj.phoneNumber;
  const customerStreet = orderObj.address.street;
  const customerNumber = orderObj.address.number;
  const customerApartment = orderObj.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerTel}, R. ${customerStreet}, Nº ${customerNumber}, AP: ${customerApartment}`);
}

// customerInfo(order);

const orderModifier = (order) => {
  const orderObj = order;
  const customerName = 'Luiz Silva';
  const orderPayment = 50;
  orderObj.name = customerName;
  orderObj.payment = orderPayment;
  
  console.log(`Olá ${orderObj.name}, o total do seu pedido de ${Object.keys(orderObj.order.pizza)} e ${orderObj.order.drinks.coke.type} é R$ ${orderObj.payment},00.`);
}

orderModifier(order);