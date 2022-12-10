import { ButtonContainer } from "./styles";
import PropTypes from "prop-types";

const Button = ({ text, variant="primary", onClick, color }) => {

	return (
		<ButtonContainer onClick={onClick} color={color} variant={variant}>{text}</ButtonContainer>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	variant: PropTypes.string,
	color: PropTypes.string,
}
export default Button