import React, { useEffect, useState } from 'react'
import searchContactApi from '../apis/searchContactApi';
import SearchResult from './SearchResult';
const SearchBar = () => {

    const [searchData,setsearchData] = useState<string>('');
    const [result,setResult] = useState<string[]>([]);

    useEffect(()=>{
        const time = setTimeout(async () => {
            if(searchData.trim() === ''){
                setResult([])
            }else{
                let apiResult = await searchContactApi(searchData)
                setResult(apiResult);
            }
        },500)

        return () => {
            clearTimeout(time)
        }
    },[searchData]);

    useEffect(()=>{
        result ? console.log(result) : console.log("No data");
    },[result]);


  return (
    <div className='relative flex transition-all duration-300 justify-between gap-3 px-4 py-2 border border-neutral rounded-lg focus-within:border-dark '>
        <input type="text" id='search' className='peer focus:outline-none tracking-wide placeholder:text-gray-300 focus:text-dark ' placeholder='Search...'
        autoComplete="off" value={searchData}
        onChange={e => setsearchData(e.target.value)}/>
        <label htmlFor="search" className='text-neutral peer-focus:text-dark'>
            <i className="fa-solid fa-magnifying-glass "></i>
        </label>
            {
                searchData && searchData.length > 0 ? (
                    <div className='absolute right-0 top-14 rounded-lg py-3 shadow bg-secondary  w-full shodow flex flex-col gap-2'>
                    {
                        result && result.length > 0 ? (
                            result.map((data : any,index : number) => <SearchResult result={data} key={`result_${index}`}/>)
                        ) : <h3 className='px-4 py-2 text-lg'>No result</h3>
                    }
                    </div>
                ) : null
            }
    </div>
  )
}

export default SearchBar
