const { default: axios } = require('axios')
const { useState, useEffect } = require('react')

const SuppliersList = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 0,
      name: '',
    },
  ])

  useEffect(() => {
    axios
      .get('http://localhost/api/suppliers/')
      .then((response) => setSuppliers(response.data))
      .catch((error) => console.log(error))
  }, [])

  const [name, setName] = useState('')
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
    <div className='container mx-auto'>
      <div className=' flex justify-between'>
        <h2 className=' text-lg'>取引先一覧</h2>
        <div>
          <label>
            取引先を追加する：
            <input value={name} onChange={handleNameChange} />
          </label>
          <button onClick={createNewSupplier}>作成</button>
        </div>
      </div>
      <ul>
        {suppliers.map((supplier) => {
          return <li key={supplier.id}>{supplier.name}{console.log(supplier.id)}</li>
        })}
      </ul>
    </div>
  )
}

export default SuppliersList
