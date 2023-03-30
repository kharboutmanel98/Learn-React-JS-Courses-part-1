
import { useParams , useNavigate } from "react-router-dom"

const ShowProduct = () => {
   const {id , slug} = useParams()
   const navigate = useNavigate()
    
   if (+id === 404) {
    return (
      <h1>Page not found</h1>
    )
    
   }

   const redirectToHome = () => {
    navigate("/about")

   }
   
   

  return (
    <>
    <h1>Hello in a product</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button onClick={redirectToHome} className="btn btn-success" my-2 mb-2>Redirect</button>
    
    </>
  );
};

export default ShowProduct;