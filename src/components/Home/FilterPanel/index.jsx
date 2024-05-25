import React from 'react'
import { categoryList, ratingList } from '../../../constants'
import FilterListToggle from '../../common/FilterListToggle'
import './styles.css'

const FilterPanel=({
  selectedCategory, 
  selectToggle,
  selectedRating,
  selectRating
})=> {
  return (
    <div>
        {/*Category */}
        <div className="input-group">
          <p className='label'>Category</p>
          <FilterListToggle
             options={categoryList}
             value={selectedCategory}
             selectToggle={selectToggle}
          />
        </div>

        {/*Cusines*/}
        <div className="input-group">
          <p className='label'> Cuisine</p>
        </div>

        {/*Price Range */}

        {/*Star Rating */}
        <div className='input-group'>
          <p className='label'>Star Rating</p>
          <FilterListToggle
             options={ratingList}
             value={selectedRating}
             selectToggle={selectRating}
          />
        </div>
    </div>
  )
}

export default FilterPanel