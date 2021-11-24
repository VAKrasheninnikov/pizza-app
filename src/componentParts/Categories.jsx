import React from 'react';
import PropTypes from 'prop-types';



const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {


    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                    {items?.map((item, index) =>
                        <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${item}_${index}`}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
    
})

Categories.propTypes = {
activeCategory: PropTypes.number.isRequired,
items: PropTypes.arrayOf(PropTypes.object).isRequired,
onClickCategory: PropTypes.func
}

Categories.defaultProps = {items: [], activeCategory: null }

export default Categories
