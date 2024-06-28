import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = ({ addMailbox }) => {
  const [newMailbox, setNewMailbox] = useState({
    id: '',
    name: '',
    boxSize: '',
    boxholder: ''
  })

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    addMailbox(newMailbox)
    navigate('/mailboxes')
  }

  const handleChange = (e) => {
    setNewMailbox({ ...newMailbox, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Add A Mailbox Listing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMailbox.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <select
          value={newMailbox.boxSize}
          onChange={handleChange}
          name="boxSize"
        >
          <option value="" disabled>Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MailboxForm
