import context from '../core/context.js';
import { React } from 'react';

const displayButton = () =>
	<button
		onClick={ () => context.actions.dataList() }
	> DisplayList
	</button>;

export default displayButton;
