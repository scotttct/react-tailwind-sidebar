import React from 'react'

export default function Main() {
  return (
    <>
    
    <div className="container bg-seafoam-500 text-center py-3 ">
        
            <h1 className="text-seafoam-100 font-bold"> Main Content Goes Here</h1>
     
      
    </div>
    <div className="container bg-seafoam-500 text-center py-3 drop-shadow-lg">
        <div className="gap-8 columns-3 text-center  ">
           
                <div className=" bg-seafoam-200 text-seafoam-900 font-semibold py-4 ">
                    <heading>Title</heading>
                    
                    <ul className="text-left pl-10">
                        <li className="h-fit">
                           <button>Link</button>
                        </li>
                        <li className="h-fit">
                           <button>Link</button>
                        </li>
                        <li className="h-fit">
                           <button>Link</button>
                        </li>
                    </ul>
                </div>
           
           
                <div className="container bg-seafoam-200 text-seafoam-900 font-semibold ">
                    <heading className="py-3">Title</heading>
                    <main>Main info</main>
                </div>
            
                <div className="container bg-seafoam-200 text-seafoam-900 font-semibold">
                    <heading className="py-3">Title</heading>
                    <main>Main info</main>
                </div>
         
        </div>
      
    </div>
    </>
  )
}
