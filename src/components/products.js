const products =[
    {id: 1,category:"cascos", stock:20,name: "CASCO AGV", price: "$1.000.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhNs_eApdtu_fpHWEz8su7IL2HpDTltvmnA&usqp=CAU", info:"casco integral, compacto y liviano, con un diseño de coraza exclusiva. Cuenta con certificación ECE R 22.05 (Unión Europea), homologada en Colombia bajo la Resolución 1080 del 2019"},
    {id: 2,category:"cascos", stock:20,name: "CASCO CHAF", price: "$900.000", img: "https://http2.mlstatic.com/D_NQ_NP_906123-MCO41047719119_032020-O.webp",info:"Casco de lujo con gran resistencia a las caidas, certificado"},
    {id: 3,category:"guantes",stock:20, name: "GUANTES FOX", price: "380.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G1NHszWiAzjwUaK-wjXpWbJVjiFcVVoicQ&usqp=CAU", info:"Un guante de moto de cross de alto rendimiento sin el alto precio. Los guantes Dirtpaw tienen nudillos blindados para luchar contra las ramas y cualquier otra cosa que el sendero te depare en tu camino"},
    {id: 4,category:"guantes",stock:20, name: "GUANTES ALPINESTAR", price: "$250.000", img: "https://http2.mlstatic.com/D_NQ_NP_935882-MCO43883259954_102020-O.webp", info:"Con detalles de diseño y forma ergonómicos completamente actualizados, el GP Plus R brinda protección, sensación, flexibilidad y comodidad"},
    {id: 5,category:"cascos", stock:20,name: "CASCO DROPFRAME", price: "$900.000", img: "https://cdn.shopify.com/s/files/1/0264/9161/7361/products/24879_555_2_1800x1800.jpg?v=1629645944",info:"El Dropframe Pro ha redefinido los estándares de los cascos abiertos de mountain bike: ha conseguido la mejor puntuación (cinco estrellas) en el programa Bicycle Helmet Ratings del Instituto Virginia Tech"},
    {id: 6,category:"cascos", stock:20,name: "CASCO AIRFLATE", price: "$1.900.000", img: "https://www.motardinn.com/f/13833/138335783/icon-casco-integral-airflite-crosslink.jpg",info:"Casco Airflite ™ Crosslink.Carcasa de policarbonato moldeado por inyección para mayor resistencia"},
    {id: 7,category:"guantes",stock:20, name: "GUANTES ALPINESTAR BORE", price: "380.000", img: "https://www.motardinn.com/f/13823/138237440/alpinestars-guantes-full-bore.jpg",info:"Con un diseño optimizado para la combinación perfecta de rendimiento, protección y flujo de aire, el Full Bore Glove está fabricado con un tejido elástico avanzado y transpirable para una mayor comodidad del ciclista y un ajuste optimizado."},
    {id: 8,category:"guantes",stock:20, name: "GUANTES ALPINESTAR", price: "$250.000", img: "https://cdn.shopify.com/s/files/1/0264/9161/7361/products/22751_130_1_1800x1800.jpg?v=1629645925",info:"El Dirtpaw tiene la palma acolchada y un punto de flexión comodísimo que hacen que siga siendo la opción preferida de los principiantes. Su cierre de velcro ofrece un ajuste seguro y su elasticidad garantiza la máxima destreza. Además, el tejido Clarino® capacitivo de los dedos te permite echar un vistazo al teléfono entre carrera y carrera."}
]


const categories = [
    {id:'cascos',description: 'cascos'},
    {id:'guantes',description: 'guantes'},
]
export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)        
    })
}

export const getProducts = (category) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
           category ? resolve(products.filter(product=>product.category===category)) : resolve(products)
        }, 1000)
    })
}
export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export default products