import userRepositories from '../repositories/User.repository';

const getUsers = () => {
	return userRepositories.getUsers();
};

export default {
	getUsers,
};
