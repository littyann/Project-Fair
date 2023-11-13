import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap'

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='mt-5'>
       <div className='d-flex border-rounded p-3 justify-content-between'> 
       <h2>My Profile</h2>
       <button  onClick={() => setOpen(!open)} className="btn btn-outline-info"><i className='fa-solid fa-chevron-down fa-beat-fade'></i></button>
        </div>
       <Collapse in={open}>
            <div className="shadow p-5 row justify-content-center mt-3">
                {/* upload picture */}
               <label className='text-center' htmlFor='profile'>
                    <input id='profile' style={{display:"none"}} type="file"  />
                    <img width={'200px'} height={'200px'} className='rounded-circle' src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png" alt="" />
               </label>
               <div className="mt-3">
                <input type="text" placeholder='GitHub Link' className='form-control'/>
              
                
               </div>
               <div className="mt-3">
                <input type="text" placeholder='LinkedIn' className='form-control'/>

              
                
               </div>
               <div className="mt-3 text-center d-grid"> 
               <button className='btn btn-warning'>Update</button>
               </div>
               
            </div>
       </Collapse>

    </div>
  )
}

export default Profile