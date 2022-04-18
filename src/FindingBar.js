import React, { useState } from 'react'
import './FindingBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function FindingBar({ handleSearch }) {
    const [searchInput, setSearchInput] = useState('')
    const handleSearchInput = (input) => {
        setSearchInput(input)
    }
    return (
        <div className='search'>
            <input
                type='text'
                className='search_input'
                placeholder='search for puppy, kitty etc.'
                value={searchInput}
                onChange={(e) => handleSearchInput(e.target.value)}
            />
            <div
                className='search_btn'
                onClick={(e) => handleSearch(searchInput, e)}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <p>search</p>
            </div>
        </div>
    )
}

export default FindingBar