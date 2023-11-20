import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assests/p3-removebg-preview.png'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
const [loggedin,setLoggedin] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }

  },[])
  return (
    <>
    {/* Landing Section */}
    <div style={{width:"100%",height:"100vh"}} className='container-fluid rounded bg-success'>
      <Row className='align-items-center p-5'>

        {/* sm-small screen md-medium screen */}
        <Col sm={12} md={6}>
          <h1 style={{fontSize:"80px"}} class='fw-bolder text-light mb-5'><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair </h1>
          <p>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>

         { 
         loggedin?
         <Link to={'/dashboard'} className="btn btn-primary">Manage your Projects <i className="fa-solid fa-right-long fa-beat ms-2"></i></Link>:

          <Link to={'/login'} className="btn btn-primary">Start to Explore <i className="fa-solid fa-right-long fa-beat ms-2"></i></Link>}

        
        </Col>
        <Col sm={12} md={6}>
          <img style={{marginTop:"100px"}} className='w-75' src={titleImage} alt="" />

        
        </Col>

      </Row>

    </div>

    {/* all projects */}
    <div className="all-projects mt-5">
      <h1 className="text-center mb-5">Explore Our Projects</h1>
      <marquee scrollAmount={25}>
       <div className='d-flex justify-content-between'>
        <div className='ms-5' style={{width:"500px"}}>
          <ProjectCard/>

        </div>
        

       </div>
      </marquee>
      <div className="text-center mt-5"><Link to= {'/project'}>View More Projects</Link></div>
    </div>

    </>
  )
}

export default Home