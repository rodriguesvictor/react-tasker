import Button from "../Button";
import { HeaderTitle, Wrapper } from "./styles";
import PropTypes from "prop-types";


const Header = ({ title, onAdd, showAdd }) => {

	return (
		<Wrapper>
			<HeaderTitle>{title}</HeaderTitle>
			<Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
		</Wrapper>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}
Header.propTypes = {
	title: PropTypes.string.isRequired,
}
export default Header