import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import { DashBoard } from "../pages/dashboard"

export const RoutesMain = () => {
 

    return (
        <Routes>
            <Route path="" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route 
        path="/dashboard" 
        element={ <DashBoard/> }
      />


        </Routes>
    )
}
