import React,{useState} from 'react'
import MovieCard from './MovieCard'



const MovieList = () =>{
    const [movies,setMovies] = useState([{name:'titanic',imageUrl:'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL58Q1/image?locale=fr-ca&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg',desc:'aueai'},
{name:'spongbob',imageUrl:'https://fr.web.img5.acsta.net/pictures/14/10/30/18/38/374105.jpg',desc:'uheaiai'}])
const [inputData,setInputData] = useState('')
const [formData,setFormData] = useState({name:'',imageUrl:'',desc:''})
    return(
        <>
        <input type="text" onChange={(e)=>setInputData(e.target.value)} />
        <button onClick={(e)=>{setMovies(movies.filter(item=>item.name==inputData))}}>search</button>
        {
            movies.map(item=><MovieCard name={item.name} imageUrl={item.imageUrl} desc={item.desc} />)
        }
<input placeholder="name" type="text" onChange={(e)=>setFormData({...formData,name:e.target.value})} />
<input placeholder="image"  type="text" onChange={(e)=>setFormData({...formData,imageUrl:e.target.value})} />
<input  placeholder="desc"  type="text" onChange={(e)=>setFormData({...formData,desc:e.target.value})} />
<button onClick={(e)=>{setMovies([...movies,formData])}}>ADD</button>
        </>
    )
}


export default MovieList