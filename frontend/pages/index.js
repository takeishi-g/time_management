import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({workers}) {
  return (
   <div className=''>
    <h1 className=' text-red-300'>Home</h1>
    {console.log(workers)}
   </div>
  )
}
