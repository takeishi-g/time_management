import axios from 'axios'
import { useEffect, useState } from 'react'

const Workers = () => {
  const [workers, setWorkers] = useState([
    {
      id: 0,
      name: '',
    },
  ])

  useEffect(() => {
    axios
      .get('http://localhost/api/workers')
      .then((response) => setWorkers(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className=''>
      <h1 className=' text-lg'>加工者一覧</h1>
      <ul>
        {workers.map((worker) => {
          return (
          <li key={worker.id}>
            {worker.name}
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Workers
