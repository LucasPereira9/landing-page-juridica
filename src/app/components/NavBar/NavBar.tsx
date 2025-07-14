import { FaBalanceScale } from 'react-icons/fa';
import * as S from './NavBar.styles';

interface NavItem {
  id: string;
  label: string;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar = ({ items }: NavBarProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <S.NavWrapper>
      <S.LogoWrapper>
        <FaBalanceScale size={60} color="#ca9f62ed" />
        <S.LogoTitle>Passos Advocacia</S.LogoTitle>
      </S.LogoWrapper>
      <div />
      <S.ItemsWrapper>
        {items.map(item => (
          <S.NavItem key={item.id} onClick={() => handleClick(item.id)}>
            <span>
            {item.label}
            </span>
            <S.Underline />
          </S.NavItem>
        ))}
      </S.ItemsWrapper>
      <div />
    </S.NavWrapper>
  );
};
