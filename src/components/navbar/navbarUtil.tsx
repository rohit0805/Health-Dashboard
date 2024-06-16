const iconPath = "./icons/";
const userPath = "./users/";

const logo = `${iconPath}TestLogo.svg`;
const loginUserLogo = `${userPath}small/doctor.png`;
const settingLogo = `${iconPath}settings_FILL0_wght300_GRAD0_opsz24.svg`;
const verticalLogo = `${iconPath}more_vert_FILL0_wght300_GRAD0_opsz24.svg`;

const navbarActionList: INavbarAction[] = [
  {
    src: `${iconPath}home_FILL0_wght300_GRAD0_opsz24.svg`,
    name: "Overview",
    selected: false,
  },
  {
    src: `${iconPath}group_FILL0_wght300_GRAD0_opsz24.svg`,
    name: "Patients",
    selected: true,
  },
  {
    src: `${iconPath}calendar_today_FILL0_wght300_GRAD0_opsz24.svg`,
    name: "Schedule",
    selected: false,
  },
  {
    src: `${iconPath}chat_bubble_FILL0_wght300_GRAD0_opsz24.svg`,
    name: "Message",
    selected: false,
  },
  {
    src: `${iconPath}credit_card_FILL0_wght300_GRAD0_opsz24.svg`,
    name: "Transactions",
    selected: false,
  },
];

export { logo, navbarActionList, loginUserLogo, settingLogo, verticalLogo };
