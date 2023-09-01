import ContactList from "../../components/contactList"
import { DashboardProfile } from "../../components/dashboardProfile"
import { SignUpForm } from "../../components/formContact"

export const DashBoard=()=>{


    return <>
   
        <DashboardProfile/>
        <SignUpForm/>
        <ContactList/>
        </>
}