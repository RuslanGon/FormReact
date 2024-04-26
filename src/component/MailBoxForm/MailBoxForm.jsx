
const MailBoxForm = () => {
  return (
   <form>
    <h2>Add new users</h2>
    <label>
        <span>User email</span>
        <br />
        <input type="email" name="userEmail" placeholder="@email" required />
    </label>
    <br />
    <button type="submit"> ▶ Create new users</button>
    <br />
    <label>
        <span>User name</span>
        <br />
        <input type="text" name="userName" placeholder="name" required />
    </label>
   </form>
  )
}

export default MailBoxForm