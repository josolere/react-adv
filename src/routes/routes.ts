import {lazy} from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy';
interface IRoute {
    path:string;
    component:React.FC;
    name:string;
    children?:IRoute[];
}

// const LazyPage1 = lazy(()=>import(/*webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))

export const routes:IRoute[] =[
    {
        path:'/lazyload',
        component:lazy(()=>import(/*webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')),
        name:'LazyLoadingNested',
    },
    {
        path:'/no-lazy',
        component:NoLazy,
        name:'No lazy loading',
    },
]