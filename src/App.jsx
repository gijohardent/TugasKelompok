import { useState,useEffect } from 'react'

export default function App() {
  
  const [name, setName] = useState([]);

  useEffect(() => {
    names()
  }, [])

  const names = async () => {
    const responce = await fetch('https://reqres.in/api/users')
    setName(await responce.json())
  }

  return (
    <>
      <div key={data.id}>
        <h1>Nama-nama</h1>
      </div>
    </>
  )
}
