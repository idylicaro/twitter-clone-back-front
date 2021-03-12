import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles'

import Feed from '../Feed'

export default function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Idyl Icaro</h1>
        <h2>@idylicaro</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Sergipe, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de dezembro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}
