const List = (context) => {
	const { config, state } = context;
	const display = config.data.filter((element) =>
		element.name === state.input);

	if(display.length === 0)
		return [{ name: 'Not Found' }];
	else
		return display;
};

const peopleDetails = {
	List,
};

export default peopleDetails;
