import React , {useEffect, useRef} from 'react'
import './header.css'; 

function SearchInput({ focus , value, onChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (focus && inputRef.current) {
          inputRef.current.focus();
        }
      }, [focus]);

  return (
    <div className="search-bar">
        <input
      type="text"
      ref={inputRef}
      placeholder="Search..."
      value={value}
      onChange={onChange}
      autoFocus={focus}
    />
      </div>
  )
}

export default SearchInput