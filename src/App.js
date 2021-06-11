
import React from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';


function App() {

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
    console.log('clicked me')
  }

  const handleSubmit = () => {

    console.log('submit button is clicked')
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
          loader = {<i class="fa fa-circle-o-notch fa-spin" ></i>}
          type="secondary"
          style = {style2}

        />
      </form>
      <ButtonComponent
        handleClick={handleClick}
        label="Add"
        type="primary"
        icon={<i className="fa fa-car"/>}
        loader = {<i class="fa fa-circle-o-notch fa-spin" ></i>}
        style = {style1}
        />

    </div>
  );
}

export default App;
