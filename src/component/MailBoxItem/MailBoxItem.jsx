

const MailBoxItem = ({user, onDeleteUsers}) => {
    return (
      
      <li>
        <p>Email: {user.userEmail}</p>
        <p>Name: {user.userName}</p>
        <button type="button" onClick={onDeleteUsers}>❌ Delete user</button>
      </li>
      
      
      
    )
  }
  
  export default MailBoxItem