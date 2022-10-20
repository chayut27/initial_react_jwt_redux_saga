import React from 'react'
const Package = React.lazy(() => import('./views/package/'))
const UserManageMent = React.lazy(() => import('./views/user_management/'))
const OfficialAccount = React.lazy(() => import('./views/official_account/'))
const ResellerManageMent = React.lazy(() => import('./views/reseller_management/'))
const Commission = React.lazy(() => import('./views/commission/'))
const Transaction = React.lazy(() => import('./views/transaction/'))


const routes = [
    { path: '/', element: Package },
    { path: '/package', element: Package },
    { path: '/user_management', element: UserManageMent },
    { path: '/official_account', element: OfficialAccount },
    { path: '/reseller_management', element: ResellerManageMent },
]

export default routes