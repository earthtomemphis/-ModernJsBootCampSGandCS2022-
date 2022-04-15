const layout = require('../layout');
const { getError } = require('../../helpers');

/* const getError = (errors, prop) => {
	// prop === 'email' || 'password' || 'passwordConfirmation'

	try {
		return errors.mapped()[prop].msg;
	} catch (err) {
		return '';
	}
	/* if (errors) {
		return errors.mapped()[prop].msg;

		errors.mapped()===={
            email:{
                msg:'Invalid Email'
            }
            password:{
                msg:'Password too short'
            }
            passwordConfirmation:{
                msg:'Passwords must match'
            }
        } 
	} 
}; */

module.exports = ({ req, errors }) => {
	return layout({
		content: `
            <div>
                Your id is:	${req.session.userId}
                <form method="POST">
                    <input name="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input name="password" placeholder="password" />
                    ${getError(errors, 'password')}
                    <input name="passwordConfirmation" placeholder="password confirmation" />
                    ${getError(errors, 'passwordConfirmation')}
                    <button>Sign Up</button>
                </form>
            </div>
    `,
	});
};
