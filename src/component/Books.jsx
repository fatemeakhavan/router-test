import {getBooks} from "./data/data";
import { Outlet,NavLink,useSearchParams,useLocation} from "react-router-dom";

const Books=()=>{
    const books=getBooks();
    const location=useLocation();
    const[searchparams,setSearchParams]=useSearchParams();
    return(
        <div style={{display:"flex"}}>
            <nav style={{borderLeft:"solid 1px",padding:"1 rem"}} >
                <input type="type"
                       value={searchparams.get("param") || ""}
                       onChange={event=>{
                           let filter=event.target.value;
                           if(filter){
                               setSearchParams({param:filter})
                           }
                           else{
                               setSearchParams({})


                           }
                       }}

                       placeholder="جستجوی کتاب"/>
                {
                    books.filter((book)=>{
                        let filter=searchparams.get("param");
                        if(!filter)return true;
                        let name=book.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase())
                    })
                    .map((book)=>(
                        <NavLink
                            style={({isActive})=>{
                                return{
                                    display:"flex",
                                    margin:"1rem 0",
                                    color: isActive? "green" : ""

                                }
                           }}
                            to={`/books/${book.number}${location.search}`} key={book.number}>{book.name}</NavLink>))



                }
            </nav>
            <Outlet/>
        </div>
    )
}
export default Books;