import axios from 'axios'
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/baseUrl'
import './styles.css'

type Props = {
    saleId : number
}

const NotificationButton = ({saleId} : Props)  => {

    const handleNotification = (saleId : number) => {
        axios.get(`${BASE_URL}/sales/${saleId}/notification`)
        .then(()=> {
            toast.info("SMS enviado com sucesso!");
        })
    }

    return (
            <div className="dsmeta-red-btn" onClick={() => handleNotification(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
    )
}

export default NotificationButton