

const MailBoxItem = ({user, onDeleteUsers}) => {
    return (
      <>
      <li>Email: {user.userEmail}</li>
      <li>Name: {user.userName}</li>
      <button onClick={onDeleteUsers}>❌ Delete user</button>
      </>
    )
  }
  
  export default MailBoxItem