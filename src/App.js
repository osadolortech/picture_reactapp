import React, {useState} from "react";
import './App.css'
import Calm from './animals/calm_cat.jpg'
import Cat from './animals/crazy_cat.jpg'
import Dog from './animals/crazy_dog.jpg'
import Piglet from './animals/piglet.jpg'
import Sloth from './animals/sloth.jpg'
import Squre from './animals/squre.jpg'



const App = () =>{

    const list = document.querySelector('.image')
    const [item,setitems] = useState([])

    // const [images, setimages] = useState(Array.from(list))

    // const fetchmoreimage = () =>{
    //     setimages(images.concat(Array.from(list)))
    // }
    const newpage = () => {
        const page = document.createElement('div')
        page.className = 'image'
        page.innerHTML = list.innerHTML

        setitems(item.append(page))
    }
    
        window.onscroll = ()=>{
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                
                newpage()
            }
        }

    

    return (
        <div className="project-container">
            <header className="header">

                <div className="nav_container"> 
                    <input type="checkbox" className="toggle_nav" for="toggle"></input> 
                    <div className="hambuger"></div>

                    <nav className="nav">
                    
                        <a href="#Home">Home</a>
                        <a href="#Gallary">Gallary</a>
                        <a href="#Contacts">Contacts</a>
                        <a href="#About">About</a>
                    
                    </nav>
                </div>
            </header>
            <div className="scroll">
                <div className="image">
                    <img src={Calm}/>
                </div>
                <div className="image">
                    <img src={Cat}/>
                </div>
                <div className="image">
                    <img src={Dog}/>
                </div>
                <div className="image">
                    <img src={Piglet}/>
                </div>
                <div className="image">
                    <img src={Sloth}/>
                </div>
                <div className="image">
                    <img src={Squre}/>
                </div>

            </div>
            <div className="scroll">
                {/* <InfiniteScroll
                dataLength={images.length}
                next={fetchmoreimage}
                loader={<a>Loading...</a>}
                scrollableTarget="scroll"
                >
                    {images.map((i,index)=>(
                       <div key={index}>
                           div - #{index}
                       </div> 
                    ))}
                </InfiniteScroll> */}
            </div>
           
        </div>
    )
}
export default App