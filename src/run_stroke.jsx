import { Item } from "./run_stroke_item"

export function Run_stroke() {
    const run_stroke_list = [
        {
            id: 1,
            img: '/interior_1.png',
            price: '$15.00'
        },
        {
            id: 2,
            img: '/interior_2.png',
            price: '$25.00'
        },
        {
            id: 3,
            img: '/interior_3.png',
            price: '$10.00'
        },
        {
            id: 4,
            img: '/interior_2.png',
            price: '$15.00'
        },
        {
            id: 5,
            img: '/interior_1.png',
            price: '$40.00'
        },
        {
            id: 6,
            img: '/interior_3.png',
            price: '$12.00'
        },
        {
            id: 7,
            img: '/interior_2.png',
            price: '$15.00'
        },
        {
            id: 8,
            img: '/interior_1.png',
            price: '$30.00'
        },
        {
            id: 9,
            img: '/interior_3.png',
            price: '$20.00'
        },
        {
            id: 10,
            img: '/interior_1.png',
            price: '$20.00'
        },
        {
            id: 11,
            img: '/interior_2.png',
            price: '$55.00'
        }
    ]
    return (
        <ul className="marquee flex gap-x-[60px] mx-auto w-[4500px]">
            {run_stroke_list.map((e) => (
                <Item key={e.id} img={e.img} price={e.price}/>
            ))}
        </ul>
    )
}