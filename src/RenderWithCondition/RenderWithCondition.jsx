
export const RenderWithCondition = () => {
  const isLogin =true
  const fullname = 'Hoàng Duy'
  const isShowMessage =true
   function renderLogin()
  {
    if (isLogin) {
        return  <p>Hello, {fullname}</p> 
    }
    else
    {
       return <button> Đăng nhập</button>
    }
  }
    return (
    <div className="container mt-3">
        <h1>Render With Condition</h1>
        <div>
            {
                // isLogin ? <p>Hello, {fullname}</p> : <button> Đăng nhập</button>
                renderLogin()
            }
            {
                isShowMessage ? <p>Hello BC-53</p> : ''
            }
            {
                isShowMessage && <p>Hello BC-53(ver 2)</p> 
            }
        </div>
    </div>
  )
}

