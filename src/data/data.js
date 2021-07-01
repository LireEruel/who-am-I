const ICON = require("../../assets/images/logo.png");
const Profile = require("../../assets/images/profile_image.png");
const FirstLineTitle = require("../../assets/images/firstLineTitle.png");
const FirstLineMyPage = require("../../assets/images/firstLineMyPage.png");
const FirstLineDetail = require("../../assets/images/firstLineDetail.png");
const FirstLineMain_PC = require("../../assets/images/firstLineMain_PC.png");
const FirstLineMain = require("../../assets/images/firstLineMain.png");
const FirstLineMaster = require("../../assets/images/firstLineMaster.png");

const STORY = [
  {
    title: "I am Seohee",
    image: Profile,
    text:
      "저는 UI/UX 를 소중히 하는 개발자입니다. 주로 react로 웹 디자인 및 제작에 관심이 있습니다.",
    imageList: [{ id: 0, image: Profile }],
  },
  {
    title: "첫줄",
    image: FirstLineTitle,
    text:
      "첫줄은 NLP를 활용하여 감정분석과 욕설탐지를 반응형으로 구현한 웹 어플리케이션입니다. 저는 파이썬을 이용한 데이터 크롤링 및 정제, Django와 React JS를 이용해 사용자페이지와 관리자페이지제작에 기여했습니다. ",
    imageList: [
      { id: 0, image: FirstLineMain },
      { id: 1, image: FirstLineMain_PC },
      { id: 2, image: FirstLineDetail },
      { id: 3, image: FirstLineMyPage },
      { id: 4, image: FirstLineMaster },
    ],
  },
  {
    title: "제목",
    image: ICON,
    text:
      "When a young boy vanishes, a small town uncovers a mystery involving a secret ",
  },
  {
    title: "제목",
    image: ICON,
    text:
      "When a young boy vanishes, a small town uncovers a mystery involving a secret ",
  },
  {
    title: "제목",
    image: ICON,
    text:
      "When a young boy vanishes, a small town uncovers a mystery involving a secret ",
  },
  {
    title: "제목",
    image: ICON,
    text:
      "When a young boy vanishes, a small town uncovers a mystery involving a secret ",
  },
  {
    title: "제목",
    image: ICON,
    text:
      "When a young boy vanishes, a small town uncovers a mystery involving a secret ",
  },
];

export default STORY;
