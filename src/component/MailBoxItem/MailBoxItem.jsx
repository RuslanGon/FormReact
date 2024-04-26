

const MailBoxItem = ({user}) => {
    return (
      <>
      <li>Email: {user.userEmail}</li>
      <li>Name: {user.userName}</li>
      </>
    )
  }
  
  export default MailBoxItem