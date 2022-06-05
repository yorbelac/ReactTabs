import logo from './art/logo.png'
import iconTabs from './art/iconTabs.png'
import iconMenu from './art/iconMenu.png'
import iconStats from './art/iconStats.png'
import iconSettings from './art/iconSettings.png'
import iconExperiments from './art/iconExperiments.png'
import {format} from 'date-fns'
import {useState} from 'react'

const NavPanel = ({now, panel, setPanel}) => {

  const todayDay = format(new Date(now).setHours(0,0,0,0), "eeeeeee")
  const todayDate = format(new Date(now), "MMMM dd, yyyy hh:mm aaaaa'm")

  const tabsPanel = () => {
    setPanel('tabsPanel')
  }
  const menuPanel = () => {
    setPanel('menuPanel')
  }
  const statsPanel = () => {
    setPanel('statsPanel')
  }
  const settingsPanel = () => {
    setPanel('settingsPanel')
  }

  const testPanel = () => {
    setPanel('testPanel')
  }

  return (
    <div className="navPanel">
    <img src={logo} alt="" className="navPanelLogo" />
    <div className="navClock"><h2>{todayDay}</h2><p>{todayDate}</p></div>
    <div className="nav">
      <div onClick={tabsPanel} className={`${panel==='tabsPanel' ? 'navActive':''}`}>Tabs<img src={iconTabs} alt="" style={{float:'right'}}/></div>
      <div onClick={menuPanel} className={`${panel==='menuPanel' ? 'navActive':''}`}>Menu<img src={iconMenu} alt="" style={{float:'right'}}/></div>
      <div onClick={statsPanel} className={`${panel==='statsPanel' ? 'navActive':''}`}>Stats<img src={iconStats} alt="" style={{float:'right'}}/></div>
      <div onClick={settingsPanel} className={`${panel==='settingsPanel' ? 'navActive':''}`}>Settings<img src={iconSettings} alt="" style={{float:'right'}}/></div>
      <div onClick={testPanel} className={`${panel==='testPanel' ? 'navActive':''}`}>Experiments<img src={iconExperiments} alt="" style={{float:'right'}}/></div>
    </div>
  </div>
  )
}

export default NavPanel
