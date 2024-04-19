
function Label({title, htmlFor}){
    const labelStyle = 'block text-slate-600 font-semibold'

    return (
        <label 
            htmlFor={htmlFor}
            className={labelStyle}>
            {title}
        </label>
    )
}

export default Label
