
import { useState } from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';


function App() {
  const [spinner,setSpinner] = useState(false)
  const style1 = {
    width: '150px',
    height: '30px'

  }

  const style2 = {
    marginTop: '20px',
    width: '250px',
    height: '40px'
  }

  const handleClick = () => {
    setSpinner(true)
    console.log('clicked me')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true)
    alert('submit button is clicked')
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
        />
        <ButtonComponent
          handleClick={handleSubmit}
          icon ={<i class="fa fa-plus"></i>}
          type="secondary"
          style = {style2}

        />
      </form>
      <ButtonComponent
        handleClick={handleClick}
        label="Add"
        type="primary"
        icon={<i className="fa fa-car"/>}
        loader = {spinner && <i class="fa fa-plus"></i>}
        style = {style1}
        />

    </div>
  );
}

export default App;
