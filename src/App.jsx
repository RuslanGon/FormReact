

import './App.css'

import MailBox from './component/MailBox/MailBox'
import MeestExpressUser from './component/MailBox/meestExpress.json'





function App() {
 



  return (
   <div>
    <MailBox boxTitle="Meest Express" mailBoxCounter={5} boxUsers={MeestExpressUser } />
    
    
      
  
    
   </div>
  )
}

export default App