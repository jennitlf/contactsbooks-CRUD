import "./contactDetails.css"
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";


function ContactDetails(props) {
  const {id} = useParams();
  const [contactDetails, setContactDetails] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {

      try {
        const response = await fetch(`http://localhost:3010/contacts/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao carregar detalhes do contatos');
        }
        const data = await response.json();
        setContactDetails(data);
      } catch(error) {
        console.error('Erro ao buscar detalhes do contato:', error)
      }

    }
    fetchContactDetails();
  }, [id])

  if (!contactDetails){
    return <div>Carregando...</div>
  }

  const del = async (name, id) => {

    try{
      const response = await fetch(`http://localhost:3010/contacts/${id}`, {
        method: 'DELETE',
      })
      if(!response){
        throw new Error('Erro ao excluir contato')
      }else{
        window.alert('Contato excluído com sucesso!')
        window.location.href = 'http://localhost:3000/'
      }
    }catch(error){
      console.error('Erro ao excluir contato:', error);
      window.alert(`Não foi possível excluir ${name}`)
    }
  }


  return(
    <div className="details" >
      <div id="name" className="datails-contact" >
        <div className="name-div1">
          <div className="name-div1-box-1">
            <i className="fa-solid fa-user icon-name-details"></i>
          </div>
          <div className="name-div1-box-2">
            {contactDetails.name} </div>
          </div>
        </div>
      <div id="number" className="datails-contact" >
        <i className="fa-solid fa-phone"></i>
        {contactDetails.number} </div>
      <div id="type" className="datails-contact">
        <i className="fa-solid fa-message"></i>
        {contactDetails.type} </div>
      <div id="address" className="datails-contact">
        <div className="address-div1">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          {contactDetails.address} </div>
        </div>
        <div className="controls">
          <div className="controls-div1">
            <Link to={`/`}> <button> <i className="fa-solid fa-arrow-left"></i> </button> </Link>
            <Link to={`/edit/${contactDetails.id}`} > <button> <i className="fa-solid fa-pen-to-square"></i> </button> </Link>
            <Link> <button type="button" onClick={()=>{del(contactDetails.name, contactDetails.id)}} > <i className="fa-solid fa-trash"></i> </button> </Link>
          </div>
        </div>
    </div>
  )

}

export default ContactDetails
