import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`


const DashDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://Project KMS.onrender.com/cred/get')
      .then( res => {
          return res.json();
      })
      .then(availableData => {
        setData(availableData);
          console.log(availableData)
      })
    }, [])
    
    return (
        <Container>
                
            <table>
                
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Key</th>
              <th>Action</th>

            </tr>
            {
              data.map((item, index) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.key}</td>
              <td> <i class="fa fa-share" aria-hidden="true"> Share </i><a href="#"><i class="fa fa-trash" aria-hidden="true"> Delete </i></a></td> 
            </tr>
               ))
              }
           
          </table>
          

           

<hr></hr>
<br></br>
<br></br>
<br></br>
<br></br>

<table>
  <tr>
    

    
  </tr>

  <tr_flex>
   Save your credentials including Title, URL and Keys by clicking <b>Add Credentials</b> button. 
  </tr_flex>
 
  
</table>






<table>
  <tr>
    

    
  </tr>

  <tr>
    <td>  <input type ="text" placeholder='Title'/></td>
    <td>  <input type ="text" placeholder='URL'/></td>
    <td>  <input type ="text" placeholder='Key'/></td>
    <td>  <a href="#" class="submit_btn"> <i class="fa fa-plus" aria-hidden="true"> </i>
      Add credentials</a></td>
  </tr>
  
</table>




        </Container>
    )
}

export default DashDetails;

