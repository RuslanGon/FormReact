import MailBoxItem from "../MailBoxItem/MailBoxItem";
import css from "./MailBox.module.css";

const MailBox = ({ boxTitle, boxUsers }) => {
  return (
    <div>
      <h2 className={css.desc}>{boxTitle}</h2>
      <ul className={css.mailBoxlist}>
        {Array.isArray(boxUsers) && boxUsers.map((user) => {
          return <MailBoxItem user={user} key={user.id} />;
        })}
      </ul>
    </div>
  );
};

export default MailBox;
