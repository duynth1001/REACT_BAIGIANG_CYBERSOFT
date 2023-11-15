
export const RenderWithMap = () => {
  const product =[
    {
        name:'Samsung',
        price:1000,
        des:'New phone'
    },
    {
        name:'Iphone',
        price:3400,
        des:'old phone'
    },
    {
        name:'Xiomi',
        price:450,
        des:'Brand phone'
    }
  ]
    return (
    <div className="container mt-3">
        <h1>Render With Map</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(
                            (value,index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.price}</td>
                                        <td>{value.des}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

