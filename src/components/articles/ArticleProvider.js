import { useReducer } from "react";
import ArticleContext from "./ArticleContext";
import articleReducer from "./ArticleReducer";
import { GET_ARTICLES, DELETE_ARTICLES } from "./ArticleTypes";
import { getAllArticles, deleteArticle } from "./ArticleActions";

const ArticleProvider = ({ children }) => {


    const initState = {
        articles: []
    }
    const [state, dispatch] = useReducer(articleReducer,initState)
    
    const getArticles = async() => {
        let payload = await getAllArticles()
        console.log("list: ", payload)
        dispatch({type: GET_ARTICLES , payload})
    }

    const deleteOneArticle =async (id) => {
        let status =  await deleteArticle(id)
        console.log("status" , status)
        if (status === 200) {
            console.log("delete :",{type: "DELETE_ARTICLES" , payload: id})
            dispatch({type: DELETE_ARTICLES , payload: id})
        }
    }

    




    return (<ArticleContext.Provider
        value={{
            getArticles,
            deleteOneArticle,
            articles: state.articles
    }}>{children}</ArticleContext.Provider>)
}

export default ArticleProvider