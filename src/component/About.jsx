import {Outlet} from "react-router-dom"
const About=()=>{
    return(
        <div>
            <h2>درباره ما</h2>
            <Outlet/>
        </div>

    )
}
export default  About;