import  { useState } from "react";
import { ModalStyles } from './style'
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UpdateModal = ({ show, onClose, onUpdate,idEdit }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
  });

  if (!show) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const token=localStorage.getItem('token') || ''
    onUpdate(formData);
    const updatedData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );
    
      if (Object.keys(updatedData).length === 0) {
        console.log("No fields to update");
        onClose();
        return;
      }
      
      try {
       await api.patch(`/api/contacts/${idEdit}`,updatedData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
      } catch (error) {
        toast.warn(`error`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }



    setFormData({
        nomeCompleto: "",
        email: "",
        telefone: "",
      })
    onClose();
  };
const handleClose=()=>{
    setFormData({
        nomeCompleto: "",
        email: "",
        telefone: "",
      })
      onClose();
}

  return (
    <ModalStyles onSubmit={(e) => e.preventDefault()}>
      <div className="modal-content">
        <h2>Update Contact</h2>
        <div className="inputInf">
        <input
          type="text"
          name="nomeCompleto"
          placeholder="Full Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Phone"
          onChange={handleInputChange}
        />
        </div>
       
        <button onClick={handleSubmit}>Update</button>
        <button onClick={()=>{
            handleClose()
        }}>Cancel</button>
      </div>
    </ModalStyles>
  );
};
