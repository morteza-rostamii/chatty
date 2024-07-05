import { helper } from "@/utils/helper";
//import { faker } from "@faker-js/faker";
import { 
  HiMiniArrowTrendingUp, 
  HiOutlineArchiveBox, 
  HiOutlineArchiveBoxArrowDown, 
  HiOutlineBanknotes, 
  HiOutlineBolt, 
  HiOutlineCalculator, 
  HiOutlineChartBarSquare, 
  //HiOutlineEnvelope, 
  HiOutlineGift, 
  HiOutlineLightBulb, 
  HiOutlinePresentationChartLine, 
  HiOutlineRocketLaunch, 
  HiOutlineTicket,
  HiOutlineTrophy, 
  HiOutlineWallet, 
  //HiPresentationChartLine 

} from "react-icons/hi2";
import { PiCrownSimple } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHourglassStart, FaRegStickyNote } from "react-icons/fa";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaBasketShopping } from "react-icons/fa6";
import { ROUTES } from "@/constants/const";
import { BiSupport } from "react-icons/bi";
import { create } from 'zustand'
//import toast from 'react-hot-toast';

//const toastError = (err: string) => toast.error(err || 'Some Error!');
//const toastSuccess = (msg: string) => toast.success(msg || 'Some Success!');

export const useLangDataStore = create<any>((
  //set: any, 
  //get: any
) => ({
  historyStack: [],

  categories: [
    {
      id: helper.getRandomId(),
      name: 'Trade',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: '',
          pageName: 'wallet',
          href: ROUTES.wallet.link1,
          icon: HiOutlineWallet
        },
        {
          id: helper.getRandomId(),
          name: 'Accounts',
          pageName: 'accounts',
          href: ROUTES.accounts.link1,
          icon: HiMiniArrowTrendingUp,
        },
        {
          id: helper.getRandomId(),
          name: 'Bonus',
          pageName: 'bonus',
          href: ROUTES.bonus.link1,
          icon: HiOutlineGift ,
        },
        {
          id: helper.getRandomId(),
          name: 'Promo Code',
          pageName: 'promoCode',
          href: ROUTES.promoCode.link1,
          icon: HiOutlineTicket,
        },
        {
          id: helper.getRandomId(),
          name: "Contact",
          pageName: 'contact',
          href: ROUTES.contact.link1,
          icon: BiSupport,
        },
        {
          id: helper.getRandomId(),
          name: 'Ai Analysis',
          pageName: 'aiAnalysis',
          href: ROUTES.aiAnalysis.link1,
          icon: HiOutlineLightBulb,
        },
      ],
      href: 'trade',
      icon: HiOutlineBanknotes,
    },
    {
      id: helper.getRandomId(),
      name: 'Contests',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: 'Contests',
          pageName: 'contests',
          href: ROUTES.contests.link1,
          icon: HiOutlineRocketLaunch
        },
        {
          id: helper.getRandomId(),
          name: 'My Contests',
          pageName: 'myContests',
          href: ROUTES.myContests.link1,
          icon: HiOutlineTrophy,
        },
        {
          id: helper.getRandomId(),
          name: 'Active Contests',
          pageName: 'activeContests',
          href: ROUTES.activeContests.link1,
          icon: PiCrownSimple ,
        },
      ],
      href: 'contest',
      icon: HiOutlineTrophy,
    },
    // investments
    {
      id: helper.getRandomId(),
      name: 'Smart Investment',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: 'Investments',
          pageName: 'investments',
          href: ROUTES.investments.link1,
          icon: GrMoney 
        },
        {
          id: helper.getRandomId(),
          name: 'My Investments',
          pageName: 'myInvestments',
          href: ROUTES.myInvestments.link1,
          icon: SiMoneygram,
        },
        {
          id: helper.getRandomId(),
          name: 'Profit Calculator',
          pageName: 'calculator',
          href: ROUTES.calculator.link1,
          icon: GiTakeMyMoney,
        },
      ],
      href: 'investment',
      icon: HiOutlineChartBarSquare ,
    },
    {
      id: helper.getRandomId(),
      name: 'Pamm Accounts',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: 'Pamm Ratings',
          pageName: 'pammRatings',
          href: ROUTES.pammRatings.link1,
          icon: HiOutlineCalculator 
        },
        {
          id: helper.getRandomId(),
          name: 'My PAMM Accounts',
          pageName: 'myPammAccounts',
          href: ROUTES.myPammAccounts.link1,
          icon: HiOutlinePresentationChartLine,
        },
        {
          id: helper.getRandomId(),
          name: 'My Pamm Investments',
          pageName: 'myPammInvestments',
          href: ROUTES.myPammInvestments.link1,
          icon: HiOutlineBolt ,
        },
      ],
      href: 'pamm',
      icon: HiOutlineArchiveBoxArrowDown,
    },
    {
      id: helper.getRandomId(),
      name: 'ib',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: 'Ib Dashboard',
          pageName: 'dashboard',
          href: ROUTES.dashboard.link1,
          icon: HiOutlineCalculator 
        },
        {
          id: helper.getRandomId(),
          name: 'Ib Affiliates',
          pageName: 'affiliates',
          href: ROUTES.affiliates.link1,
          icon: HiOutlinePresentationChartLine,
        },
      ],
      href: 'ib',
      icon: HiOutlineArchiveBoxArrowDown,
    },

    // prop-trading
    {
      id: helper.getRandomId(),
      name: 'Prop Trading',
      subCategories: [
        {
          id: helper.getRandomId(),
          name: 'New Challenge2',
          pageName: 'newChallenges',
          href: ROUTES.newChallenges.link1,
          icon: HiOutlineArchiveBox 
        },
        {
          id: helper.getRandomId(),
          name: 'My Prop challenges',
          pageName: 'myChallenges',
          href: ROUTES.myChallenges.link1,
          icon: HiOutlineColorSwatch 
        },
        {
          id: helper.getRandomId(),
          name: 'Trading Orders',
          pageName: 'orders',
          href: ROUTES.orders.link1,
          icon: FaBasketShopping 
        },
        {
          id: helper.getRandomId(),
          name: 'Requests',
          pageName: 'requests',
          href: ROUTES.requests.link1,
          icon: FaRegStickyNote 
        },
        {
          id: helper.getRandomId(),
          name: 'Top Traders',
          pageName: 'topTraders',
          href: ROUTES.topTraders.link1,
          icon: FaRegStickyNote 
        },
        {
          id: helper.getRandomId(),
          name: 'Certificates',
          pageName: 'certificate',
          href: ROUTES.certificate.link1,
          icon: FaRegStickyNote 
        },
        {
          id: helper.getRandomId(),
          name: 'Withdraw Profit',
          pageName: 'withdrawProfit',
          href: ROUTES.withdrawProfit.link1,
          icon: FaRegStickyNote 
        },
        {
          id: helper.getRandomId(),
          name: 'Prop Trading Rules',
          pageName: 'rules',
          href: ROUTES.rules.link1,
          icon: FaRegStickyNote 
        },

      ],
      href: 'prop',
      icon: HiOutlineArchiveBoxArrowDown,
    },
  ]
  
}));

//@ts-ignore
const unsub = useLangDataStore.subscribe((state:any) => {
  console.log('useLangDataStore:', state);
});