import logo from './assets/image.jpeg';
import React from 'react';
import { useRef,useState,useEffect } from 'react';
import './App.css';
import { uploadFile } from './API/apis';
function App() {
  const [file,setFile] = useState('');
  const [result,setResult]=useState('');
  const onUploadClick=()=>{
    fileinput.current.click();
  }
  useEffect(()=>{
    const getImage =async()=>{
      if(file){
        const  data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response =  await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[])
  const fileinput = useRef();
  return (<div className='container'>
    {/* <img src={logo} alt="wallpaper" /> */}
    <div className='wrapper'>
    <h1>SendSpace</h1>
    <p>Upload the file and share the download link!!</p>
    <button onClick={()=>onUploadClick()}>Upload file</button>
    <input type="file"
    ref = {fileinput}
    style={{display:'none'}}
    onChange={(e)=>setFile(e.target.files[0])}
    />
    <a href={result} target='_blank'>{result}</a>
    </div>
  </div>
  );
}

export default App;
