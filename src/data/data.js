const ICON = require("../../assets/images/logo.png");
const Profile = require("../../assets/images/profile_image.png");
const FirstLineTitle = require("../../assets/images/firstLineTitle.png");
const FirstLineMyPage = require("../../assets/images/firstLineMyPage.png");
const FirstLineDetail = require("../../assets/images/firstLineDetail.png");
const FirstLineMain_PC = require("../../assets/images/firstLineMain_PC.png");
const FirstLineMain = require("../../assets/images/firstLineMain.png");
const FirstLineMaster = require("../../assets/images/firstLineMaster.png");
const BukPagoLogo = require("../../assets/images/bukPagoLogo.png");
const BukPagoMain = require("../../assets/images/bukPagoMain.png");
const BukPagoDick = require("../../assets/images/bukPagoDick.png");
const BukPagoAPI = require("../../assets/images/bukPagoAPI.png");
const BukPagoFile = require("../../assets/images/bukPagoFile.png");
const BukPagoTrain = require("../../assets/images/bukPagoTrain.png");
const Kumoh42Logo = require("../../assets/images/kumoh42Logo.png");
const Kumoh42Main = require("../../assets/images/kumoh42Main.png");
const Kumoh42Mobile = require("../../assets/images/kumoh42Mobile.jpg");
const Kumoh42Review = require("../../assets/images/kumoh42Review.png");
const Kumoh42Sport = require("../../assets/images/kumoh42Sport.png");
const Kumoh42Food = require("../../assets/images/kumoh42Food.png");
const Kumoh42Call = require("../../assets/images/kumoh42Call.png");
const Before = require("../../assets/images/before.jpg");
const AfterDetail = require("../../assets/images/afterDetail.png");
const After = require("../../assets/images/after.png");
const HCLT_logo = require("../../assets/images/HCLT_logo.png");

const STORY = [
  {
    title: "I am Seohee",
    image: Profile,
    text:
      "저는 UI/UX 를 소중히 하는 개발자입니다.\n주로 웹과 모바일 디자인 및 제작에 관심이 있습니다.",
    imageList: [{ id: 0, image: Profile }],
  },
  {
    title: "첫줄",
    image: FirstLineTitle,
    text:
      "첫줄은 NLP를 활용하여 감정 분석과 욕설 탐지를 반응형으로 구현한 웹 어플리케이션입니다.\n저는 디자인 총괄, 파이썬을 이용한 데이터 크롤링 및 정제, Django와 React JS를 이용한 사용자 페이지와 관리자 페이지 제작에 기여했습니다. ",
    imageList: [
      { id: 0, image: FirstLineMain },
      { id: 1, image: FirstLineMain_PC },
      { id: 2, image: FirstLineDetail },
      { id: 3, image: FirstLineMyPage },
      { id: 4, image: FirstLineMaster },
    ],
  },
  {
    title: "북파고",
    image: BukPagoLogo,
    text:
      "북파고는 NLP를 활용한 북한말 번역 기능을 제공하는 웹 어플리케이션입니다. \n저는 디자인 총괄, 파이썬을 이용한 데이터 크롤링 및 정제, Django와 React JS를 이용하여 프론트의 대부분과 백엔드의 일부에 기여했습니다.",
    imageList: [
      { id: 0, image: BukPagoMain },
      { id: 1, image: BukPagoAPI },
      { id: 2, image: BukPagoTrain },
      { id: 3, image: BukPagoFile },
      { id: 4, image: BukPagoDick },
    ],
  },
  {
    title: "금오사이",
    image: Kumoh42Logo,
    text:
      "금오사이는 금오공과대학교 학생들의 커뮤니티입니다. \n 웹과 모바일 앱에서는 커뮤니티 기능 외에도 다양한 기능을 제공 중입니다. \n 저는 로고, 웹, 모바일의 전체적인 디자인, CS, 마케팅을 했습니다. 현재는 총괄 팀장으로 운영, 이슈관리 및 유지 보수 등을 하고있습니다.",
    imageList: [
      { id: 0, image: Kumoh42Logo },
      { id: 1, image: Kumoh42Main },
      { id: 2, image: Kumoh42Mobile },
      { id: 3, image: Kumoh42Review },
      { id: 4, image: Kumoh42Sport },
      { id: 5, image: Kumoh42Food },
      { id: 6, image: Kumoh42Call },
    ],
  },
  {
    title: "UI 디자인 외주",
    image: Before,
    text:
      "심리학 앱 제작 중 클라이언트와 개발자 사이에 UI 관련 소통이 잘 되지 않아 제게 의뢰를 요청했습니다.\n요청받은 개선사항은 2가지였습니다.\n1. 화면이 작은 기기에서는 문항이 잘 보이지 않는다. 2. 글자가 의미 전달이 되지 않고 글자로만 보인다.\n 이를 해결하기 위해 낭비되는 공간이 없도록 UI를 재배치했습니다. 눈에 편안한 색상을 사용하고 글자와 배경의 대비를 키우고 폰트 크기도 늘렸습니다",
    imageList: [
      { id: 0, image: Before },
      { id: 1, image: After },
      { id: 2, image: AfterDetail },
    ],
  },
  {
    title: "HCLT2020 운영",
    image: HCLT_logo,
    text:
      "한국 정보 과학회에서 주최하는 한글 및 한국어 정보처리 학술대회의 운영인력으로 일했습니다. 학회 측에서도 첫 온라인 학회라 어떤 레퍼런스도 없는 상황에서 19개의 대기 화면을 제작했습니다. 하지만 큰 호응을 얻으며, 좋은 결과물이 나와 제가 디자인한 이미지가 다음 학회를 위한 인수인계 자료에 포함이 되었습니다.",
    imageList: [
      { id: 0, image: HCLT_logo },
      { id: 1, image: After },
      { id: 2, image: AfterDetail },
    ],
  },
];

export default STORY;
