// import {createContext,useState,useEffect} from 'react';

// export const usersYearsContext = createContext()

// export default function UsersProvider({children}){
//     const [userYears,setUserYears] = useState([])

//     useEffect(()=>{
//         localStorage.setItem('userYears',JSON.stringify(userYears))
        
//     }
//     ,[userYears])
    
//     return(
//         <usersYearsContext.Provider value={{userYears,setUserYears}}>
//             {children}
//         </usersYearsContext.Provider>
//     )
// }