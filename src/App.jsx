import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import mailBoxExample from './data/mailbox'

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailBoxExample)

  const addMailbox = (newMailbox) => {
    const newMailboxWithId = {
      ...newMailbox, _id: mailboxes.length + 1,
    }
    setMailboxes([...mailboxes, newMailboxWithId])
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
