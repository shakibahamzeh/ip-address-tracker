import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';
import Input from './components/input/input';
import { ArrowRight2 } from 'iconsax-react';
import Card from './components/card/card';

export function App() {
	return (
		<>
		 <header>
			<h1>IP Address Tracker</h1>
			<div className="form-control">
				<Input type="text" placeholder="Search for any IP address or domain" />
				<div className="icon-wrapper">
				 <ArrowRight2 size="20" />
				</div>
			</div>
		 </header>
		 <section>
			<Card title={111} content={1111}/>
			<Card title={111} content={1111}/>
			<Card title={111} content={1111}/>
			<Card title={111} content={1111}/>
		 </section>
		</>
	);
}



render(<App />, document.getElementById('app'));
