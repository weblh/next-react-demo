import Image from 'next/image'; 
export default function Products(props:any){
    return (
        <main>
            <div>products{props.dt}</div>
            <h1>{props.dt}</h1>
            <ul>
                {
                    props.data.map((item:any, index:number)=>(
                        <li key={index}>{item.title}
                            <div  style={{'display':'flex'}}>
                                {
                                    item.images.map((key:any, keyIndex:number)=>(
                                        <Image key={keyIndex} src={key} alt="" width={'50'} height={'50'}/> 
                                    ))
                                }
                            </div>
                        
                        </li>
                    ))
                }
            </ul>
        </main>
    )

}
export async function getServerSideProps (context:any) {
    const dt = new Date().toLocaleString()
    
    const {req, res, params, query, ...rest} = context
    console.log( params, query, rest)
    // res  可以设置响应头
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    console.log(req.headers.cookie)
    res.setHeader("Set-cookie", "token=xxxxxxx")
    console.log(data)
    return ({
            props: {
                dt,
                data: data.products
            }
        })
}