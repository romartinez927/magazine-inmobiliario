import { faFacebook, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Servicio() {
  return (
    <div className='container-xl mt-5' style={{minHeight: "90vh", marginBlock: "auto"}}>
        <div>
            <p className='fs-6 mb-2'>Home / Inmobiliarias / Rocchio Propiedades</p>
            <h1 className="fw-bold mb-2 title pt-2">Rocchio Propiedades</h1>
        </div>
        <div className='container-fluid my-4'>
            <div className="row gap-5">
                <div className="col-md-7 bordered rounded padding-30 bg-white">
                    <p>Somos un grupo joven de Profesionales, Martilleros Públicos y Corredores de Comercio, egresados en la Universidad Nacional de San Martín.</p>
                    <p>Estamos capacitados para llevar a cabo la comercialización de su propiedad, buscar por usted su nueva vivienda o bien proyectar juntos una inversión; pero sobre todo para asistirlos y asesorarlos de forma desinteresada cuando ustedes lo requieran.</p>
                    <p>Vale destacar que contamos con un grupo de Profesionales (Abogados, Escribanos, Agrimensores, Arquitectos, etc.) que nos acompañan para brindarles un mejor servicio. Contamos con los principios fundamentales para que ustedes nos elijan: HONESTIDAD, EFICACIA y ETICA PROFESIONAL.</p>
                </div>
                <div className="col-md-4 bordered rounded p-0 bg-white">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.787837283488!2d-58.51178013022461!3d-34.61814369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d1593c9e23%3A0x12bbcca2d4c0246f!2sAv.%20%C3%81lvarez%20Jonte%204543%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689615880524!5m2!1ses-419!2sar" height="200" style={{width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="px-3 py-1">
                        <p><FontAwesomeIcon icon={faLocationDot} className='me-2' style={{width: "12px"}}/>Lacroze 5079, Villa Ballester, Buenos Aires, Argentina</p>
                        <p><FontAwesomeIcon icon={faPhone} className='me-2' style={{width: "14px"}}/>5411-4768-7646</p>
                        <p><FontAwesomeIcon icon={faGlobe} className='me-2' style={{width: "16px"}}/>http://www.rocchio.com.ar</p>
                        <ul className="social-icons list-inline">
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faFacebook} className='fs-4'/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className='fs-4'/></a>
                            </li>
                            <li className="list-inline-item pe-2">
                                <a href="/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='fs-4 faInstagram'/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicio