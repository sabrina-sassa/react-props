export const ImgUrl=i=>{
return(
    <h1>{i.children}</h1>
)
}

export const Profile=(p)=>{
    const styleobj={color:"blue"}
return(
    <div>
        <h1 style={styleobj}>FullName : </h1>
        <h2>{p.fullname}</h2>
        <h1 style={styleobj}>Bio : </h1>
        <h2>{p.bio}</h2>
        <h1 style={styleobj}>Profession : </h1>
        <h2>{p.profession}</h2>
    </div>
)
}
export const HandleName = (n)=>{
    return(
        <>
        <button onClick={()=>n.alertMyInput('My name is sabrina')}>
            ClickMe
        </button>

        </>
    )
}

// <h1>FullName : {props.fullname}</h1>
//         <h1>Bio : {props.bio}</h1>
//         <h1>Profession : {props.profession}</h1>
