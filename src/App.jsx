import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header, Email } from './components'
import { addUser } from './redux/userSlice'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.error('Error:', error))
  
  }, [])

  return (
    <>
      <Header />
      <Email />
    </>
  )
}
