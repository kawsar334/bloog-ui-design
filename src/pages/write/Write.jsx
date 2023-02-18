import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./write.scss"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
const Write = () => {
    const [value, setValue] = useState('');
    console.log(value)
  return (
    <div className="write">
        <Navbar />
        <div className="writeWrapper">

<div className="content">
    <input type="text" name="" id=""placeholder="Title " />
    <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
    </div>
</div>


<div className="menu">
    <div className="item">
        <h1>Publish</h1>
        <span><b>Status:</b>Draft </span>
        <span><b>Visibility:</b> Public </span>
        <label htmlFor="file" className="file">Upload image.</label>
        <input type="file" name="" id="file" style={{display:"none"}}/>
        <div className="buttons">
        <button>Save as a Draft </button>
        <button>Update </button>
        </div>
    </div>
    <div className="item">
        <h1>Category </h1>
                    <div className="cat">

                      <input type="radio" name="cat"value="art" id="art" />
                      <label htmlFor="art">Art</label>
                    </div>
                      <div className="cat">
                      <input type="radio" name="cat" value="technology" id="technology" />
                      <label htmlFor="technology">Technology</label>
                      </div>
                      <div className="cat">
                      <input type="radio" name="cat" value="scince" id="scince" />
                      <label htmlFor="scince">Scince</label>
                      </div>
                      <div className="cat">
                      <input type="radio" name="cat" value="cinema" id="cinema" />
                      <label htmlFor="cinema">Cinema</label>
                      </div>

                      <div className="cat">
                      <input type="radio" name="cat" value="design" id="design" />
                      <label htmlFor="design">Design</label>
                      </div>
                      <div className="cat">
                      <input type="radio" name="cat" value="food" id="food" />
                      <label htmlFor="food">Food</label>
                      </div>

    </div>
</div>


        </div>


        <Footer />
    </div>
  )
}

export default Write