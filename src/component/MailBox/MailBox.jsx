import MailBoxList from '../MailBoxList/MailBoxList';
import css from './MailBox.module.css'


const MailBox = ({boxTitle, boxUsers}) => {
  


  return (
    <div>
        <h2 className={css.desc}>{boxTitle}</h2>
      
      <MailBoxList boxUsers={boxUsers} />
    </div>
  )
}

export default MailBox