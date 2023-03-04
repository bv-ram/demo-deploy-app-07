import { Component } from 'react'
import axios from 'axios';
import withRouter from '../hoc/withRouter';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
// import './index.css'

class BlogItemDetails extends Component {
    state = { blogData: {}, id: null};
    // constructor(props){
    //     console.log('details props',props)
    //     super(props)
  
    // }
  componentDidMount() {
    // this.getBlogItemData()
  }

  getBlogItemData = async () => {
    console.log('Props:', this.props)
    console.log('get state id',this.state.id);
    console.log(this.props.params.id,"id");
    let {id}=this.props.params;
    if(this.state.id !== id){
        const response = await axios.get(`https://apis.ccbp.in/blogs/${id}`)
        const data = response.data;
        console.log(data,"data")
        const updatedData = {
          title: data.title,
          imageUrl: data.image_url,
          content: data.content,
          avatarUrl: data.avatar_url,
          author: data.author,
        }
        this.setState({ blogData: updatedData, id })
        
    }
  }

  renderBlogItemDetails = () => {
    this.getBlogItemData();
    const { blogData } = this.state
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="blog-info">
        
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {

    return (
      <div className="blog-container">
        {
          this.renderBlogItemDetails()
    }
      </div>
    )
  }
}

// export default BlogItemDetails
export default withRouter(BlogItemDetails);
