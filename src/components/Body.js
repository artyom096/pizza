import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilterValue } from '../redux/actions/filtersAction'
import { addPizzas } from '../redux/actions/pizzaAction'
import LoadingBlock from './PizzaBlock/LoadingBlock'
import { PizzaBlock } from './PizzaBlock/PizzaBlock'
import { SortPopup } from './SortPopup'

export const Body = () => {

    const value = useSelector(state => state.pizzas.value)
    const sort = useSelector(state => state.sort.sort)
    const filterValue = useSelector(state => state.filter.filterValue)
    const arrayOfTypeSort = useSelector(state => state.filter.arrayOfTypeSort)
    const isLoading = useSelector(state => state.pizzas.isLoading)
    const pizzaItems = useSelector(state => state.cart.items)

    const dispatch = useDispatch()

    const setCategories = () => state.cat.map((item, index) => {
        return (
            <li key={item + index}
                className={state.value === index ? 'active' : ''}
                onClick={() => setActiveClass(index)}
            >{item}</li>
        )
    })

    const state = useSelector(state => {
        return {
            cat: state.filter.category,
            value: state.filter.filterValue
        }
    })

    const setActiveClass = index => {
        dispatch(changeFilterValue(index))
    }

    useEffect(() => {
        dispatch(addPizzas(sort, filterValue, arrayOfTypeSort))
    }, [sort, filterValue])

    return (
        <div className="container">
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <div className="categories">
                            <ul>
                                {setCategories()}
                            </ul>
                        </div>
                        <SortPopup />
                    </div>
                    <h2 className="content__title">{state.cat[state.value] !== 'Все' ? state.cat[state.value] : 'Все пиццы'}</h2>
                </div>
            </div>
            <div className="content__items">
                {value.map(pizza => {
                    return (
                        isLoading ? Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)
                            : <PizzaBlock pizzaItems={pizzaItems[pizza.id]} key={pizza.id} {...pizza} />
                    )
                })}
            </div>
        </div>
    )
}