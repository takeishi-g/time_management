import axios from "axios"
import { useState } from "react"

const AddWorker = () => {
  const [ worker, setWorker ] = useState([
    {
      id: 0,
      name: "",
    }
  ])

  const [ name, setName ] = useState("")
  const hendleChangeName = (e) => {
    setName(e.target.value)
  }

  const createWorker = () => {
    axios
      .post('http://localhost/api/workers',{
      name: name,
  })
  .then((res) => {
    setWorker([...worker, res.data])
  })
  .then(()=> setName(""))
  .catch((error) => console.log(error))
  }


  return (
    <>
      <input value={name} onChange={hendleChangeName}/>
      <button onClick={createWorker}>作成する</button>
    </>
  )
}

export default AddWorker
