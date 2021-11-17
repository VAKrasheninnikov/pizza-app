import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../componentParts';

function Home({ pizza }) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]} />
                <SortPopup items={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' }
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizza?.map((item) => {
                    return (
                        <PizzaBlock
                            key={item.imageUrl}
                            category={item.category}
                            id={item.id}
                            url={item.imageUrl}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                            sizes={item.sizes}
                            types={item.types}
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default Home
