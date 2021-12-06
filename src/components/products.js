const products =[
    {id: 1, name: "Moscu", price: "$800.000", img: "https://en3dias.net/wp-content/uploads/2019/06/cuantos-dias-para-ver-moscu.jpg"},
    {id: 2, name: "Tokio", price: "$700.000", img: "https://porlavision.com/wp-content/uploads/2020/05/Visita-a-Tokio-desde-la-casa.png",info:"Una de las ciudades mas sorprendentes del mundo, a la vanguardia en moday en la mas sorprendente tecnologia"},
    {id: 3, name: "Berlin", price: "980.000", img: "https://www.losviajesdegrimes.com/wp-content/uploads/2020/02/catedral-berlin.jpg"},
    {id: 4, name: "Ámsterdam", price: "$950.000", img: "https://cdn-images.welcometothejungle.com/Fl88V8bG5oMNutOwPco_mIGV3t4iwSi6PgTqz4-_Mn4/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzY0MDYvMTU1MzI3L0Ftc3RlcmRhbS0yLmpwZw"}
]


export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export default products