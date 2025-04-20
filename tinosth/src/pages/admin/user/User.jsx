import Axios from "@/utils/Axios"
import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User = () => {

    const params = useParams()
    const [info, setInfo] = useState({})

    useEffect(() =>{
        Axios.get(`/user/${params.uuid}`)
        .then(res => setInfo(res.data))
        .catch(err => console.log(err))
    }, [])

console.log(info)

    return (
        <Box>
            <Text>Bonjour {info.firstname}</Text>

        </Box>
    )
}

export default User