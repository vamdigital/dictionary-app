interface DialogProps {
  children: React.ReactNode
  dialogRef: React.MutableRefObject<HTMLDialogElement | null>
}
export const Dialog = ({ children, dialogRef }: DialogProps) => {
  const dialogClick = (e: React.MouseEvent) => {
    const dialog = dialogRef.current

    if (dialog) {
      const dialogDimensions = dialog.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close()
      }
    }
  }

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  // Place this on the page where we need to add click handler to show the modal
  // const dialogRef = useRef<HTMLDialogElement>(null)
  // const showDialog = () => {
  //   if (dialogRef.current) {
  //     dialogRef.current.showModal()
  //   }
  // }
  //
  return (
    <div>
      <dialog ref={dialogRef} className="max-w-xl" onClick={dialogClick}>
        <div className="flex flex-col relative py-5">
          <button className="absolute right-5 top-0" onClick={closeDialog}>
            ❌
          </button>
          <h1>Dialog Modal</h1>
          {children}
        </div>
      </dialog>
    </div>
  )
}
