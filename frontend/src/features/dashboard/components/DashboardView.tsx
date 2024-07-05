import { Button } from "@chakra-ui/react"
import { PostsFeed } from "./PostsFeed"
import { AreaChart, Plus } from "lucide-react"
import { useBaseModal } from "@/providers/BaseModalProvider"
import { PostBox } from "./PostBox"
import { useScreenSize } from "@/hooks/useScreenSize"
import { Bookmarked, Products } from "@/features/scraped"

export const DashboardView = () => {
  const {modalOn} = useBaseModal();
  const {width} = useScreenSize();
  
  return (
    <div
    className="
    h-full bg-slate-100 flex-1 p-3
    relative
    "
    >
      <div
      className="
      grid gap-4 h-full
      grid-cols-1
      md:grid-col-fr-1-2-1
      max-w-[1250px] mx-auto
      "
      >
        <Products/>
        <section className="flex flex-col #gap-4">

          <div className="flex items-center gap-2 justify-between h-[50px]">
            <h2 className="font-semibold underline">
              what people are saying!
            </h2>
            <Button
            className="!rounded-[9999px] #border-2 #border-slate-200 anime-btn"
            colorScheme="purple"
            //variant={'outline'}
            leftIcon={<Plus size={20}/>}
            size={'sm'}
            onClick={() => modalOn(
              <PostBox/>,
              {title: 'create a post!', size: width < 640 ? 'full' : ""}
            )}
            >
              POST!
            </Button>
          </div>
          <PostsFeed/>
        </section>
        <Bookmarked/>
      </div>
    </div>
  )
}
