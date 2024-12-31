import TopicsList from "@/components/TopicsList"
import Link from "next/link"

export default function Home() {
  return (
   <>
    <TopicsList/>
    <Link href={"/updateTopic"}>Click
    </Link>
   </>
  )
}
