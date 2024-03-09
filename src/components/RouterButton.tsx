import { useRouter } from "next/router";

export const RouterButton = ()=>{
    const router = useRouter();
    return (
        <div>
            <button onClick={()=>{router.push("/")}}>首页</button>
            <button onClick={()=>{router.push("/homes")}}>homes</button>
            <button onClick={()=>{router.push("/login")}}>login</button>
        </div>
    )
}