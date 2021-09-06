import React,{useState} from 'react'
import BlogsApi from './api/BlogApi'

const Blogs = () => {
    const [blogApi, setBlogApi] = useState(BlogsApi)
    return (
        <>
          <div className="container my-4">
                <div className="row mb-2">
                {blogApi.map((curElement)=>{
                    const {id,name,subheading,date,description,image}=curElement;
                   return (
                    <div className="col-md-6" key={id}>
                        <div
                            className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">{name}</strong>
                                <h3 className="mb-0">{subheading} </h3>
                                <div className="mb-1 text-muted">{date}</div>
                                <p className="card-text mb-auto">{description}</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" src={image} width="230" height="250"
                                    alt="bloggerImg" />
                            </div>
                        </div>
                    </div>
                   )
                })}
                    
                    
                </div>
            </div>
           
        </>
    )
}

export default Blogs
