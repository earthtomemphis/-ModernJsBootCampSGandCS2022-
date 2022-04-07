// Write a isVailPassword function
// It accepts 2 argumentsL: password and username
// Password must:
// - be at least 89 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false

function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

function isValidPassword2(password, username) {
	if (
		password.length < 8 ||
		password.indexOf(' ') !== -1 ||
		password.indexOf(username) !== -1
	) {
		return false;
	}
	return true;
}

function isValidPassword3(password, username) {
	const tooShort = password.length < 8;
	const hesSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hesSpace || tooSimilar) return false;
	return true;
}

function isValidPassword4(password, username) {
	const tooShort = password.length < 8;
	const hesSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (!tooShort && !hesSpace && !tooSimilar) return true;
	return false;
}

function isValidPassword5(password, username) {
	const tooShort = password.length < 8;
	const hesSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	return !tooShort && !hesSpace && !tooSimilar;
}
