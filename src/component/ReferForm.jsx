import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ReferForm({ open, setOpen,setsuccess }) {
    const [refereeEmail,setrefereeEmail]=useState('')
    const [refereeName,setrefereeName]=useState('')
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [course,setcourse]=useState('FRONTEND_DEVELOPMENT')
    const [errors,seterrors]=useState([])
   const [loader,setloader]=useState(false)
    function validateEmail(email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const coursearr=['FRONTEND_DEVELOPMENT',
      'BACKEND_DEVELOPMENT',
      'FULLSTACK_DEVELOPMENT',
      'DATA_SCIENTISTS',
      'MACHINE_LEARNING',]
    const handlesubmit=(e)=>{
      e.preventDefault();
      setloader(true)
      if(!refereeEmail){
        setloader(false)
        seterrors([...errors,'your email is required'])
      }
      if(!refereeName){
        setloader(false)
        seterrors([...errors,'your name is required'])
      }
      if(!name){
        setloader(false)
        seterrors([...errors,'your friend name is required'])
      }
      if(!email){
        setloader(false)
        seterrors([...errors,'your friend email is required'])
      }
      if(!course){
        setloader(false)
        seterrors([...errors,'course is required'])
      }
      if(!validateEmail(refereeEmail) && !validateEmail(email)){
        setloader(false)
        seterrors([...errors,'invalid email'])
      }
      if(!coursearr.includes(course)){
        setloader(false)
        seterrors([...errors,'invalid course'])
      }
      if(errors.length==0){
        fetch('https://accredian-backend-task-7a89.onrender.com/createreferel', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email,name,refereeEmail,refereeName,course})
        })
        .then(response => {
          if (response.status!='201') {
            response.json().then((data)=>{
              setloader(false)
              seterrors([...errors,data.message])
             
            })
            
          }
          return response.json();
        })
        .then(data => {
          setloader(false)
          setsuccess([`you successfully sent referel to ${data.name}`])
          setOpen(false)
          
        })
        .catch(error => {
          setloader(false)
          seterrors([...errors,error.message]) 
          
        });
      }
    }
    
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            {loader?
            <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
              <span className="sr-only">Loading...</span>
            </div>:<></>}
            
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="flex flex-col items-center justify-center w-full" style={{ minWidth: '300px' }}>
                  <h1 className="text-xl font-bold">Referel Form</h1>
                  {errors.length>0?
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      {errors.map((err)=>(
                        <div key={err}>
                          <strong className="font-bold">Error!</strong>
                          <span className="block sm:inline">{err}</span>
                        </div>
                      ))}
                      
                      <button type="button" onClick={()=>seterrors([])} className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>:<></>
                  }
                  <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input onChange={(e)=>setrefereeName(e.target.value)} value={refereeName} name="refereeName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Your Email
                      </label>
                      <input onChange={(e)=>setrefereeEmail(e.target.value)} value={refereeEmail} name="refereeEmail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Email" />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Friend Name
                      </label>
                      <input onChange={(e)=>setname(e.target.value)} value={name} name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="your friend name" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                      Friend Email
                      </label>
                      <input onChange={(e)=>setemail(e.target.value)} value={email} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="department" type="email" placeholder="your friend email" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
                        Course
                      </label>
                      <select
                        name="course"
                        onChange={(e)=>setcourse(e.target.value)} value={course}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="FRONTEND_DEVELOPMENT">FRONTEND_DEVELOPMENT</option>
                        <option value="BACKEND_DEVELOPMENT">BACKEND_DEVELOPMENT</option>
                        <option value="FULLSTACK_DEVELOPMENT">FULLSTACK_DEVELOPMENT</option>
                        <option value="DATA_SCIENTISTS">DATA_SCIENTISTS</option>
                        <option value="MACHINE_LEARNING">MACHINE_LEARNING</option>
                        
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <button onClick={handlesubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
