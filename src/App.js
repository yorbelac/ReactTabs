import Header from './components/Header'
import Tabs from './components/Tabs'
import logo from './art/logo.png'
import iconTabs from './art/iconTabs.png'
import iconMenu from './art/iconMenu.png'
import iconStats from './art/iconStats.png'

function App() {
  
  // variables
  const author = 'Caleb Roy'
  const client = 'Jalal Alkhatib'
  const company = 'Bites & Pipes'
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  // app
  return (
    <div className='container'>
      <div className="navPanel">
        <img src={logo} alt="" className="navPanelLogo" />
        <div className="nav">
          <div className="navTabs">Tabs<img src={iconTabs} alt="" style={{float:'right'}}/></div>
          <div className="navMenu">Menu<img src={iconMenu} alt="" style={{float:'right'}}/></div>
          <div className="navStats">Stats<img src={iconStats} alt="" style={{float:'right'}}/></div>
        </div>
      </div>
      <div className='appGrid'>
        <div className='header'>
          <div className="headerTitle"><h1>TABS</h1></div>
        </div>
        <div className="tabSelectPanel">
          <div className="tabSelectHeader">
            <div className="tabSelectHeaderDate">Today is: {today}</div>
            <div className="tabSelectHeaderTotal">$25.47</div>
          </div>
          <div className="tabSelectRows">
          <div className="tabSelectRow">
              <div className="tabSelectRowCheck"><input type="checkbox" className='checker'/></div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck" style={{backgroundColor:'#404040', color:'white'}}>X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal" style={{backgroundColor:'#404040', color:'white'}}>$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
                        <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
            <div className="tabSelectRow">
              <div className="tabSelectRowCheck">X</div>
              <div className="tabSelectRowName">Caleb</div>
              <div className="tabSelectRowTotal">$120.00</div>
            </div>
          </div>
        </div>
        <div className="tabPanel">
          <div className="tabHeader">
            <div className="tabHeaderName">Caleb Roy</div>
            <div className="tabHeaderTotal">$487.26</div>
          </div>
          <div className="tabRows">
          <div className="tabRow">
               <div className="tabRowDate" style={{backgroundColor:'#404040', color:'white'}}>5/17/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal" style={{backgroundColor:'#404040', color:'white'}}>$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate" style={{backgroundColor:'#404040', color:'white'}}>5/17/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal" style={{backgroundColor:'#404040', color:'white'}}>$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate" style={{backgroundColor:'#404040', color:'white'}}>5/17/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal" style={{backgroundColor:'#404040', color:'white'}}>$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate" style={{backgroundColor:'#404040', color:'white'}}>5/17/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal" style={{backgroundColor:'#404040', color:'white'}}>$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
             <div className="tabRow">
               <div className="tabRowDate">5/16/2022</div>
               <div className="tabRowItem">Food</div>
               <div className="tabRowTotal">$25.14</div>
             </div>
           </div>
        </div>
        <div className="tabOrderPanel">
          <div className="tabOrderMenu">
            <div className="tabOrderDropDown">
              <div className="tabOrderDropDownName">Food</div>
              <div className="tabOrderDropDownArrow">v</div>
            </div>
            <div className="tabOrderDropDown">
              <div className="tabOrderDropDownName">Hot Wings 10x</div>
              <div className="tabOrderDropDownArrow">v</div>
            </div>
            <div className="tabOrderDropDown">
              <div className="tabOrderDropDownName">Danny Sauce</div>
              <div className="tabOrderDropDownArrow">v</div>
            </div>
            <div className="tabOrderButtons">
              <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
              <div className="tabOrderTotal">$16.55</div>
              <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
            </div>
          </div>
          <div className="tabPaymentButtons">
            <div className="tabButton" style={{fontSize:'3em', lineHeight:'70px', backgroundColor:'#34A853'}}>$</div>
            <div className="tabButton" style={{fontSize:'2em', lineHeight:'70px', backgroundColor:'#133e1f'}}>Tip</div>
            <div className="tabButton" style={{fontSize:'1.3em', lineHeight:'70px', backgroundColor:'#133e1f'}}>ToGo</div>
          </div>
          <div className="quicklistPanel">
            <div className="quicklistHeader">Popular Menu Items</div>
            <div className="quicklist">
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
              <div className="quicklistItem">
                <div className="tabButton" style={{backgroundColor:'#34A853'}}>+</div>
                <div className="quicklistItemName">Fish Pizza</div>
                <div className="quicklistItemPrice">$12.99</div>
                <div className="tabButton" style={{backgroundColor:'#EA4335'}}>-</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer"><h2>Footer</h2></div> */}
      </div>
      
    </div>
  );
}

export default App;
