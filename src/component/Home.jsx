import React,{useState} from 'react'
import Refertemplate from './Refertemplate'
import ReferForm from './ReferForm'

function Home() {
    const [open, setOpen] = useState(false)
    const [success,setsuccess]=useState([])
  return (
    <>
    <Refertemplate open={open} setOpen={setOpen} success={success} setsuccess={setsuccess}/>
    <ReferForm open={open} setOpen={setOpen} setsuccess={setsuccess}/>
    <div>Home</div>
    
    </>
  )
}

export default Home