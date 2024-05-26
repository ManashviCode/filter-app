import React, { useState } from 'react'
import SearchBar from '../../components/Home/SearchBar';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import EmptyView from '../../components/common/EmptyView';
import { dataList } from '../../constants';
import './style.css'

const Home =() => {
    const [selectedCategory, setSelectedCategory]=useState(null);
    const [selectedRating, setSelectedRating]=useState(null);
    const [selectedPrice, setSelectedPrice]=useState([1000,5000]);
    
    const [cuisines, setCuisines]=useState([
        {id: 1, checked:false, label:'American'},
        {id: 2, checked:false, label:'Chinese'},
        {id: 3, checked:false, label:'Italian'},
    ]);

    const [resultsFound, setResultsFound] = useState(true);
    const [list, setList] = useState(dataList);

    const handleSelectCategory=(event,value)=>
        !value ? null :setSelectedCategory(value);

    const handleSelectRating=(event,value)=>
        !value ? null :setSelectedRating(value);

    const handleChangeChecked = (id) => {
        const cusinesStateList = cuisines;
        const changeCheckedCuisines = cusinesStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setCuisines(changeCheckedCuisines);
      };

    const handleChangePrice = (event, value) => {
        setSelectedPrice(value);
      };

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
                    cuisines={cuisines}
                    changeChecked={handleChangeChecked}
                    selectedPrice={selectedPrice}
                    changedPrice={handleChangePrice}
                />
            </div>

            {/* List & Empty View */}
            <div className='home_list-wrap'>
            {resultsFound ? <List list={list} />: <EmptyView />}
            </div>
        </div>
    </div>
);
};

export default Home;