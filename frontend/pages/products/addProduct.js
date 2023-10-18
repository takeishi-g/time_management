import { DataContext } from '@/components/dataContext'
import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'

const AddProduct = () => {
  const { suppliersList } = useContext(DataContext)
  const [suppliers, setSuppliers] = useState([
    {
      id: 0,
      name: '',
    },
  ])

  useEffect(() => {
    setSuppliers([...suppliersList])
  }, [])

  const [product, setProduct] = useState([
    {
      deadline: '',
      supplier: '',
      title: '',
      quantity: 0,
    },
  ])

  const today = new Date()
  today.setDate(today.getDate())
  let yyyy = today.getFullYear()
  let MM = ('0' + (today.getMonth() + 1)).slice(-2)
  let dd = ('0' + today.getDate()).slice(-2)

  const [deadline, setDeadlin] = useState(yyyy + '-' + MM + '-' + dd)
  const handlechageDeadline = (e) => {
    setDeadlin(e.target.value)
  }

  const [supplier, setSupplier] = useState({ id: 0, name: '' })

  const [title, setTitle] = useState('')
  const handlechageTitle = (e) => {
    setTitle(e.target.value)
  }

  const [quantity, setQuantity] = useState(0)
  const handlechageQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const createProduct = () => {
    axios
      .post('http://localhost/api/product', {
        date: deadline,
        supplier_id: 1,
        title: title,
        quantity: quantity,
      })
      .then((res) => {setProduct([...product, res.data])})
      .then(()=>(setProduct({})))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <label>
        取引先：
        <select onChange={() => setSupplier.e.target.value}>
          {suppliers.map((supplier) => {
            return <option value={supplier.id} key={supplier.id}>{supplier.name}</option>
          })}
        </select>
      </label>

      <label>
        納期：
        <input type='date' value={deadline} onChange={handlechageDeadline} />
      </label>

      <label>
        図番：
        <input value={title} onChange={handlechageTitle} />
      </label>

      <label>
        数量：
        <input type='number' value={quantity} onChange={handlechageQuantity} />
      </label>
      <button onClick={createProduct}>作成する</button>
    </>
  )
}
export default AddProduct
