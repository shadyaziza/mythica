import { IContext, createOvermind, derived } from 'overmind';
import { StateHook, createActionsHook, createStateHook } from 'overmind-react';

type State = {
  state: {
    huntedCreatures: Array<number>; // list of ids of hunted creatures
    won: boolean;
    len: number;
  };
};

export const useAppState = createStateHook() as StateHook<IContext<State>>;
export const useAction = createActionsHook();

export const appState = createOvermind({
  state: {
    huntedCreatures: [],
    len: 0,
    won: false,
  },
  actions: {
    huntCreature({ state }: State, creatureId: number) {
      console.log(creatureId);
      if (state.huntedCreatures.includes(creatureId)) {
        state.huntedCreatures = state.huntedCreatures.filter(
          (id) => id != creatureId
        );
        state.len--;
      } else {
        state.huntedCreatures.push(creatureId);
        state.len++;
      }
      if (state.len == 5) {
        state.won = true;
        state.huntedCreatures = [];
        state.len = 0;
      }
      console.log({ len: state.len });
      console.log(state.huntedCreatures);
    },
  },
});
