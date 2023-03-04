import { Component } from 'react'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
class BlogsList extends Component {
    state = {  blogsData: [] }
  
    componentDidMount() {
      this.getBlogsData()
    }
  
    getBlogsData = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const statusCode = await response.statusCode
      console.log(statusCode,"code")
      const data = await response.json()
      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      this.setState({ blogsData: formattedData })
    }
  
    render() {
      const { blogsData} = this.state
      
  
      return (
        <div className="blog-list-container">
          { 
        
            blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
          }
        </div>
      )
    }
  }
  
  export default BlogsList