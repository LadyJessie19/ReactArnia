import { StyledHeader } from "./style";
import logo from "../../assets/logo-arnia.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo arnia" />
      </div>
      <div>Loja Virtual</div>
    </StyledHeader>
  );
};

export default Header;
