import EditContact from "../../../components/admin/contact/editContact";
import TBcontact from "../../../components/admin/contact/tbEditContact";
import LayoutAdmin from "../../../components/admin/LayoutAdmin";

export default function Contact(){
    return(
        <LayoutAdmin>
            <TBcontact/>
            <EditContact/>
        </LayoutAdmin>
    )
}