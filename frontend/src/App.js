import './App.css';
import Header from "./components/header.jsx"
import ContactList from './components/contactList.jsx';
import ContactDetails from './components/contactDetails.jsx';
import ContactEdit from './components/contactEdit.jsx';
import NewContact from './components/newContact.jsx';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home">
      <div className="search-container">
        <i id="search-icon" className="fa fa-search"></i>
        <input id="search-input" type="text" placeholder="Pesquisar contatos..." value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className="New-contact">
        <p className="title-list">Lista de contatos</p>
        <Link to={"/newContact"} className="container-button-new"> 
          <i className="fa-solid fa-plus"></i>
          <button className='button-new'>Novo contato</button> 
        </Link>
      </div>
      <ContactList searchTerm={searchTerm} />
    </div>
  );
}

function App() {
  // useEffect(() => {

  //   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  //   // Cria e injeta o script do Google Maps dinamicamente
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
  //   script.async = true;
  //   script.defer = true;


  //   document.body.appendChild(script);


  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);


  // window.initMap = () => {
  //   console.log('Google Maps API Loaded');

  // };

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ContactDetails />} />
          <Route path="/edit/:id" element={<NewContact/>} />
          <Route path="/newContact" element={<NewContact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
