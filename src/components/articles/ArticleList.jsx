import {  useEffect, useContext } from "react";
import ArticleContext from "./ArticleContext";




const ArticleList = () => {
  // const [articles, setArticles] = useState([]);

  const { articles, getArticles , deleteOneArticle} = useContext(ArticleContext)



  //! hooks for loading component
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1>List of Articles</h1>

   
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button
              onClick={() => deleteOneArticle(article.id)}
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
