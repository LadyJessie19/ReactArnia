import { StyledPageTitle } from "./style";

interface IProps {
  title: string;
  show: boolean;
}

const PageTitle = ({ title, show }: IProps) => {
  return (
    <StyledPageTitle>
      <h2>{title}</h2>
      {show && <div>2</div>}
    </StyledPageTitle>
  );
};

export default PageTitle;
