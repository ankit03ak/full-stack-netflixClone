import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, PlayCircleOutline, Report, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
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
                <Link to="./" className='link'>  
                <li className="sidebarListItem active">
                    <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <li className="sidebarListItem">
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className='sidebarIcon'/>
                    Sales
                </li>
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
                <li className="sidebarListItem">
                    <BarChart className='sidebarIcon'/>
                    Report
                </li>
            </ul>
            <h2 className="sidebarTitle">Notification</h2>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MailOutline className='sidebarIcon'/>
                    Mail
                </li>
                <li className="sidebarListItem">
                    <DynamicFeed className='sidebarIcon'/>
                    Feesback
                </li>
                <li className="sidebarListItem">
                    <ChatBubbleOutline className='sidebarIcon'/>
                    Messages
                </li>
            </ul>
            <h2 className="sidebarTitle">Staff</h2>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon'/>
                    Manage
                </li>
                <li className="sidebarListItem">
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <Report className='sidebarIcon'/>
                    Reports
                </li>
            </ul>
            
           
        </div>
      </div>
    </div>
  )
}

export default Sidebar
