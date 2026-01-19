import rawStates from "./states.json";

export const statesList = Object.fromEntries(
  rawStates.map((s) => [s.Code, s.StateName])
);
