import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({result} : {result: any}) => {
  return (
    <Link to={'#'} className=' transition-all duration-300 hover:border-l-4 hover:border-dark px-4 py-2  hover:bg-neutral '>
        {result.email}
    </Link>
  )
}

export default SearchResult
