export interface Team {
  id: string;
  name: string;
  division: string;
  goal: string;
  description: string;
  primeLeague: string;
}

export const teams: Team[] = [
  {
    id: "xf",
    name: "Known Unknown XF",
    division: "Division 4",
    goal: "Promotion",
    description:
      "Our main roster competing in the Prime League with the goal of reaching the next division.",
    primeLeague:
      "https://www.primeleague.gg/de/leagues/prm/3220-spring-split-202526/teams/204667-known-unknown-xf",
  },
  {
    id: "avengers",
    name: "Known Unknown Avengers",
    division: "Division 6",
    goal: "Promotion",
    description:
      "Our second competitive roster focused on improvement, teamwork and climbing the Prime League ladder.",
    primeLeague:
      "https://www.primeleague.gg/de/leagues/teams/204088-known-unknown-avengers",
  },
];