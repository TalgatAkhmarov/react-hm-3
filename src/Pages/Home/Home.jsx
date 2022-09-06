import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    
    const navigate = useNavigate();
     
   const handleContact = () =>{
    navigate('/contacts')
   }

  return (
   < div>
   <div onClick={handleContact}>Contact</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde aspernatur exercitationem fugit rerum illum molestias maxime impedit blanditiis modi incidunt a facilis beatae vero autem, recusandae ex dolorum officia.</div>   
   </div>

    )
}

export default Home