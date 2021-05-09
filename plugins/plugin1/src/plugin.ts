import { createPlugin, createRoutableExtension } from '@backstage/core';

import { rootRouteRef } from './routes';

export const plugin1Plugin = createPlugin({
  id: 'plugin1',
  routes: {
    root: rootRouteRef,
  },
});

export const Plugin1Page = plugin1Plugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
