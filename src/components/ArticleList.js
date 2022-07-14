// import React from "react";
// ArticleList function
import Article from "./Article";

function ArticleList({ posts }) {
    const elementArray = posts.map((post) => (
       
               <Article
                    key = {post.id}
                    title = {post.title}
                    date = {post.date}
                    preview = {post.preview}
                    minutes = {post.minutes}
                 />
    ));
    return <main> {elementArray} </main> ;
}

export default ArticleList;

