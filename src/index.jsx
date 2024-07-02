import { render } from 'preact';
import IPAddressTracker from './app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export function App() {

	const queryClient = new QueryClient() 
	return (
		<>
		 <QueryClientProvider client={queryClient}>
		 <IPAddressTracker/>
		 </QueryClientProvider>
		</>
	);
}



render(<App />, document.getElementById('app'));
