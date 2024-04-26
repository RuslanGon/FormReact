
import { useState } from 'react'
import './App.css'
import MailBox from './component/MailBox/MailBox'
import MeestExpressUser from './component/MailBox/meestExpress.json'
import { nanoid } from 'nanoid'
import MailBoxForm from './component/MailBoxForm/MailBoxForm'

function App() {

  const [users, setUsers] = useState(MeestExpressUser)

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid()
    }
    // setUsers([...users, finalUser ])
    setUsers((pevState) => [...pevState,finalUser])
  }

  return (
   <div>
    <MailBoxForm onAddUsers={onAddUsers} />
    <MailBox boxTitle="Meest Express"  boxUsers={users} />
   </div>
  )
}

export default App