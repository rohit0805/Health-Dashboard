const iconPath = "./icons/";
const userPath = "./users/";

const logo = `${iconPath}TestLogo.svg`;
const loginUserLogo = `${userPath}small/doctor.png`;
const settingLogo = `${iconPath}settings_FILL0_wght300_GRAD0_opsz24.svg`;
const verticalLogo = `${iconPath}more_vert_FILL0_wght300_GRAD0_opsz24.svg`;
const horizontalLogo = `${iconPath}more_horiz_FILL0_wght300_GRAD0_opsz24.svg`;
const searchLogo = `${iconPath}search_FILL0_wght300_GRAD0_opsz24.svg`;
const heartLogo = `${iconPath}HeartBPM.svg`;
const tempLogo = `${iconPath}temperature.svg`;
const respLogo = `${iconPath}respiratory_rate.svg`;
const scheduleLogo = `${iconPath}calendar_today_FILL0_wght300_GRAD0_opsz24.svg`;
const genderLogo = `${iconPath}FemaleIcon.svg`;
const callLogo = `${iconPath}PhoneIcon.svg`;
const insuranceIcon = `${iconPath}InsuranceIcon.svg`;
const downloadIcon = `${iconPath}download_FILL0_wght300_GRAD0_opsz24(1).svg`

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

export {
  logo,
  navbarActionList,
  loginUserLogo,
  settingLogo,
  verticalLogo,
  horizontalLogo,
  searchLogo,
  heartLogo,
  tempLogo,
  respLogo,
  scheduleLogo,
  genderLogo,
  callLogo,
  insuranceIcon,
  downloadIcon
};
