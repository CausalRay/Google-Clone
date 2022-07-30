import React from 'react';
import "./SearchPage.css"
import { useStateValue } from '../StateProvider';

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue()
    return (
        <div className='searchpage'>
            <div className="searchPage__heade">
            <h1>{term}</h1>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    );
}

export default SearchPage;
