import axios from 'axios'
import { useState } from 'react'

const AddSuppliers = () => {
  const [ suppliers, setSuppliers] = useState([
    {
      id: 0,
      name: '',
    },
  ])

  const [ name, setName ] = useState("")
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const createNewSupplier = () => {
    axios
      .post('http://localhost/api/suppliers', {
        name: name,
      })
      .then((res) => {
        setSuppliers([...suppliers, res.data])
      })
      .then((res) => {
        setName('')
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
    <label>
      取引先名：
      <input value={name} onChange={handleNameChange}/>
    </label>
    <button onClick={createNewSupplier}>作成</button>
    </>
  )


}

export default AddSuppliers
