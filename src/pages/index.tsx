import { RouterButton } from "@/components/RouterButton";

export default function Home(props:any) {
  return (
    <main>
      <RouterButton />
      <h1>{props.dt}</h1>
      <div>
        { 
          props.data.map((item:any, index:number) => (
            <li key={index}>{item.title}</li>
          ))
        }
      </div>
    </main>
  );
}


export async function getStaticProps () {
  const dt = new Date().toLocaleString()
  const response = await fetch("https://dummyjson.com/posts")
  const replay = await response.json()

  return({
    props: {
      dt,
      data: replay.posts
    }
  })
}