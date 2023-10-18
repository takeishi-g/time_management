const { default: axios } = require('axios')
const { useState, useEffect, useContext } = require('react')
import { DataContext } from './dataContext'


const Processes = () => {
  const { processesList } = useContext(DataContext)
  
  const [ process, setProcess ] = useState([])

  useEffect(() => {
    setProcess([...processesList])
  },[processesList])

  console.log(process)
  const [name, setName] = useState('')
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  
  const createNewProcess = () => {
    axios
      .post('http://localhost/api/processes/', {
        name: name,
      })
      .then((res) => {
        setProcess([...process, res.data])
      })
      .then((res) => {
        setName('')
      })
      .catch((error) => console.log(error))
    }

  

  return (
    <div className='container mx-auto'>
    <div className=' flex justify-between'>
      <h2 className=' text-lg'>工程一覧</h2>
      <div>
        <label>
          工程を追加する：
          <input value={name} onChange={handleNameChange} />
        </label>
        <button onClick={createNewProcess}>作成</button>
      </div>
    </div>
    <ul>
      {process.map((val) => {
        return (
          <li key={val.id}>
            {val.name}
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default Processes
