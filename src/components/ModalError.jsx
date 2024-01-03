import { useState } from 'react'

const MICRSERVICES_REPOSITORY_URL = 'https://github.com/nullpointer-excelsior/microservices-architecture-nestjs'

export default function ModalError({ show }) {

  const [open, setOpen] = useState(show)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <dialog className="relative z-10" aria-labelledby="modal-title" aria-modal="true" open={open}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-green-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/100 -z-[1] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="font-semibold leading-7 text-xl text-white" id="modal-title">Spotify-clone micrservice stack</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Actualmente el stack backend de microservicios no esta ejecutandose.
                      Deberas seguir las instrucciones en el siguiente link <a href={MICRSERVICES_REPOSITORY_URL}>Microservicios con nestjs</a>.
                      Este proyecto es un clon de spotify con el cual podrás aprender sobre patrones y arquitectura de microservicios con NestJs,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <a href={MICRSERVICES_REPOSITORY_URL} type="button" className="inline-flex w-full justify-center rounded-3xl bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 hover:scale-105 sm:ml-3 sm:w-auto">Aprender Microservicios</a>
              <button onClick={onClose} type="button" className="mt-3 inline-flex w-full justify-center rounded-3xl bg-zinc-900 px-3 py-2 text-sm font-medium text-green-500 shadow-sm ring-1 ring-inset ring-white sm:mt-0 sm:w-auto hover:scale-105 hover:ring-2">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
