import { Card } from "@/components/ui/card"
import { Avatar,AvatarFallbackText,AvatarImage } from "@/components/ui/avatar"
import { Box } from "@/components/ui/box"
import { Text } from "@/components/ui/text"
import { Heading } from "@/components/ui/heading"
import { useAuth } from "@/src/contexts/AuthContext"


const CardPerfil = ({user}) =>{
    return(
        <Card variant='outline' className='p-4 mx-2 my-4  flex flex-row items-center space-x-4 border-[#bdbbbb]'>
      <Avatar size="xl">
        <AvatarFallbackText>{user.nome}</AvatarFallbackText>
        <AvatarImage source={{
          uri: user.imageUrl
        }} />
      </Avatar>
      <Box>
        <Heading style={{
          marginTop: 1,
          paddingLeft: 10,
        }}>
          {user.nome}
        </Heading>
        <Text style={{
          marginTop: 1,
          paddingLeft: 10,
        }}>
          {user.email}
        </Text>
        <Text style={{
          marginTop: 1,
          paddingLeft: 10,
        }}>
          {user.matricula}
        </Text>
      </Box>
    </Card>
    )
}

export default CardPerfil;