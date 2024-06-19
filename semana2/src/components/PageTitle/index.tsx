import { StyledPageTitle } from "./style";

const PageTitle = ({ title, show }) => {
  return (
    <StyledPageTitle>
      <h2>{title}</h2>
      {show && <div>2</div>}
    </StyledPageTitle>
  );
};

export default PageTitle;
