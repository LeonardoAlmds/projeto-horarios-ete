import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import { BsFillGeoAltFill } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="contact">
        <div className="left">
          <h3>Contato:</h3>
          <h6>Telefone: +81 3719-9509</h6>
          <h6>Email: etemfl@hotmal.com</h6>
          <h6>Instagram: <Link to='https://www.instagram.com/etemflcaruaruoficial/' target="_blank">@etemflcaruaruoficial</Link></h6> 
        </div>

        <div className="middle">
          <h4>Copyright © 2023 - <Link to='https://github.com/a5ur4' target="_blank">Pedro Bastos</Link> e <Link to='https://github.com/LeonardoAlmds' target="_blank">Leonardo Almeida</Link></h4>
        </div>

        <div className="right">
          <Link to='https://www.google.com.br/maps/place/Escola+T%C3%A9cnica+Estadual+Ministro+Fernando+Lyra/@-8.3043296,-35.9857765,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98b724233423b:0xe70297e691e801c!8m2!3d-8.3043296!4d-35.9835878!16s%2Fg%2F11g6jrkt30?coh=164777&entry=tt' target="_blank"><h3><BsFillGeoAltFill className="imgLeft" />Localização</h3></Link>
          <h6>Rua Vereador João Avelino Sobrinho</h6>
          <h6>Cidade Alta, 55031-470</h6>
          <h6>Caruaru - Pernambuco</h6>
        </div>

      </footer>
    )
}

export default Footer;