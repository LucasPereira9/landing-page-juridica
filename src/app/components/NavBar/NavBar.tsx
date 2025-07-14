import { FaBalanceScale } from 'react-icons/fa'
import * as S from './NavBar.styles'

export const NavBar = () => {
return (
    <S.NavWrapper>
        <S.LogoWrapper>
            <FaBalanceScale size={60} color="#ca9f62ed" />
            <S.LogoTitle>Advocacia</S.LogoTitle>
        </S.LogoWrapper>
        <h2>
            options
        </h2>
    </S.NavWrapper>
)
}