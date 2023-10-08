const { default: axios } = require('axios')
const { useState, useEffect } = require('react')

const WorkersList = () => {
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
    <ul>
      {workers.map((worker) => {
        return <li key={worker.id}>{worker.name}</li>
      })}
    </ul>
  )
}

export default WorkersList
