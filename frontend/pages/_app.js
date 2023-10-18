import Layout from '@/components/layout'
import '@/styles/globals.css'
import { DataContext } from '../components/dataContext'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App({ Component, pageProps }) {
  const [workersList, setWorkersList] = useState([])
  const [suppliersList, setSuppliersList] = useState([])
  const [processesList, setProcessesList] = useState([])

  useEffect(() => {
    async function getData() {
      const workersRes = await axios.get('http://localhost/api/workers')
      const suppliersRes = await axios.get('http://localhost/api/suppliers')
      const processesRes = await axios.get('http://localhost/api/processes')
      setWorkersList(workersRes.data)
      setSuppliersList(suppliersRes.data)
      setProcessesList(processesRes.data)
   }
    getData()

  }, [])

  return (
    <Layout>
      <DataContext.Provider value={{ workersList, suppliersList, processesList }}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </Layout>
  )
}
