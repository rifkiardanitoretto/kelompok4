import LandingEdit from "../../components/admin/Landing/editLanding";
import LayoutAdmin from "../../components/admin/LayoutAdmin";
import TbLanding from "../../components/admin/Landing/tbEditLanding";
import { useEffect,useState } from "react";
import { supabase } from "../../utils/supabase/supabase-client";


export default function HomeAdmin(){
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => cekUser());
    const cekUser = async () => {
      const session = await supabase.auth.session();
      if (session == null) location.replace('/admin/login');
      else setIsAuth(true);
    };

    if(isAuth){
        return(
            <div>
                <LayoutAdmin>
                <TbLanding/>
                    <LandingEdit/>
                </LayoutAdmin>
                
            </div>
        )
    } else{
        return <p>Authentication...</p>;
    }
    
}