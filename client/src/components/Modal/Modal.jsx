import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Button from '@components/Button/Button'
import './Modal.scss'

const Modal = React.memo(({ btnText, btnColor, children, containerClass }) => {
  const modalRef = useRef()
  const [open, setOpen] = useState(false)

  const handleOutsideClick = useCallback(
    e => {
      const path = e.path || (e.composedPath && e.composedPath())
      if (path[0] === modalRef.current) {
        setOpen(false)
      }
    },
    [open]
  )

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [open])

  return (
    <>
      <Button color={btnColor} onClick={handleOpen}>
        {btnText}
      </Button>
      {ReactDom.createPortal(
        <Transition
          nodeRef={modalRef}
          in={open}
          timeout={500}
          mountOnEnter
          unmountOnExit>
          {state => (
            <div className="modal" ref={modalRef}>
              <div
                className={`modal__container ${
                  containerClass || 'modal__container--default'
                } ${state}`}>
                <button
                  type="button"
                  className="modal__close"
                  onClick={handleClose}>
                  X
                </button>
                {children}
              </div>
            </div>
          )}
        </Transition>,
        document.getElementById('portal')
      )}
    </>
  )
})

Modal.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  children: PropTypes.node,
  containerClass: PropTypes.string,
}

Modal.defaultProps = {
  children: null,
  containerClass: null,
}

export default Modal