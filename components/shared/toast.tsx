import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export type ToastVariant = 'success' | 'warning' | 'error'

type ToastState = { message: string; variant: ToastVariant }

const DEFAULT_DURATION = 4000

const ACCENT_COLOR: Record<ToastVariant, string> = {
  success: '#2ecc71',
  warning: '#f5a623',
  error: '#e74c3c'
}

const ToastContext = createContext<((message: string, variant?: ToastVariant) => void) | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    setToast({ message, variant })
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <ToastView
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const showToast = useContext(ToastContext)
  if (!showToast) throw new Error('useToast must be used within a ToastProvider')
  return showToast
}

function ToastView({ message, variant, onClose }: { message: string; variant: ToastVariant; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, DEFAULT_DURATION)
    return () => clearTimeout(timer)
  }, [message, variant, onClose])

  return (
    <Wrapper role="status" $accent={ACCENT_COLOR[variant]}>
      <p>{message}</p>
      <CloseButton onClick={onClose} aria-label="Dismiss notification">✕</CloseButton>
    </Wrapper>
  )
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.6rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Wrapper = styled.div<{ $accent: string }>`
  position: fixed;
  right: 1.6rem;
  top: 1.6rem;
  z-index: 60;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  max-width: 360px;
  padding: 0.9rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  border-left: 4px solid ${({ $accent }) => $accent};
  background-color: var(--secondary-bg-color);
  color: var(--font-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  animation: ${slideIn} 0.2s ease-out;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: var(--font-color);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`
