// Home.js
import { useState,useRef, useEffect } from "react";
import React from "react";
import { uploadfile } from "./api"
const Home = () => {
    const [file, setFile] = useState('');
    const[result,setResult] = useState('');
    const[loading,setLoading] = useState('');


    const fileInputRef = useRef();

    const onUploadclick = () => {
        fileInputRef.current.click();
    }
    useEffect ( () => {
        const getImage = async() => {
            try{
            if(file) {
                setLoading(true);
             const data = new FormData();
             data.append("name",file.name);
             data.append("file",file);

          let response =   await uploadfile(data);
           setResult(response.path);
            }
        } catch(error){
            console.error("File upload failed:", error);
        }
        finally {
            setLoading(false); 
          }
        }
         getImage();
    },[file])

    const copyToClipboard = () => {
        const l1 = document.createElement("textarea");
        l1.value = result;
        document.body.appendChild(l1);
        l1.select();
        document.execCommand("copy");
        document.body.removeChild(l1);
        alert("Result link copied to clipboard!");



    }
    
    return(
        <div className="flex justify-center items-center h-screen  bg-gradient-to-r from-[#00df9a] to-[#338eff]">
   <div className="p-4 m-60 bg-white border border-teal-500  rounded-md shadow-md sm:w-64 sm:h-48 md:w-80 md:h-56 lg:w-96 lg:h-72 bg-[#00df9a]">
   
 <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700 animate__animated animate__fadeInUp">File Upload</h2>
  <p className="text-gray-600 mb-4 text-center animate__animated animate__fadeInUp animate__delay-1s">Choose a file to upload:</p>

  
    <div className="text-centre">
    <button
  onClick={onUploadclick}
  className={`flex cursor-pointer mx-32 my-5 border  px-4 py-2 rounded bg-blue-500  hover:bg-blue-700 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
  disabled={loading}
>
  Upload
</button>

    </div>
    <div>
    <input
  type="file"
  aria-label="Upload File"
  style={{ display: 'none' }}
  ref={fileInputRef}
  multiple
  onChange={(e) => setFile(e.target.files[0])}
  className="mt-10 ml-5 border bg-white border-blue-100"
/>

      
   </div>
   {result &&(

   
   <div className=" mx-auto max-w-md mt-3 p-4 bg-blue-100 border border-blue-500 rounded-md text-center animate__animated animate__fadeInUp animate__delay-2s">
    <a
      href={result}
      target="_blank"
      className="text-blue-500 hover:text-blue-700 transition duration-300"
    >
      {result}
    </a>
    <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            onClick={copyToClipboard}
          >
            Copy
          </button>
  </div>
  )}
   </div>
        </div>
    )
}
export default Home;

