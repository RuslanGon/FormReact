import MailBoxItem from "../MailBox/MailBoxItem/MailBoxItem";
import css from "./MailBoxList.module.css";

const MailBoxList = ({ boxUsers }) => {
  return (
    <ul className={css.mailBoxlist}>
      {boxUsers.map((user) => {
        return <MailBoxItem user={user} key={user.id} />;
      })}
    </ul>
  );
};

export default MailBoxList;