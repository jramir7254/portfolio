import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),
    route('framer', 'routes/framer.tsx'),
] satisfies RouteConfig;
