let num = 0

function Rules() {
    let name = "Saumya"
    return (
        <>
            <h1>Welcome {name}</h1>
            <p>Calculation of 10 + 10 = {10+10}</p>
            <button onClick={() => { num = num + 1; document.querySelector('.p1').textContent = num; }}>Increment</button>
            <p className="p1">0</p>
        </>
    )
}

export default Rules