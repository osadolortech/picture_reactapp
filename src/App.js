import React, { useState } from "react";
import './App.css'
import Calm from './animals/calm_cat.jpg'
import Cat from './animals/crazy_cat.jpg'
import Dog from './animals/crazy_dog.jpg'
import Piglet from './animals/piglet.jpg'
import Sloth from './animals/sloth.jpg'
import Squre from './animals/squre.jpg'



const App = () =>{

    // const list = document.querySelector('.image')
    const [photo, setphoto] = useState('')
    const [item,setitems] = useState([
        {
        id: 1,
        image: Calm,
        name: "Calm Cat"
        },
        {
            id: 2,
            image: Dog,
            name: "Sleppy Dog"
        },
        {
            id: 3,
            image: Cat,
            name: "Crazy Cat"
        },
        {
            id: 4,
            image: Piglet,
            name: "Piglet"
        },
        {
            id: 5,
            image: Sloth,
            name: "Sloth"
        },
        {
            id: 6,
            image: Squre,
            name: "Squre"
        }
        
])

const filter = (e) =>{
    const keyword = e.target.value 
    setphoto(keyword)
}

let imagesearch = item.filter(user=>{
    return Object.keys(user).some(key=> 
            user[key].toString().toLowerCase().includes(photo.toString().toLowerCase())
        )
})
// const [pics,setPics] = useState("")




    // const [images, setimages] = useState(Array.from(list))

    // const fetchmoreimage = () =>{
    //     setimages(images.concat(Array.from(list)))
    // }
    // const newpage = () => {
    //     const page = document.createElement('div')
    //     page.className = 'image'
    //     page.innerHTML = list.innerHTML

    //     setitems(item.append(page))
    // }
    
    //     window.onscroll = ()=>{
    //         if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                
    //             newpage()
    //             setitems()
    //         }
    //     }

    // useEffect(() => {
    //     onsearch()
    // }, [pics])


    // const onsearch = () =>{
    //     pics.map((pic)=>{
    //         return Object.values(pic).join('').toLowerCase().includes(pics.toLowerCase())
    //     });

    //     setPics(pics)
    // }

    // useEffect(()=>{
    //     onsearch()
    // }, [])

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
                    <input type="text" placeholder="type to seach" value={photo} onChange={filter.bind(this)} />
                    </nav>
                </div>
            </header>
            {/* <div className="scroll">
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

            </div> */}
            {/* <div className="scroll"> */}
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
            {/* </div> */}
             
           {imagesearch.map((it) => {
               return(
                <div className="scroll">
               <img src={it.image}  key={it.id} alt="animal"/>
               <h4 className="nametag">{it.name}</h4>
               </div>
              
            
               )
           })}

           {/* {item && item.length> 0 ?(
               item.map((user)=>{
                return(
                <div className="scroll">
                <img src={user.image} key={user.id} alt="animal"/>
                <h4 className="nametag">{user.name}</h4>
                </div>
                )
               })
           )} */}
        </div>
    )
}
export default App