import LayoutAdmin from "../../../components/admin/LayoutAdmin";
import LandingEdit from "../../../components/admin/about/editAbout";
import TBabout from "../../../components/admin/about/tbEditAbout";

export default function About(){
    return(
        <LayoutAdmin>
            <TBabout/>
            <LandingEdit/>
        </LayoutAdmin>
    )
}