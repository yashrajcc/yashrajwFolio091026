import * as migration_20261009_145942_initial from './20261009_145942_initial';

export const migrations = [
  {
    up: migration_20261009_145942_initial.up,
    down: migration_20261009_145942_initial.down,
    name: '20261009_145942_initial'
  },
];
