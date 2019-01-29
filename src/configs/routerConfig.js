import LeftSide from '../components/layouts/leftSide';

export const routerConfig = [
    {
        path: '/',
        component: LeftSide,
        indexRoute: {component: LeftSide},
        childRoutes: [
            {
                path: 'option1', component: LeftSide
            }
        ]
    }
]