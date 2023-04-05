import { createContext , useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([
        {
          id: 1,
          label: "IPhone 13",
          price: 3000,
        },
    
        {
          id: 2,
          label: "Samsung 02S",
          price: 1500,
        },
    
        {
          id: 3,
          label: "Infinix ",
          price: 800,
        },
      ]);

      const deleteProduct = (id) => {
        let myList = products.filter((product) => product.id !== id);
        setProducts(myList)
       
      };


      //! add a product
      const addProduct =(item) => {
        setProducts([item, ...products])
      }

    return ( <ProductContext.Provider value={{
        message: "welcome with us",
        title: "React",
        products, 
        setProducts,
        deleteProduct,
        addProduct
        }}>

    {children}
    </ProductContext.Provider>)

}