import React from 'react';
const BlogPost = (props) => {
    const {title, description, author, date} = props.blog;
    return (
        <div className="card shadow-sm mt-3">
            <div className="card-header d-flex  align-items-center">
                <div>
                <h6 className="text-styleB">{author}<br/><span className="text-styleA">{date}</span></h6>
                </div>
                <div className="card-body">
                <h5>{title}</h5>
                 <p className="card-text text-secondary">{description}</p>
                </div>
            </div>
       </div>
    );
};

export default BlogPost;