import { React } from 'react';
const element = (ele, i) => {
	const { name } = ele;
	const { age } = ele;
	const { gender } = ele;
	const { phoneNO } = ele;

	return (
		<div key={ i }>
			<div>{ name } </div>
			<div>{ age } </div>
			<div>{ gender } </div>
			<div>{ phoneNO } </div>
		</div>
	);
};

export default element;
