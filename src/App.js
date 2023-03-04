// import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'
// import UserProfile from "./UserProfile";
// const initialUserDetailsList = [
//   {
//     uniqueNo: 1,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//     name: 'Esther Howard',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 2,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Floyd Miles',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 3,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
//     name: 'Jacob Jones',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 4,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
//     name: 'Devon Lane',
//     role: 'Software Developer'
//   }
// ]
// class App extends Component {
//    state = {searchInput:'', usersDetailsList:initialUserDetailsList}
//    deleteUser = (uniqueNo) => {
//     const {usersDetailsList} = this.state
//     const filteredData = usersDetailsList.filter(each1 => each1.uniqueNo !== uniqueNo)
//     this.setState({
//       usersDetailsList:filteredData
//     })
//    }
//    onChangeSerachInput = (event) => {
//     console.log(event.target.value)
//     this.setState({
//       searchInput:event.target.value
//     })
//    }
//    render() {
//     const {searchInput, usersDetailsList} = this.state
//     const searchResults = usersDetailsList.filter(eachUser =>
//       eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
//     )
//     return(
//        <div>
//         <h1>Users List</h1>
//         <input
//         type="search"
//         value={searchInput}
//         onChange={this.onChangeSerachInput}
//         />
//         <ul>
//           {
//             searchResults.map(each => (
//            <UserProfile userDetails={each}
//            key={each.uniqueNo}
//            deleteUser={this.deleteUser}
//            />
//             ))
//           }
//         </ul>
//        </div>
//     )
//    }
  
// }

// import {Component} from 'react'
// import TabItem from './Tabitem'
// import Header from './Header'
// import ProjectItem from './Projectitem'
// import './App.css'
// const tabsList = [
//   {tabId: 'STATIC', displayText: 'Static'},
//   {tabId: 'RESPONSIVE', displayText: 'Responsive'},
//   {tabId: 'DYNAMIC', displayText: 'Dynamic'},
// ]
// const projectsList = [
//   {
//     projectId: 0,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
//     title: 'Music Page',
//     description:
//       'The music page enables the users to browse through the images of all-time favorite music albums.',
//   },
//   {
//     projectId: 1,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
//     title: 'Tourism Website',
//     description:
//       'A tourism website enables the user to browse through the images of popular destinations.',
//   },
//   {
//     projectId: 2,
//     category: 'STATIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
//     title: 'Advanced Technologies',
//     description:
//       'A website that gives you a basic understanding of Advanced Technologies.',
//   },
//      {
//        projectId: 3,
//        category: 'STATIC',
//        imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
//        title: 'Happy Meals',
//        description: 'Discover the best foods in over 1,000 restaurants.',
//      },
//   {
//     projectId: 4,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
//     title: 'VR Website',
//     description:
//       'VR Website enables users to explore AR and VR Products and Industry happenings.',
//   },
//   {
//     projectId: 5,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
//     title: 'Food Munch',
//     description: 'Food Much Website is a user-centric food tech website.',
//   },
//   {
//     projectId: 6,
//     category: 'RESPONSIVE',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
//     title: 'Portfolio',
//     description:
//       'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
//   },
//  {
//    projectId: 7,
//    category: 'RESPONSIVE',
//    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
//    title: 'Design',
//    description:
//      'A website to showcase the best features and give more information about the Design tool.',
//  },
//   {
//     projectId: 8,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
//     title: 'Speed Typing Test',
//     description:
//       'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
//   },
//   {
//     projectId: 9,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
//     title: 'Random Joke Page',
//     description:
//       'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
//   },
//   {
//     projectId: 10,
//     category: 'DYNAMIC',
//     imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
//     title: 'Sizing An Image',
//     description:
//       'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
//   },
// ]
// class App extends Component {
//   state = {activeTabId:tabsList[0].tabId}
//   getFilteredProjects = () => {
//     const {activeTabId} = this.state
//     const filteredProjects = projectsList.filter(eachProject => eachProject.category === activeTabId)
//     return filteredProjects
//   }
//   clickTabItem = tabValue => {
//     this.setState({activeTabId:tabValue})
//   }
//   render(){
//   const {activeTabId} = this.state
//   const filteredProjects = this.getFilteredProjects()
//     return(
//       <div className="app-container">
//         <Header />
//         <h1 className="title">Projects</h1>
//         <p className="description">
//           Your skills and achievements showcase your strengths and abilities.
//           Speak about any new skills or software you learnt to perform the
//           project responsibilities.
//         </p>

//         <ul className="tabs-container">
//           {tabsList.map(tabDetails => (
//             <TabItem
//               key={tabDetails.tabId}
//               tabDetails={tabDetails}
//               clickTabItem={this.clickTabItem}
//               isActive={activeTabId === tabDetails.tabId}
//             />
//           ))}
//         </ul>

