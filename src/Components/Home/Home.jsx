import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.css'
// import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [search,setSearch]=useState("")
    const [data,setData]=useState([])
    const [flag,setflag]=useState(false)
    const [count,setCount]=useState("")
    const [page,setPage]=useState("")
    const [totalCount,setTotalCount]=useState("")
    const [totalPage,setTotalPages]=useState("")
    useEffect(()=>{
      axios.get(`https://api.quotable.io/search/quotes?query=${search}`)
      .then((res)=>{
        console.log(res)
        setData(res.data.results)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[flag])
    const handleSubmit=()=>{
       setflag(!flag)   
    }
    const addFav=(id)=>{
        alert("Added To Favourite")
    }
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="search d-flex align-items-center justify-content-center">
                <label for="search">Search</label>
                <input type="text" class="form-control" id="search" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search Quotes" />
                <button onClick={handleSubmit} class="btn btn-light">Search</button>
            </div>
        </div>
    </div>

    {data.length > 0 ?
        <div class="row">
            {data.map((e) => {
                return (
                    <div key={e.id} class="col-md-4">
                        <div class="card quote_card">
                            <div class="card-body">
                                <p class="card-text"><i>{e.content}</i></p>
                                <p class="card-text">-{e.author}</p>
                                <button onClick={() => { addFav(e.id) }} class="btn btn-danger">❤️</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        :
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="noData">No Data, Please Search</div>
            </div>
        </div>
    }
</div>
  )
}

export default Home