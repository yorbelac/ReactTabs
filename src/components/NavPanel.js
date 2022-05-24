import logo from './art/logo.png'
import iconTabs from './art/iconTabs.png'
import iconMenu from './art/iconMenu.png'
import iconStats from './art/iconStats.png'

const NavPanel = () => {
  return (
    <div className="navPanel">
    <img src={logo} alt="" className="navPanelLogo" />
    <div className="nav">
      <div className="navTabs">Tabs<img src={iconTabs} alt="" style={{float:'right'}}/></div>
      <div className="navMenu">Menu<img src={iconMenu} alt="" style={{float:'right'}}/></div>
      <div className="navStats">Stats<img src={iconStats} alt="" style={{float:'right'}}/></div>
    </div>
  </div>
  )
}

export default NavPanel
