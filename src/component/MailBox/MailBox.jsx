import MailBoxList from '../MailBoxList/MailBoxList';
import css from './MailBox.module.css'
import clsx from 'clsx'

const MailBox = ({boxTitle, mailBoxCounter = 0, boxUsers}) => {
  const isObjectFull = mailBoxCounter === 0;


  return (
    <div className={clsx(css.object, { 
      [css.full]: isObjectFull

    })}>
        <h2 className={css.desc}>{boxTitle}</h2>
        {mailBoxCounter === 0 ? <p>К сожилению сейчес нет активных почтовых ящиков</p> : <p>Количество активный почтовых ящиков {mailBoxCounter}</p>}
      <MailBoxList boxUsers={boxUsers} />
    </div>
  )
}

export default MailBox