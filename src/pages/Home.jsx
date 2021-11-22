import React from 'react'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../componentParts';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
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
    React.useEffect(()=>{
        dispatch(fetchPizzas());
  }, [])


    const onSelectCategory= React.useCallback((ind)=>{
        dispatch(setCategory(ind))
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames} />
                <SortPopup items={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' }
                ]} />
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
                }) : Array(12).fill(<PizzaLoadingBlock />)}
            </div>
        </div>

    )
}

export default Home
