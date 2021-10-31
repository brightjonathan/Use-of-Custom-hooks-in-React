import React from 'react'
import UseFetch from './Compound/UseFetch'


//The main idea is to know how to use custom hook in a react project
//calling it in any component and  destructuring it 
//using an Api this is how to use custom hook
//knowing how to use it.....

const App = () => {
  //destructing the varibles
  const {data: joke , loading, error, reFetch} = UseFetch("https://v2.jokeapi.dev/joke/Any")

  //conditional state for loading
  if(loading) return <h2>LOADING...</h2>;

  if(error) console.log(error)

  return (
    <div>
      <h3>{joke?.setup}: {joke?.delivery}</h3>
      <button onClick={reFetch}>Refresh</button>
    </div>
  )
}

export default App

