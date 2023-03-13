import LearnAmazons from "./posts/LearnAmazons.mdx"
import "./blog.css"
import { useLoaderData } from "react-router-dom"
import config from "../data.json"
import Header from "../components/header.js"

const blogposts = {
    "learn-amazons": LearnAmazons,
}

const blogPostLoader = ({params}) => {
    if(!params.id){throw new Error("expected ID parameter in blogPostLoader but got none")}
    let blogpost = blogposts[params.id]
    if(!blogpost){blogpost = null;}
    return blogpost;
}

function Blog() {
    let blogpost = useLoaderData();
    return (
      <div>
        <div className="vertical-center-child-div blog">
          <div className="narrow">
            {
              blogpost ? 
              blogpost():
              <div>
                <h1>Blog post not found!</h1>
                <h5>oops!</h5>
                <a className="rainbow-link" href={"mailto:" + config["email"]}>Notify me</a>, or <a className="rainbow-link" href="/">return to home</a>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
  
export default Blog;
export { blogPostLoader };