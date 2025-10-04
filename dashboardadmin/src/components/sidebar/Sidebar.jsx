import { LineStyle, MovieCreationOutlined, PermIdentity, PersonAddOutlined, PlayCircleOutline, PlaylistAddOutlined, Timeline, } from '@mui/icons-material'
import './sidebar.css'
import { Link } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h2 className="sidebarTitle">DashBoard</h2>
            <ul className="sidebarList">
                <Link to="/" className='link'>  
                <li className="sidebarListItem active">
                    <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <Link to="/analytics" className='link'> 
                <li className="sidebarListItem">
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                </Link>
            </ul>
            <h2 className="sidebarTitle">Quick Home</h2>
            <ul className="sidebarList">
                <Link to="/users" className='link'>
                <li className="sidebarListItem">
                    <PermIdentity className='sidebarIcon'/>
                    Users
                </li>
                </Link>
                <Link to="/movies" className='link'>
                <li className="sidebarListItem">
                    <PlayCircleOutline className='sidebarIcon'/>
                    Movies
                </li>
                </Link>
                <Link to="/lists" className='link'>
                <li className="sidebarListItem">
                    <ListIcon className='sidebarIcon'/>
                    Lists
                </li>
                </Link>
            </ul>
            <h2 className="sidebarTitle">Add Items</h2>
            <ul className="sidebarList">
                <Link to="/newuser" className='link'> 
                <li className="sidebarListItem">
                    <PersonAddOutlined className='sidebarIcon'/>
                    Add new user
                </li>
                </Link>
                <Link to="/newproduct" className='link'> 
                <li className="sidebarListItem">
                    <MovieCreationOutlined  className='sidebarIcon'/>
                    Create new movie
                </li>
                </Link>
                <Link to="/newlist" className='link'> 

                <li className="sidebarListItem">
                    <PlaylistAddOutlined  className='sidebarIcon'/>
                    Create new list
                </li>
                </Link>
            </ul>   
        </div>
      </div>
    </div>
  )
}

export default Sidebar
