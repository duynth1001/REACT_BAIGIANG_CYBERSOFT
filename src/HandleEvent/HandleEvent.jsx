
export const HandleEvent = () => {
    const alertMessage =()=>{
        alert("Hello, this is BC-53")
    }
    const alertMessageWithParams =(name)=>{
        alert(`Hello ${name}`)
    }
    return (
    <div className="container mt-3">
      <h1>Handle Event</h1>
      <button className="btn btn-success" onClick={alertMessage}>Alert message</button>
      <button className="btn btn-success" onClick={
        (e)=>{
            console.log(e.target);
            alertMessageWithParams('Duy')
        }
      }>Alert message with params</button>
    
    </div>
  )
}

