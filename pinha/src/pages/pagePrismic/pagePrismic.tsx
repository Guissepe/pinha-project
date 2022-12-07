import * as prismic from "@prismicio/client"
import sm from "../../../sm.json"
import {components} from "../../../slices"
import { SliceZone } from "@prismicio/react"
import { Box } from "@chakra-ui/react"


export const getStaticProps = async () => {
    const client = prismic.createClient(sm.apiEndpoint)
    const page = await client.getByUID("page", "about")
    return{
        props: {
            page
        }
    }
}
const Page = ({page}) => {
    return(
        <Box>
            <SliceZone slices={page.data.slices} components={components}/>
        </Box>
        
    )
}
export default Page