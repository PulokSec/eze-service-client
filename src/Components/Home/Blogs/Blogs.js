import React from 'react';
import BlogPost from './BlogPost';
import './Blogs.css'
import blog from '../../images/Blog_post_re_fy5x.png'
const blogData = [
    {
        title : 'Why Record at Professional Audio Studio',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt perferendis placeat reprehenderit.',
        author: 'Admin',
        date : 'April 16,2021'
    },
    {
        title : 'Why Record at Professional Audio Studio',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt perferendis placeat reprehenderit.',
        author: 'Admin',
        date : 'April 16,2021'
    },
    {
        title : 'Why Record at Professional Audio Studio',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt perferendis placeat reprehenderit.',
        author: 'Admin',
        date : 'April 16,2021'
    }
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h2 className="text-styleA text-uppercase">Latest V-Pod Blogs</h2>
               </div>
               <div className="container">
                   <div className="row">
                   <div className="col-md-5 ml-5">
                <img src={blog} alt="" className="img-fluid mt-5 pt-5"/>
               </div>
               <div className="col-md-6">
                   <div className="row">
                   <div className="card mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
                   </div>
               </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Blogs;