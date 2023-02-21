import '../styles/Loading.css'
import EteLogo from '../images/ETE.png'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return(
        <div className="Loading_container">
            <img src={EteLogo} alt="logo-ETE"/>
            <h4>Carregando...</h4>
            <Spinner animation="border" variant="light" />
        </div>
    )
}

export default Loading