//         <ul className="project-list-container">
//           {filteredProjects.map(projectDetails => (
//             <ProjectItem
//               key={projectDetails.projectId}
//               projectDetails={projectDetails}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }
// export default App
// <------ contact list ------->


// import ContactItem from './Contactitem'

// import './App.css'

// const initialContactsList = [
//   {
//     id: uuidv4(),
//     name: 'Ram',
//     mobileNo: 9999988888,
//     isFavorite: false,
//   },
//   {
//     id: uuidv4(),
//     name: 'Pavan',
//     mobileNo: 8888866666,
//     isFavorite: true,
//   },
//   {
//     id: uuidv4(),
//     name: 'Nikhil',
//     mobileNo: 9999955555,
//     isFavorite: false,
//   },
// ]

// class App extends Component {
//   state = {
//     contactsList: initialContactsList,
//     name: '',
//     mobileNo: '',
//   }

//   toggleIsFavorite = id => {
//     this.setState(prevState => ({
//       contactsList: prevState.contactsList.map(eachContact => {
//         if (id === eachContact.id) {
//           return {...eachContact, isFavorite: !eachContact.isFavorite}
//         }
//         return eachContact
//       }),
//     }))
//   }

//   onAddContact = event => {
//     event.preventDefault()
//     const {name, mobileNo} = this.state
//     const newContact = {
//       id: uuidv4(),
//       name,
//       mobileNo,
//       isFavorite: false,
//     }

//     this.setState(prevState => ({
//       contactsList: [...prevState.contactsList, newContact],
//       name: '',
//       mobileNo: '',
//     }))
//   }

//   onChangeMobileNo = event => {
//     this.setState({mobileNo: event.target.value})
//   }

//   onChangeName = event => {
//     this.setState({name: event.target.value})
//   }

//   render() {
//     const {name, mobileNo, contactsList} = this.state
//     return (
//       <div className="app-container">
//         <div className="responsive-container">
//           <h1 className="heading">Contacts</h1>
//           <form className="contact-form-container" onSubmit={this.onAddContact}>
//             <input
//               value={name}
//               onChange={this.onChangeName}
//               className="input"
//               placeholder="Name"
//             />
//             <input
//               className="input"
//               value={mobileNo}
//               onChange={this.onChangeMobileNo}
//               placeholder="Mobile Number"
//             />
//             <button type="submit" className="button">
//               Add Contact
//             </button>
//           </form>
//           <ul className="contacts-table">
//             <li className="table-header">
//               <p className="table-header-cell name-column">Name</p>
//               <hr className="separator" />
//               <p className="table-header-cell">Mobile Number</p>
//             </li>
//             {contactsList.map(eachContact => (
//               <ContactItem
//                 key={eachContact.id}
//                 contactDetails={eachContact}
//                 toggleIsFavorite={this.toggleIsFavorite}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }


// <----  clocl ---->
// import Clock from './Clock'
// class App extends Component {
//   state = {
//     showClock: false
//   }
//   onToggleClock = () => {
//     this.setState( prevState => {
//       const { showClock } = prevState
//       return {
//         showClock: !showClock
//       }
//     })
//   }
//   render() {
//     const { showClock } = this.state
//     return (
//       <div className="app-container">
//         <button onClick={ this.onToggleClock } type="button" className="toggle-button">
//           {showClock ? 'Show Clock' : 'Hide Clock'}
//         </button>
//         {showClock && <Clock />}
//       </div>
//     )
//   }
// }
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Header1 from './Header1'
// import About from './About'
// import Contact from './Contact'
// import BlogsList from './BlogList'
// import BlogItemDetails from './BlogitemDetails'
// import NotFound from './NotFound'
// const App = () => {
//   return (
//   <div>
  
 
//     <Router>
//     <Header1/>
//       <Routes>
//     <Route exact path="/" element={<BlogsList />}/>
//     <Route exact path ="/about" element={<About />}/>
//     <Route exact path ="/contact" element={<Contact />}/>
//     <Route exact path ="/blogs/:id" element={<BlogItemDetails />}/>
//     <Route element={<NotFound />}/>
//     </Routes>
//     </Router>
//     </div>
// )}
// export default App
// import Counter from "./usestate"
// const App = () => {
//   return <Counter/>
// }
// export default App
import Header1 from "./Header1"
import Dashboard from "./dashboard"
import Register from './Register'
import Login from './Login'
import IplData from './iplData'
const App = () => {
  return (
    <div>
      <Router>
        <Header1/>
       <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/ipldata" element={<IplData/>}/>
       </Routes>
      </Router>
    </div>
 
  )
}
export default App