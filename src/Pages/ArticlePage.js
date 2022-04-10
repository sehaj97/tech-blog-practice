import { useParams } from "react-router-dom";
import articleData from "../data"
function ArticlePage() {
    let params = useParams();
    const name =params.name;
    const article = articleData.find(article => article.name === name);
    return( <>
    
    <h1>{article.title}</h1>
    {
        article.content.map((paragraph, key) => {
            return(<p key={key}>
                {paragraph}
            </p>)
        })
    }
    </>);
  }

  export default ArticlePage;