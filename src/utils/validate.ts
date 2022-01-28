import ValidatorJs from "validatorjs";

const Validator = (body: any, rules: any, customMessages: any = {}) => {
	const validation = new ValidatorJs(body, rules, customMessages);
	return validation.passes() ? true : validation.errors
}


export default Validator;