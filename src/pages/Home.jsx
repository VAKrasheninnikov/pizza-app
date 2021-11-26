import React from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../componentParts';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'



const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

function Home() {

    const dispatch = useDispatch();

    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filter }) => filter);
    
    React.useEffect(() => {

        dispatch(fetchPizzas(sortBy, category));
    }, [category,sortBy])


    const onSelectCategory = React.useCallback((ind) => {
        dispatch(setCategory(ind))
    }, []);

    const onSelectSort = React.useCallback((type)=>{
        dispatch(setSortBy(type))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />
                <SortPopup items={[
                    { name: 'популярности', type: 'popular', order: 'desc' },
                    { name: 'цене', type: 'price', order: 'desc' },
                    { name: 'алфавиту', type: 'name', order: 'asc' }
                ]}
                activeSortType={sortBy.type}
                onSelectSort={onSelectSort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items?.map((item) => {
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
                            isLoading={true}
                        />
                    )
                }) : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>

    )
}

export default Home
