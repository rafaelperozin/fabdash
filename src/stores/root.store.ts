import { Instance, types } from "mobx-state-tree";

import { userStore, UserStore } from "src/stores/user.store";

export const RootStore = types.model("RootStore", {
  user: UserStore,
});

export type RootStoreType = Instance<typeof RootStore>;

export const createStore = () =>
  RootStore.create({
    user: userStore,
  });

export const rootStore = createStore();
