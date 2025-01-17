// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Anand",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "6375b1340fa5049797e7cbb6e61ac915",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "13.082680",
  defaultLongitude: "80.270721",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  //Links
  cards: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    // {
    //   id: "2",
    //   name: "Mail",
    //   icon: "mail",
    //   link: "https://mail.protonmail.com/",
    // },
    // {
    //   id: "3",
    //   name: "Todoist",
    //   icon: "trello",
    //   link: "https://calendar.google.com/calendar/r",
    // },
    // {
    //   id: "4",
    //   name: "Calendar",
    //   icon: "calendar",
    //   link: "https://calendar.google.com/calendar/r",
    // },
    {
      id: "5",
      name: "Reddit",
      icon: "bookmark",
      link: "https://reddit.com",
    },
    // {
    //   id: "6",
    //   name: "Odysee",
    //   icon: "youtube",
    //   link: "https://odysee.com/",
    // },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "music",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "playlist1",
        link: "https://open.spotify.com/playlist/1LtWfn0qEDr9yguMoK9LgW?si=3489e23234564d88",
      },
      {
        name: "playlist2",
        link: "https://open.spotify.com/playlist/0qnODzDa4t4xjBdvuCjiUc?si=d4c5d8b0e82e4ece",
      },
      {
        name: "playlist3",
        link: "Oldies",
      },
      {
        name: "playlist4",
        link: "https://open.spotify.com/playlist/1R23BFoiidvFnFDUqShRNX?si=939838873e8f4716",
      },
    ],
    secondList: [
      {
        name: "Linkedin",
        link: "https://linkedin.com/",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/",
      },
      {
        name: "Google Meet",
        link: "https://meet.google.com/",
      },
      {
        name: "Github",
        link: "https://github.com/",
      },
    ],
  },
};
