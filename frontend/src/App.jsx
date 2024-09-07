import logo from './image.jpeg';
import { useRef,useState,useEffect } from 'react';
import './App.css';

function App() {
  const [file,setFile] = useState('');
  const onUploadClick=()=>{
    fileinput.current.click();
  }
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
    </div>
  </div>
  );
}

export default App;
