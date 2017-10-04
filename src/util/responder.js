export default (res, next, param) => {
	const status = param.status ? param.status : 500;
	const data = param.data;

	switch (status) {
		case 200:
			res.status(status).json(data);
			break;

		case 404:
			res.status(status).json({ message: data ? data : 'Item not found' });
			break;

		case 409:
			res.status(status).json({ message: data ? data : 'Conflict detected' });
			break;

		default:
			res.status(status).json({ message: data ? data : 'Internal server error' });
	};
};