import React from 'react'
import "./formPropiedad.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function FormPropiedad() {
  return (
    <div className='form-prueba'>
        <form action="" method="post" className='form-propiedad mt-2 px-3 rounded bordered padding-30 '>
            <div className='text-center pb-2'>
                <h5 className='fw-bold mb-0'>Contactar a la Inmobiliaria</h5>
                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#9b1b30"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
            </div>
            <p className="comment-form-author">
                <label htmlFor="author">Nombre y Apellido</label> 
                <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    size="20" 
                    maxLength="245" 
                    autoComplete="name" 
                    className='form-control'
                    required
                />
            </p>
            <p className="comment-form-email">
                <label htmlFor="email">Email</label> 
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    size="80" 
                    maxLength="100" 
                    aria-describedby="email-notes" 
                    autoComplete="email"
                    className='form-control'
                    required=""
                />
            </p>
            <p className="comment-form-comment">
                <label htmlFor="comment">Mensaje</label>
                <textarea 
                    id="comment"
                    name="comment"
                    cols="45" 
                    rows="8" 
                    maxLength="65525" 
                    required
                    placeholder='Hola, me interesa esta propiedad que vi en Magazine Inmobiliario y quisiera que me contacten. Muchas gracias.'
                    className='form-control'
                    style={{minHeight:"80px"}}
                    ></textarea>
            </p>
            <button type="submit" className='btn-red col-12' data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar</button>
            <button className='btn-light col-12 mt-2 rounded text-light' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor: "#25D366"}}>
                <FontAwesomeIcon className="fs-4 me-2" style={{marginBottom:"-3px", color: "#fff"}} icon={faWhatsapp}/>
                Contactar por Whatsapp
            </button>
        </form>          
    </div>
  )
}

export default FormPropiedad