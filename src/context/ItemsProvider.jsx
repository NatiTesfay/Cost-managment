// import {createContext,useState,useEffect} from 'react';


// export const usersItemsContext = createContext()

// export default function ItemsProvider({children}){
//     const [userItems,setUserItems] = useState([])

//     useEffect(()=>{
//         localStorage.getItem('AllUserItems',JSON.stringify(userItems))
//     },[])    
//     return(
//         <usersItemsContext.Provider value={{userItems,setUserItems}}>
//             {children}
//         </usersItemsContext.Provider>
//     )
// }