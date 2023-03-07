import LearnAmazons from "./posts/LearnAmazons.mdx"
import "./blog.css"
import { useLoaderData } from "react-router-dom"
import Header from "../components/Header.js"

const blogposts = {
    "learn-amazons": LearnAmazons,
}

const blogPostLoader = ({params}) => {
    if(!params.id){throw new Error("expected ID parameter in blogPostLoader but got none")}
    let blogpost = blogposts[params.id]
    if(!blogpost){throw new Error("could not find blog post in the list of all posts")}
    return blogpost;
}

function Blog() {
    let blogpost = useLoaderData();
    return (
      <div>
        <div className="vertical-center-child-div blog">
          <div className="narrow">
                {blogpost()}
          </div>
        </div>
      </div>
    );
  }
  
export default Blog;
export { blogPostLoader };