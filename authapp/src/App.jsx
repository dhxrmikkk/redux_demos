import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './Router/MainRouter'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <main className='h-screen'>
        <BrowserRouter>
          <Suspense fallback={'Loading...'}>
            <MainRouter />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </Suspense>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App