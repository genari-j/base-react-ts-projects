import './themes/global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { client } from '~/api/config'
import { Toaster } from 'react-hot-toast'

import { router } from '~/routes'

export function App() {
	return (
		<QueryClientProvider client={client}>
			<Toaster position="bottom-right" />
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}
