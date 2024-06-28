import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes }) => {
  const [mailbox, setMailbox] = useState(null)
  let { mailboxId } = useParams()

  useEffect(() => {
    let selectedMailbox = mailboxes.find(mailbox => mailbox._id === parseInt(mailboxId))
    setMailbox(selectedMailbox)
  }, [mailboxes, mailboxId])

  return mailbox ? (
    <div className="detail">
      <div className="info-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Box Number: {mailbox._id}</h3>
          <h3>Name: {mailbox.name}</h3>
          <h3>Size: {mailbox.boxSize}</h3>
        </div>
      </div>
    </div>
  ) : <h1>Mailbox Not Found!</h1>
}

export default MailboxDetails
