import Test from './components/Test'

import NavPanel from './components/NavPanel'
import AppGrid from './components/AppGrid'

import logo from './art/logo.png'
import iconTabs from './art/iconTabs.png'
import iconMenu from './art/iconMenu.png'
import iconStats from './art/iconStats.png'

function App() {
  
  // variables
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'

  // app
  return (
    <div className='container'>
      <NavPanel />
      <AppGrid />   
      {/* <Test/>  */}
    </div>
  );
}

export default App;
