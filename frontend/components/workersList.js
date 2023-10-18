const { default: axios } = require('axios')
const { useState, useEffect, useContext } = require('react')
import { DataContext } from '../components/dataContext'
import AddWorker from './addWorker'

const WorkersList = () => {
  const { workersList } = useContext(DataContext)

  const [workers, setWorker] = useState([])

  useEffect(() => {
    setWorker([...workersList])
  }, [workersList])

  const [name, setName] = useState('')
  const hendleChangeName = (e) => {
    setName(e.target.value)
  }

  const createWorker = () => {
    axios
      .post('http://localhost/api/workers', {
        name: name,
      })
      .then((res) => {
        setWorker([...workers, res.data])
      })
      .then(() => setName(''))
      .catch((error) => console.log(error))
  }

  const deleteWorker = (id) => {
    axios
      .delete(`http://localhost/api/workers/${id}`)
      .then((res) => {
        setWorker(workers.filter((worker) => worker.id !== id))
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <input value={name} onChange={hendleChangeName} />
      <button onClick={createWorker}>作成する</button>
      <ul>
        {workers.map((worker) => {
          return (
            <li key={worker.id}>
              {worker.name}
              <button onClick={() => deleteWorker(worker.id)}>削除</button>
            </li>
            ) 
        })}
      </ul>
    </>
  )
}

export default WorkersList
