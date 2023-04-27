import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  //! retrieve all articles
  const getAllArticles = async () => {
    try {
      const response = await axios.get("http://localhost:4000/articles");
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //! delete article
  const deleteArticle = (id) => {
    // if (!window.confirm("are you sure to delete this article?")) {
    //   return


    Swal.fire({
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
        const response = await axios.delete(
          `http://localhost:4000/articles/${id}`
        );
        if (response.status === 200) {
          setArticles(articles.filter((article) => article.id !== id));
        
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        }
      } catch (error) {
        console.error(error);
      }
     
    })

    
   
     
   
  };

  //! hooks for loading component
  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div>
      <h1>List of Articles</h1>
      {/* <button onClick={getAllArticles} className="btn btn-success">
        Get All
      </button> */}
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button
              onClick={() => deleteArticle(article.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default ArticleList;
