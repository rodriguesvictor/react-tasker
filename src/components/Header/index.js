import Button from "../Button";
import { HeaderTitle, Wrapper } from "./styles";

const Header = () => {
	const onClick = () => {
		console.log("Click!");
	}
	return (
		<Wrapper>
			<HeaderTitle>Task Tracker</HeaderTitle>
			<Button text="Add" onClick={onClick} />
		</Wrapper>
	)
}

export default Header