import { api } from "../../services/api";
import { ModalBackground, ModalContent } from "./style";
import { useNavigate } from "react-router-dom";
export const DeleteModal = ({ show, onClose }) => {

    const navigate=useNavigate()
    if (!show) return null;
  
    const handleButton=async ()=>{
        const token=localStorage.getItem('token') || ''
        console.log(token)
        try {
            await api.delete('/api/clients', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.clear()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    return (
      <ModalBackground>
        <ModalContent>
          <h2>Tem certeza que deseja deletar a conta?</h2>
          <button onClick={() => {
           handleButton()
            onClose();
          }} className="button2">Sim</button>
          <button onClick={onClose} className="button1">Não</button>
        </ModalContent>
      </ModalBackground>
    );
  };