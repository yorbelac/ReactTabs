import logo from './art/logo.png'
import iconTabs from './art/iconTabs.png'
import iconMenu from './art/iconMenu.png'
import iconStats from './art/iconStats.png'
import iconSettings from './art/iconSettings.png'
import {format} from 'date-fns'

const NavPanel = ({now}) => {

const todayDay = format(new Date(now).setHours(0,0,0,0), "eeeeeee")
const todayDate = format(new Date(now).setHours(0,0,0,0), "MMMM dd, yyyy")

  return (
    <div className="navPanel">
    <img src={logo} alt="" className="navPanelLogo" />
    <div className="navClock"><h2>{todayDay}</h2><p>{todayDate}</p></div>
    <div className="nav">
      <div className="navTabs">Tabs<img src={iconTabs} alt="" style={{float:'right'}}/></div>
      <div className="navMenu">Menu<img src={iconMenu} alt="" style={{float:'right'}}/></div>
      <div className="navStats">Stats<img src={iconStats} alt="" style={{float:'right'}}/></div>
      <div className="navStats">Settings<img src={iconSettings} alt="" style={{float:'right'}}/></div>
    </div>
  </div>
  )
}

export default NavPanel
