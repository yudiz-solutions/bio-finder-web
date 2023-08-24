import React, { useEffect, useState } from 'react'

function SurpriseModal({ setSurprise }) {

  const [data, setData] = useState()

  useEffect(() => {
    async function getRandomDetails () {
      const response = await fetch('https://bio-finder-app.vercel.app/api/userinfo/random/details')
      const data = await response.json()

      setData(data?.data[0]?.aProfileFields)
    }
  
    getRandomDetails()
  }, [])

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSurprise(false)}></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className='absolute right-3 top-3 cursor-pointer' onClick={() => setSurprise(false)}>
                <h2>X</h2>
              </div>
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg fill="#ff0000" height="150px" width="150px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.5 477.5" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M407.533,70c-45.1-45.1-105-70-168.8-70s-123.7,24.8-168.8,69.9c-87,87-93.3,226-15.8,320.2 c-10.7,21.9-23.4,36.5-37.6,43.5c-8.7,4.3-13.6,13.7-12.2,23.3c1.5,9.7,8.9,17.2,18.6,18.7c5.3,0.8,11,1.3,16.9,1.3l0,0 c29.3,0,60.1-10.1,85.8-27.8c34.6,18.6,73.5,28.4,113.1,28.4c63.8,0,123.7-24.8,168.8-69.9s69.9-105.1,69.9-168.8 S452.633,115.1,407.533,70z M388.433,388.5c-40,40-93.2,62-149.7,62c-37.8,0-74.9-10.1-107.2-29.1c-2.1-1.2-4.5-1.9-6.8-1.9 c-2.9,0-5.9,1-8.3,2.8c-30.6,23.7-61.4,27.2-74.9,27.5c16.1-12,29.6-30.6,40.9-56.5c2.1-4.8,1.2-10.4-2.3-14.4 c-74-83.6-70.1-211,8.9-290c40-40,93.2-62,149.7-62c56.6,0,109.7,22,149.7,62C471.033,171.6,471.033,306,388.433,388.5z"></path> <path d="M299.333,129.4c-21.6,0-41.9,8.4-57.2,23.7l-3.4,3.4l-3.4-3.4c-15.3-15.3-35.6-23.7-57.2-23.7c-21.5,0-41.8,8.4-57,23.6 c-15.3,15.3-23.7,35.6-23.6,57.1c0,21.6,8.5,41.8,23.7,57.1l107.9,107.9c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-3.9l108.2-107.8 c15.3-15.3,23.7-35.6,23.7-57.1c0-21.6-8.4-41.9-23.6-57.2C341.133,137.8,320.833,129.4,299.333,129.4z M337.233,248.3l-98.6,98.2 l-98.4-98.4c-10.2-10.2-15.8-23.7-15.8-38.1c0-14.4,5.6-27.9,15.7-38c10.1-10.1,23.6-15.7,38-15.7s27.9,5.6,38.1,15.8l13,13 c5.3,5.3,13.8,5.3,19.1,0l12.9-12.9c10.2-10.2,23.7-15.8,38.1-15.8c14.3,0,27.8,5.6,38,15.8s15.8,23.7,15.7,38 C353.033,224.6,347.433,238.1,337.233,248.3z"></path> </g> </g> </g></svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{data?.sLabelName}</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{data?.sDisplayText}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
              <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setSurprise(false)}>Cancel</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurpriseModal