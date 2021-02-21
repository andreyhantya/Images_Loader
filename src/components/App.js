import React, {useState} from 'react';
import './App.scss';
import backgroundImg from '../images/default_Icon.png';


function App () {

    const [drag, setDrag] = useState(false);
    const [url, setUrl]   = useState(backgroundImg);

    function q (e) {
        let file = e.target.files[0];

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function() {
           const img = new Image();
           img.src = reader.result;
            setUrl(img.src);
        };

        reader.onerror = function() {
            console.log(reader.error);
        };

    }
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)

    }
    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false)
    }
    function onDropHandler(e){
        e.preventDefault();

        let file = e.dataTransfer.files[0]

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function() {
            const img = new Image();
            img.src = reader.result;
            setUrl(img.src);
        };

        reader.onerror = function() {
            console.log(reader.error);
        };

        setDrag(false)
    }


    return(
        <div className='app'>
            <div className='app-header'>
                <div className="app-header__title">Company Logo</div>
                <div className="app-header__subtitle">Logo should be square, 100px size and in png, jpeg file format.</div>
            </div>

            <div className="app-body">

           <div className={drag? 'upload-window drag' : 'upload-window'}
                     onDragStart = { e => dragStartHandler(e) }
                     onDragLeave = { e => dragLeaveHandler(e) }
                     onDragOver  = { e => dragStartHandler(e) }
                     onDrop      = { e => onDropHandler(e) }>

               <span className="ouro ouro3">
               <img src={url} alt=""/>
                            <span className="left">
                                <span className={drag ? 'anim': null}>&nbsp;</span>
                            </span>
                            <span className="right">
                                <span className={drag ? 'anim': null}>&nbsp;</span>
                            </span>
                       </span>
                    <span className='title'>Drag & drop here</span>
                    <span className='subtitle'>- or -</span>
                    <label className='link' htmlFor="loadFile">Select file to upload</label>
                    <input  type="file" id="loadFile" onChange={(e)=> q(e)}/>
                </div>




                </div>

        </div>
    )
}

export default App;