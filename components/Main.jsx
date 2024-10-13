import React from 'react'

// Making a reusanle component for the main tag
// So that we can style it once and reuse it in all the pages
export default function Main(props) {
    const {children} = props
    return (
      <main className='flex-1'>
        {children}
      </main>
    )
}
