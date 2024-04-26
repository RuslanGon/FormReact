import MailBoxItem from "../MailBoxItem/MailBoxItem";
import css from "./MailBox.module.css";

const MailBox = ({ boxTitle, users }) => {
  return (
    <div>
      <h2 className={css.desc}>{boxTitle}</h2>
      <ul className={css.mailBoxlist}>
        {Array.isArray(users) && users.map((user) => {
          return <MailBoxItem user={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
};

export default MailBox;
