import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { DataContext } from '../components/dataContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { workers } = useContext(DataContext)
  console.log(workers)
  return (
   <div className=''>
    <h1 className=' text-red-300'>Home</h1>
    
    {/* {data.map((value) => {
      return(
        <p>{value.name}</p>
      )
    })} */}
   </div>
  )
}
