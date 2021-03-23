import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Anwar', 'Manna', 'Jafor', 'Salman', 'Shuvo']
const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name:'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'Premiere El', price: '$249.98'}
]

return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            products.map(product =><Product product={product}></Product>)
          }
        </ul>
      </header>
    </div>
  );
}

function Counter(){
 const [count, setCount] = useState(10);
 const handleDecrese = () =>{
  const decreaseCount = count -1;
  setCount(decreaseCount);
};
 const handleIncrease = () =>{
   const newCount = count + 1;
   setCount(newCount); 
 };
 
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleDecrese}>Decrease</button> */}
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.email}</li>)
       }
     </ul>
     
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'400px',
    // float:'left'
  }
 const {name, price} = props.product;
 console.log(name, price);
return (
  <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
  </div>
)
}

function Person(props){
  return  (
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
      </div>
  )
}
export default App;
 