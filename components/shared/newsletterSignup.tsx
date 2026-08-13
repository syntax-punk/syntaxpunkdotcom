import { useEffect, useState } from 'react'
import styled from 'styled-components'

type Status = 'idle' | 'loading' | 'subscribed' | 'already_subscribed' | 'invalid_email' | 'error'

const MESSAGES: Record<Exclude<Status, 'idle' | 'loading'>, string> = {
  subscribed: "You're in! Thanks for subscribing.",
  already_subscribed: "You're already subscribed — thanks!",
  invalid_email: 'Please enter a valid email address.',
  error: 'Something went wrong. Please try again later.'
}

export default function NewsletterSignup({ source }: { source: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source })
      })
      const data = await res.json()
      setStatus(data.status as Status)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <TriggerButton onClick={() => setIsOpen(true)}>📧 Subscribe</TriggerButton>
      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Dialog onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsOpen(false)} aria-label="Close">✕</CloseButton>
            <p className="heading">Sign up for new posts</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
            {status !== 'idle' && status !== 'loading' && (
              <p className="message">{MESSAGES[status]}</p>
            )}
          </Dialog>
        </Overlay>
      )}
    </>
  )
}

const TriggerButton = styled.button`
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 40;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  border: none;
  background-color: #025fc9;
  color: #fefefe;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.35);

  &:hover {
    background-color: #0270e6;
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  background-color: rgba(0, 0, 0, 0.6);
`

const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 2rem 1.6rem 1.6rem;
  border-radius: 4px;
  border: 1px solid #dedede;
  color: #fefefe;
  background-image: linear-gradient(125deg, rgba(19, 7, 34, 0.96), rgba(92, 18, 190, 0.94));

  .heading {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  input {
    flex: 1 1 200px;
    padding: 0.6rem 0.8rem;
    border-radius: 4px;
    border: 1px solid #dedede;
    font-size: 1rem;
  }

  button {
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    border: none;
    background-color: #025fc9;
    color: #fefefe;
    font-size: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
  }

  .message {
    margin-top: 0.8rem;
    font-size: 0.9rem;
    color: #F1E9FB;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  border: none;
  background: transparent;
  color: #fefefe;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
`
