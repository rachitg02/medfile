type Props ={
    label: string
    onClick: ()=>void
}

const Button: React.FC<Props>=({label,onClick})=>{
    return(
        <button className='bg-emerald-500 rounded-xl py-2 px-6 text-black'
         onClick={onClick}
         >{label}
         </button>
    )
}

export default Button