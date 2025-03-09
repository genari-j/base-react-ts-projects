import { createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '~/routes'
import * as Pages from '~/pages'
// import { AuthenticatedLayout, PublicLayout } from '~/templates'

export const router = createBrowserRouter([
	{
		errorElement: <Pages.NotFound />,
		children: [
			{
				// element: <PublicLayout />,
				children: [{ path: '/entrar', element: <Pages.SignIn /> }],
			},
			{
				element: <PrivateRoutes />,
				children: [
					{
						// element: <AuthenticatedLayout />,
						children: [{ path: '/', element: <Pages.Home /> }],
					},
				],
			},
		],
	},
])
