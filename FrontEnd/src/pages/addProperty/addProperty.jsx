import React,{useRef, useState} from 'react'
import { Button } from '../../components'
import { IoMdAdd } from "react-icons/io";

function AddProperty() {
  const FileInput =useRef()
  const [img, setImg] =useState('')
  const HandleFileImage =() =>{
    FileInput.current.click()
  }
  return (
    <React.Fragment>
      <div className='bg-zinc-100 flex gap-10 lg:px-28 px-2 md:px-20 sm:px-12  pt-40 pb-9 relative'>
        <div className='w-full  bg-white p-9'>
          <form action="" >

            <div className='flex items-center justify-between py-2'>
              <div className='h-44 w-44 bg-blue-500 rounded'>
                Image principal
              </div>

              <div><h2>Autor</h2></div>
            </div>

            <div className='conteiner-1 flex  gap-5 w-full items-center justify-between'>

              <div className='flex flex-col gap-2 py-2 w-full'>
                <label htmlFor="">Title</label>
                <input type="text" className='w-full bg-blue-300 p-4 rounded' />
              </div>
              <div className='flex flex-col gap-2 py-2 w-full'>
                <label htmlFor="">Price</label>
                <input type="text" className='w-full bg-blue-300 p-4 rounded' />
              </div>

            </div>

            <div className='conteiner-2 flex  gap-5 w-full items-center justify-between'>

              <div className='flex flex-col gap-2 py-2 w-full'>
                <label htmlFor="">Category</label>
                <select name="cars" id="cars">
                  <option value="volvo" >Select a category</option>
                  <option value="Rent">Rent</option>
                  <option value="for_sale">For Sale</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className='flex  gap-2 py-2 w-full'>
                <div>
                  <label htmlFor="">Beds</label>
                  <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                </div>
                <div>
                  <label htmlFor="">Baths</label>
                  <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                </div>
                <div>
                  <label htmlFor=""> Sqft</label>
                  <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                </div>
              </div>

            </div>

            <div className='flex items-center gap-2 py-2 w-full'>
              <div className='w-full'>
                <h2>Galary image</h2>
                <div className='flex  gap-4 items-center'>
                  <div className='bg-zinc-500/10 w-28 h-28 rounded hover:bg-zinc-500/20 cursor-pointer relative overflow-hidden' onClick={HandleFileImage}>
                    <input type="file" accept='image/*' className='hidden' ref={FileInput}  onChange={(e) => setImg(e.target.files[0])}/>
                    <div className='h-full w-full flex items-center justify-center absolute top-0 z-10'>
                      <IoMdAdd />
                    </div>
                    <div className='absolute  h-full w-full top-0 z-5'>
                     {img &&  <img src={URL.createObjectURL(img)} alt={img.name} 
                     className='w-full h-full object-cover'/>}
                    </div>
                   
                  </div>
                  <div className='bg-zinc-500/10 w-28 h-28 rounded hover:bg-zinc-500/20 cursor-pointer relative overflow-hidden' onClick={HandleFileImage}>
                    <input type="file" accept='image/*' className='hidden' ref={FileInput}  onChange={(e) => setImg(e.target.files[0])}/>
                    <div className='h-full w-full flex items-center justify-center absolute top-0 z-10'>
                      <IoMdAdd />
                    </div>
                    <div className='absolute  h-full w-full top-0 z-5'>
                     {img &&  <img src={URL.createObjectURL(img)} alt={img.name} 
                     className='w-full h-full object-cover'/>}
                    </div>
                   
                  </div>
                  <div className='bg-zinc-500/10 w-28 h-28 rounded hover:bg-zinc-500/20 cursor-pointer relative overflow-hidden' onClick={HandleFileImage}>
                    <input type="file" accept='image/*' className='hidden' ref={FileInput}  onChange={(e) => setImg(e.target.files[0])}/>
                    <div className='h-full w-full flex items-center justify-center absolute top-0 z-10'>
                      <IoMdAdd />
                    </div>
                    <div className='absolute  h-full w-full top-0 z-5'>
                     {img &&  <img src={URL.createObjectURL(img)} alt={img.name} 
                     className='w-full h-full object-cover'/>}
                    </div>
                   
                  </div>
                  <div className='bg-zinc-500/10 w-28 h-28 rounded hover:bg-zinc-500/20 cursor-pointer relative overflow-hidden' onClick={HandleFileImage}>
                    <input type="file" accept='image/*' className='hidden' ref={FileInput}  onChange={(e) => setImg(e.target.files[0])}/>
                    <div className='h-full w-full flex items-center justify-center absolute top-0 z-10'>
                      <IoMdAdd />
                    </div>
                    <div className='absolute  h-full w-full top-0 z-5'>
                     {img &&  <img src={URL.createObjectURL(img)} alt={img.name} 
                     className='w-full h-full object-cover'/>}
                    </div>
                   
                  </div>

                  
                 
                </div>
              </div>


              <div>
                <div className='flex  gap-2 py-2 w-full'>
                  <div>
                    <label htmlFor="">Povince</label>
                    <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                  </div>
                  <div>
                    <label htmlFor="">City</label>
                    <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                  </div>
                  <div>
                    <label htmlFor=""> Street</label>
                    <input type="text" className='w-[10.5rem] bg-blue-300 p-4 rounded' />
                  </div>
                </div>
              </div>

            </div>

            <div className='conteiner-4 flex flex-col gap-2 py-2 w-[50%]'>
              <label htmlFor="">Description</label>
              <textarea name="" id="" className=' bg-blue-300 p-4  resize-none  h-56 rounded' >

              </textarea>
            </div>


            <Button text='Add Property' type='submit' />
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export { AddProperty }
