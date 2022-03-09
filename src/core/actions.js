
import peopleDetails from '../services/peopleDetails.js';
const addName = ({ data }) => ({
	input:	data,
});

const dataList = (context) => ({
	display: peopleDetails.List(context),
});

const actions = {
	addName,
	dataList,
};

export default actions;
