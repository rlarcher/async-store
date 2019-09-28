import AsyncStoreParams from './AsyncStoreParams';

/**
 * Async Store implementation contract.
 */
interface AsyncStore {
  initialize: (callback: (err?: any) => void, params?: AsyncStoreParams) => void;
  set: (properties: any) => void;
  get: (key: string, short?: boolean) => any;
  find: (key: string) => any;
  isInitialized: () => boolean;
  getId: () => string | undefined;
}

export default AsyncStore;
