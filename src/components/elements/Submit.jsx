
function Submit(){
    const submitStyle = 'border rounded-md py-1 px-4 mt-3 mb-4 bg-lime-400 font-semibold' 

    return(
        <input 
        type="submit" 
        value='Submit'
        className={submitStyle} />
    )
}

export default Submit