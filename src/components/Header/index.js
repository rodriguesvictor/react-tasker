import Button from "../Button";
import { HeaderTitle, Wrapper } from "./styles";

const Header = () => {
  return (
	<Wrapper>
		<HeaderTitle>Task Tracker</HeaderTitle>
		<Button text="Add" />
	</Wrapper>
  )
}

export default Header