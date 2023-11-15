
export  const Databinding = () => {
    const fullname = 'Hoàng Duy'
    const sum = (a,b)=>{
        return a+b
    }
    return (
      <div className="container mt-3">
        <h1>Data binding</h1>
        <p className="fs-3 fw-bold text-danger">{fullname}</p>
        <p>Sum:{sum(10,20)}</p>
      </div>
    )
  }
  
