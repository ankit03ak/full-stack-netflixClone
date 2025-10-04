import { LineStyle, MovieCreationOutlined, PermIdentity, PersonAddOutlined, PlayCircleOutline, PlaylistAddOutlined, Timeline, } from '@mui/icons-material'
import './sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h2 className="sidebarTitle">DashBoard</h2>
            <ul className="sidebarList">
                <Link to="/" className='link'>  
                <li className={`sidebarListItem ${isActive('/')}`}>
                    <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <Link to="/analytics" className='link'> 
                <li className={`sidebarListItem ${isActive('/analytics')}`}>
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                </Link>
            </ul>
            <h2 className="sidebarTitle">Quick Home</h2>
            <ul className="sidebarList">
                <Link to="/users" className='link'>
                <li className={`sidebarListItem ${isActive('/users')}`}>
                    <PermIdentity className='sidebarIcon'/>
                    Users
                </li>
                </Link>
                <Link to="/movies" className='link'>
                <li className={`sidebarListItem ${isActive('/movies')}`}>
                    <PlayCircleOutline className='sidebarIcon'/>
                    Movies
                </li>
                </Link>
                <Link to="/lists" className='link'>
                <li className={`sidebarListItem ${isActive('/lists')}`}>
                    <ListIcon className='sidebarIcon'/>
                    Lists
                </li>
                </Link>
            </ul>
            <h2 className="sidebarTitle">Add Items</h2>
            <ul className="sidebarList">
                <Link to="/newuser" className='link'> 
                <li className={`sidebarListItem ${isActive('/newuser')}`}>
                    <PersonAddOutlined className='sidebarIcon'/>
                    Add new user
                </li>
                </Link>
                <Link to="/newproduct" className='link'> 
                <li className={`sidebarListItem ${isActive('/newproduct')}`}>
                    <MovieCreationOutlined  className='sidebarIcon'/>
                    Create new movie
                </li>
                </Link>
                <Link to="/newlist" className='link'> 

                <li className={`sidebarListItem ${isActive('/newlist')}`}>
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
