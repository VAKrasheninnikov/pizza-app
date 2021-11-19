import React from 'react'



const Categories = React.memo(function Categories({ items, onClickItem }) {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    };

    return (
        <div>
            <div className="categories">
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                    {items?.map((item, index) =>
                        <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}_${index}`}>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
})

export default Categories
