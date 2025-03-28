export default function CommonButton({onClick, className, title}) {
    return (<>
        <button 
        className={`${className} px-4 py-2 rounded-full cursor-pointer`}
        onClick={onClick}
        >{title}</button>
    </>)
}