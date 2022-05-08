import logo from './logo.svg';
import './App.css';
import './style.css';
import photo from "./myParfum.jpg"
function App() {
  return (
    <div className="App">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className='title-red'>Your name here</h1>
<h1 className='title-pink'>My lovely website</h1>
<br />

<img src={photo} />

<br />

<img src="logo192.png" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
