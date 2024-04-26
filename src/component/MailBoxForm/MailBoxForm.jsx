
const MailBoxForm = () => {
  return (
   <form>
    <h2>Add new users</h2>
    <label>
        <span>User email</span>
        <br />
        <input type="text" name="userEmail" placeholder="email" />
    </label>
    <br />
    <label>
        <span>User name</span>
        <br />
        <input type="text" name="userName" placeholder="name" />
    </label>
   </form>
  )
}

export default MailBoxForm