import LearnAmazons from "./posts/LearnAmazons.mdx"
import { useLoaderData } from "react-router-dom"

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
            {blogpost()}
      </div>
    );
  }
  
export default Blog;
export { blogPostLoader };