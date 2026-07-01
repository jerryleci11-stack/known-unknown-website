export interface Team {
  id: string;
  name: string;
  type: string;
  division: string;
  goal: string;
  description: string;
  primeLeague: string;

  // Neue Felder
  banner: string;
  color: string;
  captain: string;
  coach: string;

  roster: {
    role: string;
    player: string;
  }[];
}

export const teams: Team[] = [
  {
    id: "xf",
    name: "Known Unknown XF",
    type: "Main Roster",
    division: "Division 5",
    goal: "promotion into division 4",
    description:
      "Our main roster competing in the Prime League with the goal of reaching the next division.",
    primeLeague:
      "https://www.primeleague.gg/de/leagues/prm/3220-spring-split-202526/teams/204667-known-unknown-xf",

    banner: "/images/xf-banner.jpg",
    color: "#7c3aed",
    captain: "Policara,Tygra",
    coach: "Tygra",

    roster: [
      { role: "Top", player: "Luxo" },
      { role: "Jungle", player: "Coming Soon" },
      { role: "Mid", player: "Coming Soon" },
      { role: "ADC", player: "Policara" },
      { role: "Support", player: "Coming Soon" },
    ],
  },

  {
    id: "avengers",
    name: "Known Unknown Avengers",
    type: "Academy Roster",
    division: "Division 6",
    goal: "Promotion",
    description:
      "Our second competitive roster focused on improvement, teamwork and climbing the Prime League ladder.",
    primeLeague:
      "https://www.primeleague.gg/de/leagues/teams/204088-known-unknown-avengers",

    banner: "/images/avengers-banner.jpg",
    color: "#8b5cf6",
    captain: "Coming Soon",
    coach: "Coming Soon",

    roster: [
      { role: "Top", player: "Coming Soon" },
      { role: "Jungle", player: "Coming Soon" },
      { role: "Mid", player: "Coming Soon" },
      { role: "ADC", player: "Coming Soon" },
      { role: "Support", player: "Coming Soon" },
    ],
  },
];