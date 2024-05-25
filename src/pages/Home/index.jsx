import React, { useState } from 'react'
import SearchBar from '../../components/Home/SearchBar';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import './style.css'

const Home =() => {
    const [selectedCategory, setSelectedCategory]=useState(null);
    const [selectedRating, setSelectedRating]=useState(null);
    const [cusines, setCusines]=useState([
{
    id: 1, checked:false, label:'American',
},
{
    id: 2, checked:false, label:'Chinese',
},
{
    id: 3, checked:false, label:'Italian',
},
]);

    const handleSelectCategory=(event,value)=>
        !value ? null :setSelectedCategory(value);

    const handleSelectRating=(event,value)=>
        !value ? null :setSelectedRating(value);

    return (
    <div className='home'>
    {/* Search Bar */}
    <SearchBar/>

        <div className='home_panelList-wrap'>
            <div className='home_panel-wrap'>

                {/* Side Panels */}
                <FilterPanel
                    selectToggle={handleSelectCategory}
                    selectedCategory={selectedCategory}
                    selectRating={handleSelectRating}
                    selectedRating={selectedRating}
                />
            </div>

            <div className='home_list-wrap'>
                {/* List & Empty View */}
                <List/>
            </div>
        </div>
    </div>
);
};

export default Home;