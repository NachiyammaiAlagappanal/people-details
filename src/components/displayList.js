import { React } from 'react';
import context from '../core/context';
import element from './element.js';

const DisplayList = () =>
	<div>
		{ context.state.display.map(element) }
	</div>;

export default DisplayList;
