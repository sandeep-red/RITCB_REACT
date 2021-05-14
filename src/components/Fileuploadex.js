import React,{useState} from 'react'
import Axios from 'axios';
// import readXlsxFile from 'read-excel-file'
function Fileuploadex() {
    const [file,setFile] = useState()
    function change(e){
        let file = e.target.files[0]
        setFile(file)
    }
    function upload(e){
        e.preventDefault()
        let data = new FormData()
        data.append('file',file)
        data.append('name',"flash")
        Axios.post('http://localhost:4000/index/file',data).then(res=>{
            console.log(res.data)
        })
        // readXlsxFile(file).then(({rows,err}) => {
        //     console.log(rows)
        //   })
        // const reader = new FileReader();
        // if (file) {
        //     reader.readAsDataURL(file);
        //   }
        //  reader.onload = (file)=>{
        //     preview.src = file.target.result
        //         console.log(file.target.result)
        //  }
    }
    return (
        <div>
            upload file:
            <input type="file" className="myfile" name="myfile" onChange={change}/><br/>
            <button onClick={upload}>submit</button>
        </div>
    )
}

export default Fileuploadex
