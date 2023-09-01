import { useEffect, useState } from "react";
import { DashboardStyles } from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { DeleteModal } from "../modalDeleteAccount";
import { useNavigate } from "react-router-dom";

export const DashboardProfile = () => {
  const [showModal, setShowModal] = useState(false);

    const [user,setUser]=useState({})
  const navigate=useNavigate()
  const token = localStorage.getItem('token') || ""

  useEffect(()=>{
    const getClient=async ()=>{
        try {
            
            const response= await api.get('/api/clients', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(response.data)
        } catch (error) {
            toast.warn(`${error.response.data.message}`, {
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
    }
    getClient()
   
  },[])
const Logout=()=>{
  localStorage.clear()
  navigate('/')
}
  return (
    <DashboardStyles>
      <section>
        <h1>User Dashboard</h1>
        <div>
          <span>Full Name:</span>
          <span>{user.nomeCompleto}</span>
        </div>
        <div>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user.telefone}</span>
        </div>
        <div>
          <span>Created At:</span>
          <span>{new Date(user.createdAt).toLocaleString()}</span>
        </div>
        <div className="contact-actions">
                    <button className="button1">Edit</button>
                    <button onClick={()=>{Logout()}} className="button1">Log out</button>
                    <button className="button2" onClick={() => setShowModal(true)}>Delete account</button>
                  </div>
      </section>
      <DeleteModal show={showModal} onClose={() => setShowModal(false)} />
    </DashboardStyles>
  );
};

export default DashboardProfile;
