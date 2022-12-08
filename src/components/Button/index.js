import { ButtonContainer } from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {

	return (
		<ButtonContainer onClick={onClick}>{text}</ButtonContainer>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
}
export default Button