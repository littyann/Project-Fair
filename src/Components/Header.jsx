import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <Navbar  className='bg-success'>
        <Container>
          <Navbar.Brand href="#home">
            
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='fw-bolder fs-4'>  <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</Link>
          </Navbar.Brand>
         { insideDashboard && <div className="btn btn-link ms-auto text-primary fw-bolder fs-5">Logout
<i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i>

</div>}
        </Container>
      </Navbar>
  )
}

export default Header