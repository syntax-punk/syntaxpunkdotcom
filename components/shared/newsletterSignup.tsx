import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useToast, ToastVariant } from './toast'

type Status = 'subscribed' | 'already_subscribed' | 'invalid_email' | 'error'

const MESSAGES: Record<Status, string> = {
  subscribed: "You're in! Thanks for subscribing.",
  already_subscribed: "You're already subscribed — thanks!",
  invalid_email: 'Please enter a valid email address.',
  error: 'Something went wrong. Please try again later.'
}

const TOAST_VARIANT: Record<Status, ToastVariant> = {
  subscribed: 'success',
  already_subscribed: 'success',
  invalid_email: 'warning',
  error: 'error'
}

export default function NewsletterSignup({ source }: { source: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const showToast = useToast()

  useEffect(() => {
    if (!isOpen) return

    emailInputRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const finish = (status: Status) => {
    setIsOpen(false)
    setSubmitting(false)
    setEmail('')
    showToast(MESSAGES[status], TOAST_VARIANT[status])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source })
      })
      const data = await res.json()
      finish((data.status as Status) ?? 'error')
    } catch {
      finish('error')
    }
  }

  return (
    <>
      <TriggerButton onClick={() => setIsOpen(true)}>📧 Subscribe</TriggerButton>
      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <Dialog
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-heading"
          >
            <CloseButton onClick={() => setIsOpen(false)} aria-label="Close">✕</CloseButton>
            <p className="heading" id="newsletter-heading">Sign up for new posts</p>
            <form onSubmit={handleSubmit}>
              <input
                ref={emailInputRef}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                required
              />
              <button type="submit" disabled={submitting}>
                {submitting ? '...' : 'Subscribe'}
              </button>
            </form>
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
  background-color: var(--primary-color);
  color: var(--bg-color);
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.35);

  &:hover {
    filter: brightness(1.1);
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
  border: 1px solid var(--border-color);
  color: var(--font-color);
  background-color: var(--bg-color);

  .heading {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--heading-color);
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
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--font-color);
    font-size: 1rem;

    &:disabled {
      opacity: 0.6;
    }
  }

  form button {
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    border: none;
    background-color: var(--primary-color);
    color: var(--bg-color);
    font-size: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  border: none;
  background: transparent;
  color: var(--font-color);
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
`
