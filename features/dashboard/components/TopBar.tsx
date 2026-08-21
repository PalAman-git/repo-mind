import { Button } from "@/components/ui/button"
import { SearchBar } from "./SearchBar"

const TopBar = () => {
  return (
    <>
        <div className="p-5 flex justify-between items-center">
            <div id="logo">
                <div className="text-3xl font-bold"><span className="textGradient">RepoMind</span> .</div>
            </div>
            <SearchBar />
            <div className="authgroup flex gap-2">
                <Button className="bg-transparent border border-white hover:bg-transparent cursor-pointer px-7 py-5 rounded-xl">Log in</Button>
                <Button className="bg-white hover:bg-gray-200 text-black px-7 py-5 cursor-pointer rounded-xl">Sign up</Button>
            </div>
        </div>
    </>
  )
}

export default TopBar