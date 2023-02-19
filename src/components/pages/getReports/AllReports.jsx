import { useState,useEffect } from "react"; 
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import MonthlyReport from "../../features/buttons/MonthlyReport";
import YearlyReport from "../../features/buttons/YearlyReport";





function AllReports() {

  const array = JSON.parse(localStorage.getItem("NewItems:"));
let newArray=[]
   const  someFunc = (year)=> {
    console.log("array",array);
    const result = array.filter((obj) => obj.date.slice(0, 4) == year);
    //  console.log(result,'result');
    newArray= result
    console.log("batel",newArray)
    return newArray;
  }
  const year = JSON.parse(localStorage.getItem("year"));



const [model,setModel]= useState([])

useEffect(()=>{
  const result = someFunc(year)
setModel([...result])
},[model])

return (
    <>
    <MDBContainer className="d-flex justify-content-evenly p-5 ">
      <MDBRow>
        <MonthlyReport />
      </MDBRow>
      <MDBRow>
        <YearlyReport />
      </MDBRow>
    </MDBContainer>
    
                <table>
                  <tr>
              
                    <th>itemName</th>
             
                    <th>price</th>
              
                
                    <th>category</th>
               
                    <th>date</th>
              
                    <th>description</th>
                    </tr>
                 <tbody>
                  {
                    model.map((item) => {
                      return(
                        <tr>
                          <td>{item.itemName}</td>
                          <td>{item.price}</td>
                          <td>{item.category}</td>
                          <td>{item.date}</td>
                          <td>{item.description}</td>
                        
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              
    </>
  );
}

export default AllReports;
