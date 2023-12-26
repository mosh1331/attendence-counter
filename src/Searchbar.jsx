import React, { useState } from 'react';

const SearchBar = ({handleSearch}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleSearch = () => {
        setExpanded(!expanded);
        if(expanded){
            handleSearch('')
        }
    };

    return (
        <div className="flex items-center absolute bottom-[100px] right-0">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className={`py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline  border-[2px] border-[tomato] ${expanded ? 'w-64' : 'w-12'
                        } transition-width duration-300`}
                    onChange={(e)=>handleSearch(e.target.value)}
                />
                <button
                    className="absolute right-0 top-0 mt-2 mr-3 focus:outline-none"
                    onClick={toggleSearch}
                >
                  {expanded ?
                  <div className='font-bold mr-2 text-[tomato]'>X</div>
                  :  <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1"
                        viewBox="0 0 490.4 490.4" >
                        <g>
                            <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
                        </g>
                    </svg>}
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
