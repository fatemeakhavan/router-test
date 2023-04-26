import {useParams,useLocation,useNavigate} from "react-router-dom";

import {deleteBook, getBook} from "./data/data";
const Book=()=>{
    const params=useParams();
    const navigate=useNavigate();
    const location=useLocation();
    const book=getBook(parseInt(params.bookId));



        if(book){
            return(
               <main style={{padding:"1rem"}}>
                   <h2>{book.name}</h2>
                   <h5>قیمت:{`${book.amount}`}</h5>
                   <p>تاریخ انتشار:{book.due}</p>
                   <button
                       onClick={()=> {
                           deleteBook(book.number);
                           navigate("/books" + location.search)
                       }}
                       >حدف کتاب</button>
               </main>
            )

        }
        else{
            return(
                <main style={{padding:"1rem"}}>
                    <h4>کتابی یافت نشد</h4>
                </main>

            )
        }



};
export default  Book;