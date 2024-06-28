import { useNavigate } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  let navigate = useNavigate()

  const showMailbox = (mailbox) => {
    navigate(`/mailboxes/${mailbox._id}`)
  }

  return (
    <div className="mailbox-grid">
      {mailboxes.map((mailbox) => (
        <div className="mailbox-card" onClick={() => showMailbox(mailbox)} key={mailbox._id}>
          <h3>Box Number: {mailbox._id}</h3>
          <h3>Name: {mailbox.name}</h3>
          <h3>Size: {mailbox.boxSize}</h3>
        </div>
      ))}
    </div>
  )
}

export default MailboxList
