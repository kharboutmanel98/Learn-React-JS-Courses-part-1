import axios from "axios";
import Swal from "sweetalert2";

const api = process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE

export const getAllArticles = async() =>{
    try {
        const response = await axios.get(`${api}/articles`)

       return response.data
        
    } catch (error) {
        console.error(error);
    }

}

export const deleteArticle = (id) =>{
     
    let status = 0
       return Swal.fire({
            title: 'Are you sure?',
            text: "You want delete this article?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
    
            try {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${api}/articles/${id}`)
                 
                    status = response.status
                if(response.status === 200){
                  
                    
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                    )
                    return status
                  
                    }
                   
                }
               
            } catch (error) {
                console.error(error);  
            }
        
           
          })
    
        
    
    }