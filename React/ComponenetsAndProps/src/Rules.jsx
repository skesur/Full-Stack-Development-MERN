function Rules() {
    let name = "Saumya"
    let num = 0;
    return (
        <>
            <h1>Welcome {name}</h1>
            <p>Calculation of 10 + 10 = {10+10}</p>
            <button onClick={()=>document.querySelector(".p1").textContent = num+1}>Increment</button>
            <p className="p1"></p>
        </>
    )
}

export default Rules