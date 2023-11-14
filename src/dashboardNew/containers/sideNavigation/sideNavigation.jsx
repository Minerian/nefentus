import styles from "./sideNavigation.module.css";
import Notification from "../../../assets/icon/notification2.svg";
import Profile from "../../../assets/icon/user.svg";
import LightMode from "../../../assets/icon/lightMode2.svg";
import DarkMode from "../../../assets/icon/darkMode2.svg";

import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SideNavigation = () => {
  const { t } = useTranslation();

  const query = useLocation();

  const [active, setActive] = useState(0);
  const [lightMode, setLightMode] = useState(false);

  const content = [
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.27273 1.45455V5.81818C7.27273 6.20395 7.11948 6.57392 6.8467 6.8467C6.57392 7.11948 6.20395 7.27273 5.81818 7.27273H1.45455C1.06878 7.27273 0.698807 7.11948 0.426026 6.8467C0.153246 6.57392 0 6.20395 0 5.81818V1.45455C0 1.06878 0.153246 0.698807 0.426026 0.426026C0.698807 0.153246 1.06878 0 1.45455 0H5.81818C6.20395 0 6.57392 0.153246 6.8467 0.426026C7.11948 0.698807 7.27273 1.06878 7.27273 1.45455ZM14.5455 0H10.1818C9.79605 0 9.42608 0.153246 9.1533 0.426026C8.88052 0.698807 8.72727 1.06878 8.72727 1.45455V5.81818C8.72727 6.20395 8.88052 6.57392 9.1533 6.8467C9.42608 7.11948 9.79605 7.27273 10.1818 7.27273H14.5455C14.9312 7.27273 15.3012 7.11948 15.574 6.8467C15.8468 6.57392 16 6.20395 16 5.81818V1.45455C16 1.06878 15.8468 0.698807 15.574 0.426026C15.3012 0.153246 14.9312 0 14.5455 0ZM5.81818 8.72727H1.45455C1.06878 8.72727 0.698807 8.88052 0.426026 9.1533C0.153246 9.42608 0 9.79605 0 10.1818V14.5455C0 14.9312 0.153246 15.3012 0.426026 15.574C0.698807 15.8468 1.06878 16 1.45455 16H5.81818C6.20395 16 6.57392 15.8468 6.8467 15.574C7.11948 15.3012 7.27273 14.9312 7.27273 14.5455V10.1818C7.27273 9.79605 7.11948 9.42608 6.8467 9.1533C6.57392 8.88052 6.20395 8.72727 5.81818 8.72727ZM14.5455 8.72727H10.1818C9.79605 8.72727 9.42608 8.88052 9.1533 9.1533C8.88052 9.42608 8.72727 9.79605 8.72727 10.1818V14.5455C8.72727 14.9312 8.88052 15.3012 9.1533 15.574C9.42608 15.8468 9.79605 16 10.1818 16H14.5455C14.9312 16 15.3012 15.8468 15.574 15.574C15.8468 15.3012 16 14.9312 16 14.5455V10.1818C16 9.79605 15.8468 9.42608 15.574 9.1533C15.3012 8.88052 14.9312 8.72727 14.5455 8.72727Z" />
        </svg>
      ),
      link: "/dashboard/",
      text: t("sidebar.dashboard"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.62061 14.0689C6.62061 14.2871 6.55589 14.5005 6.43464 14.6819C6.3134 14.8634 6.14106 15.0048 5.93944 15.0883C5.73781 15.1718 5.51595 15.1937 5.3019 15.1511C5.08786 15.1085 4.89124 15.0034 4.73693 14.8491C4.58261 14.6948 4.47752 14.4982 4.43494 14.2841C4.39236 14.0701 4.41422 13.8482 4.49773 13.6466C4.58125 13.445 4.72268 13.2727 4.90414 13.1514C5.0856 13.0302 5.29893 12.9654 5.51717 12.9654C5.80982 12.9654 6.09048 13.0817 6.29742 13.2886C6.50435 13.4956 6.62061 13.7762 6.62061 14.0689ZM12.6895 12.9654C12.4713 12.9654 12.2579 13.0302 12.0765 13.1514C11.895 13.2727 11.7536 13.445 11.6701 13.6466C11.5865 13.8482 11.5647 14.0701 11.6073 14.2841C11.6498 14.4982 11.7549 14.6948 11.9093 14.8491C12.0636 15.0034 12.2602 15.1085 12.4742 15.1511C12.6883 15.1937 12.9101 15.1718 13.1118 15.0883C13.3134 15.0048 13.4857 14.8634 13.607 14.6819C13.7282 14.5005 13.7929 14.2871 13.7929 14.0689C13.7929 13.7762 13.6767 13.4956 13.4697 13.2886C13.2628 13.0817 12.9821 12.9654 12.6895 12.9654ZM15.8922 3.81039C15.8409 3.74086 15.774 3.68435 15.6968 3.64542C15.6197 3.60649 15.5345 3.58622 15.4481 3.58625H3.33237L2.77307 1.62766C2.70632 1.39755 2.56684 1.19525 2.37551 1.05104C2.18418 0.90683 1.95129 0.828462 1.7117 0.827667H0.551717C0.405393 0.827667 0.265061 0.885794 0.161594 0.989261C0.0581272 1.09273 0 1.23306 0 1.37938C0 1.52571 0.0581272 1.66604 0.161594 1.76951C0.265061 1.87297 0.405393 1.9311 0.551717 1.9311H1.7117L4.20684 10.6613C4.3067 11.0065 4.51568 11.3101 4.8025 11.5265C5.08932 11.743 5.43853 11.8607 5.79786 11.862H12.4261C12.7803 11.8632 13.1255 11.7503 13.4105 11.5398C13.6955 11.3294 13.905 11.0327 14.0081 10.6938L15.9757 4.30004C16.001 4.21758 16.0066 4.13033 15.9922 4.04529C15.9777 3.96025 15.9434 3.8798 15.8922 3.81039Z" />
        </svg>
      ),
      link: "/dashboard/products",
      text: t("sidebar.products"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.8571 2.28571H1.14286C0.839753 2.28571 0.549062 2.40611 0.334735 2.62044C0.120408 2.83477 0 3.12546 0 3.42856V12.5714C0 12.8745 0.120408 13.1652 0.334735 13.3795C0.549062 13.5939 0.839753 13.7143 1.14286 13.7143H14.8571C15.1602 13.7143 15.4509 13.5939 15.6653 13.3795C15.8796 13.1652 16 12.8745 16 12.5714V3.42856C16 3.12546 15.8796 2.83477 15.6653 2.62044C15.4509 2.40611 15.1602 2.28571 14.8571 2.28571ZM8.57143 11.4286H7.42857C7.27702 11.4286 7.13167 11.3684 7.02451 11.2612C6.91735 11.154 6.85714 11.0087 6.85714 10.8571C6.85714 10.7056 6.91735 10.5602 7.02451 10.4531C7.13167 10.3459 7.27702 10.2857 7.42857 10.2857H8.57143C8.72298 10.2857 8.86833 10.3459 8.97549 10.4531C9.08265 10.5602 9.14286 10.7056 9.14286 10.8571C9.14286 11.0087 9.08265 11.154 8.97549 11.2612C8.86833 11.3684 8.72298 11.4286 8.57143 11.4286ZM13.1429 11.4286H10.8571C10.7056 11.4286 10.5602 11.3684 10.4531 11.2612C10.3459 11.154 10.2857 11.0087 10.2857 10.8571C10.2857 10.7056 10.3459 10.5602 10.4531 10.4531C10.5602 10.3459 10.7056 10.2857 10.8571 10.2857H13.1429C13.2944 10.2857 13.4398 10.3459 13.5469 10.4531C13.6541 10.5602 13.7143 10.7056 13.7143 10.8571C13.7143 11.0087 13.6541 11.154 13.5469 11.2612C13.4398 11.3684 13.2944 11.4286 13.1429 11.4286ZM1.14286 5.14285V3.42856H14.8571V5.14285H1.14286Z" />
        </svg>
      ),
      link: "/dashboard/payments",
      text: t("sidebar.payments"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.1538 1.84616H1.84615C1.35652 1.84616 0.886947 2.04067 0.540726 2.38689C0.194505 2.73311 0 3.20268 0 3.69231V12.3077C0 12.7973 0.194505 13.2669 0.540726 13.6131C0.886947 13.9593 1.35652 14.1539 1.84615 14.1539H14.1538C14.6435 14.1539 15.1131 13.9593 15.4593 13.6131C15.8055 13.2669 16 12.7973 16 12.3077V3.69231C16 3.20268 15.8055 2.73311 15.4593 2.38689C15.1131 2.04067 14.6435 1.84616 14.1538 1.84616ZM9.80923 7.75462C9.72303 8.17032 9.49618 8.5436 9.16691 8.81159C8.83765 9.07958 8.42608 9.2259 8.00154 9.2259C7.577 9.2259 7.16543 9.07958 6.83616 8.81159C6.5069 8.5436 6.28005 8.17032 6.19385 7.75462C6.13718 7.47609 5.98585 7.22577 5.76557 7.04614C5.54528 6.86652 5.26962 6.76868 4.98538 6.76924H1.23077V5.53847H14.7692V6.76924H11.0146C10.7309 6.76939 10.456 6.86756 10.2363 7.04712C10.0167 7.22668 9.8658 7.47661 9.80923 7.75462ZM1.84615 3.07693H14.1538C14.3171 3.07693 14.4736 3.14177 14.589 3.25717C14.7044 3.37258 14.7692 3.5291 14.7692 3.69231V4.3077H1.23077V3.69231C1.23077 3.5291 1.2956 3.37258 1.41101 3.25717C1.52642 3.14177 1.68294 3.07693 1.84615 3.07693Z" />
        </svg>
      ),
      link: "",
      soon: true,
      text: t("sidebar.defiCard"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.91484 7.21733C3.78197 7.27245 3.63574 7.28693 3.49465 7.25894C3.35355 7.23095 3.22393 7.16174 3.12217 7.06007L0.213286 4.15118C0.145671 4.08365 0.0920319 4.00344 0.0554351 3.91516C0.0188382 3.82687 2.49795e-06 3.73224 2.50213e-06 3.63668C2.50631e-06 3.54111 0.0188382 3.44648 0.0554351 3.35819C0.092032 3.26991 0.145671 3.18971 0.213286 3.12217L3.12217 0.213284C3.22387 0.111465 3.3535 0.0421118 3.49464 0.0140045C3.63579 -0.0141029 3.7821 0.00029944 3.91505 0.0553882C4.048 0.110477 4.16162 0.203775 4.24152 0.323471C4.32142 0.443167 4.36401 0.583879 4.3639 0.727793L4.3639 2.90945L15.2722 2.90946C15.4651 2.90946 15.65 2.98607 15.7864 3.12245C15.9228 3.25883 15.9994 3.44381 15.9994 3.63668C15.9994 3.82955 15.9228 4.01452 15.7864 4.1509C15.65 4.28728 15.4651 4.3639 15.2722 4.3639L4.3639 4.3639L4.3639 6.54556C4.36387 6.68939 4.32119 6.82998 4.24126 6.94955C4.16132 7.06913 4.04773 7.16231 3.91484 7.21733ZM12.8778 15.7867L15.7867 12.8778C15.8543 12.8103 15.908 12.7301 15.9446 12.6418C15.9812 12.5535 16 12.4589 16 12.3633C16 12.2678 15.9812 12.1731 15.9446 12.0848C15.908 11.9966 15.8543 11.9164 15.7867 11.8488L12.8778 8.93993C12.7761 8.83811 12.6465 8.76876 12.5054 8.74065C12.3642 8.71255 12.2179 8.72695 12.085 8.78204C11.952 8.83713 11.8384 8.93042 11.7585 9.05012C11.6786 9.16982 11.636 9.31053 11.6361 9.45444L11.6361 11.6361L0.727794 11.6361C0.534923 11.6361 0.349951 11.7127 0.213571 11.8491C0.0771907 11.9855 0.000573599 12.1705 0.000573591 12.3633C0.000573582 12.5562 0.0771907 12.7412 0.213571 12.8775C0.349951 13.0139 0.534923 13.0905 0.727794 13.0905L11.6361 13.0905L11.6361 15.2722C11.636 15.4161 11.6786 15.5568 11.7585 15.6765C11.8384 15.7962 11.952 15.8895 12.085 15.9446C12.2179 15.9997 12.3642 16.0141 12.5054 15.986C12.6465 15.9579 12.7761 15.8885 12.8778 15.7867Z" />
        </svg>
      ),
      link: "/dashboard/transactions",
      text: t("sidebar.transactions"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.805 12.8617C13.867 12.9236 13.9162 12.9971 13.9497 13.078C13.9833 13.159 14.0005 13.2457 14.0005 13.3333C14.0005 13.4209 13.9833 13.5077 13.9497 13.5886C13.9162 13.6696 13.867 13.7431 13.805 13.805C13.715 13.8942 11.5683 16 8 16C6.05333 16 4.15583 15.2417 2.47667 13.7992L1.13833 15.1383C1.0451 15.2317 0.926261 15.2953 0.796871 15.321C0.667482 15.3468 0.533356 15.3336 0.411473 15.2831C0.289591 15.2326 0.185434 15.1471 0.112187 15.0373C0.0389395 14.9276 -0.000103618 14.7986 2.06534e-07 14.6667V10.6667C2.06534e-07 10.4899 0.0702382 10.3203 0.195262 10.1953C0.320287 10.0702 0.489856 10 0.666667 10H4.66667C4.7986 9.9999 4.92759 10.0389 5.03732 10.1122C5.14705 10.1854 5.23258 10.2896 5.28308 10.4115C5.33358 10.5334 5.34679 10.6675 5.32102 10.7969C5.29525 10.9263 5.23167 11.0451 5.13833 11.1383L3.42333 12.8533C4.50667 13.7625 6.06917 14.6667 8 14.6667C11.0225 14.6667 12.8442 12.88 12.8617 12.8617C12.9236 12.7997 12.9971 12.7505 13.078 12.717C13.159 12.6834 13.2457 12.6661 13.3333 12.6661C13.4209 12.6661 13.5077 12.6834 13.5886 12.717C13.6696 12.7505 13.7431 12.7997 13.805 12.8617ZM15.5883 0.7175C15.4665 0.666968 15.3325 0.653693 15.2031 0.679355C15.0738 0.705017 14.955 0.768462 14.8617 0.861667L13.5233 2.20083C11.8442 0.758333 9.94667 0 8 0C4.43167 0 2.285 2.10583 2.195 2.195C2.06991 2.32009 1.99963 2.48976 1.99963 2.66667C1.99963 2.84358 2.06991 3.01324 2.195 3.13833C2.32009 3.26343 2.48976 3.3337 2.66667 3.3337C2.84358 3.3337 3.01324 3.26343 3.13833 3.13833C3.15583 3.12 4.9775 1.33333 8 1.33333C9.93083 1.33333 11.4933 2.2375 12.5767 3.14667L10.8617 4.86167C10.7683 4.9549 10.7047 5.07374 10.679 5.20313C10.6532 5.33252 10.6664 5.46665 10.7169 5.58853C10.7674 5.71041 10.8529 5.81457 10.9627 5.88781C11.0724 5.96106 11.2014 6.0001 11.3333 6H15.3333C15.5101 6 15.6797 5.92976 15.8047 5.80474C15.9298 5.67971 16 5.51014 16 5.33333V1.33333C16 1.20148 15.9608 1.0726 15.8876 0.962978C15.8143 0.853361 15.7102 0.767934 15.5883 0.7175Z" />
        </svg>
      ),
      link: "/dashboard/converter",
      text: t("sidebar.converter"),
    },
    {
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.853 6.51469C15.8371 6.43422 15.804 6.35813 15.7561 6.29158C15.7081 6.22503 15.6464 6.16958 15.5751 6.129L13.4446 4.9148L13.436 2.51355C13.4357 2.43085 13.4175 2.34919 13.3826 2.27422C13.3477 2.19924 13.297 2.13274 13.2339 2.07929C12.461 1.42555 11.571 0.924565 10.6112 0.602969C10.5356 0.577385 10.4555 0.567917 10.376 0.575175C10.2966 0.582433 10.2195 0.606256 10.1498 0.645109L8.00068 1.84645L5.8494 0.642966C5.77966 0.603894 5.70249 0.579891 5.62289 0.57251C5.54329 0.565128 5.46303 0.574531 5.38729 0.600112C4.42805 0.923773 3.53903 1.4267 2.76748 2.08215C2.70446 2.13551 2.65376 2.2019 2.61887 2.27675C2.58397 2.35159 2.56572 2.43311 2.56535 2.51569L2.55464 4.91909L0.424079 6.13329C0.352799 6.17387 0.291091 6.22932 0.24315 6.29587C0.195208 6.36242 0.162157 6.43851 0.146242 6.51897C-0.0487472 7.49882 -0.0487472 8.50748 0.146242 9.48733C0.162157 9.56779 0.195208 9.64388 0.24315 9.71044C0.291091 9.77699 0.352799 9.83244 0.424079 9.87302L2.55464 11.0872L2.56321 13.4892C2.56347 13.5719 2.58168 13.6535 2.61657 13.7285C2.65147 13.8035 2.70223 13.87 2.76534 13.9234C3.53819 14.5772 4.42819 15.0782 5.38801 15.3998C5.46359 15.4253 5.5437 15.4348 5.62317 15.4276C5.70264 15.4203 5.7797 15.3965 5.8494 15.3576L8.00068 14.1527L10.152 15.3562C10.2371 15.4036 10.333 15.4282 10.4305 15.4276C10.4929 15.4276 10.5549 15.4175 10.6141 15.3976C11.5731 15.0741 12.462 14.5717 13.2339 13.917C13.2969 13.8636 13.3476 13.7973 13.3825 13.7224C13.4174 13.6476 13.4356 13.566 13.436 13.4835L13.4467 11.0801L15.5773 9.86587C15.6486 9.8253 15.7103 9.76985 15.7582 9.70329C15.8061 9.63674 15.8392 9.56065 15.8551 9.48019C16.049 8.50112 16.0483 7.49347 15.853 6.51469ZM8.00068 10.8565C7.43563 10.8565 6.88327 10.689 6.41345 10.375C5.94363 10.0611 5.57744 9.61492 5.36121 9.09288C5.14498 8.57085 5.0884 7.99641 5.19863 7.44222C5.30887 6.88803 5.58097 6.37897 5.98052 5.97942C6.38007 5.57987 6.88912 5.30777 7.44332 5.19754C7.99751 5.0873 8.57194 5.14388 9.09398 5.36011C9.61602 5.57635 10.0622 5.94253 10.3761 6.41235C10.6901 6.88217 10.8576 7.43453 10.8576 7.99958C10.8576 8.75729 10.5566 9.48396 10.0208 10.0197C9.48506 10.5555 8.75838 10.8565 8.00068 10.8565Z" />
        </svg>
      ),
      link: "/dashboard/integrations",
      text: t("sidebar.integration"),
    },
  ];

  const handleClick = (name, disable) => {
    if (disable) return;

    setActive(name);
  };

  useEffect(() => {
    switch (query.pathname) {
      case "/dashboardNew/":
        setActive("Dashboard");
        break;
      case "/dashboardNew/affiliate":
        setActive("Affiliate");
        break;
      case "/dashboardNew/products":
        setActive("Products");
        break;
      case "/dashboardNew/payments":
        setActive("Payments");
        break;
      case "/dashboardNew/transactions":
        setActive("Transactions");
        break;
      case "/dashboardNew/converter":
        setActive("Converter");
        break;
      case "/dashboardNew/admin":
        setActive("Admin");
        break;
      case "/dashboardNew/partner":
        setActive("Admin");
        break;
      default:
        setActive("");
        break;
    }
  }, [query.pathname]);

  const getFullSideBar = (active) => {
    if (active === "Affiliate" || active === "Admin") return false;

    return true;
  };

  return (
    <div className={styles.container}>
      {getFullSideBar(active) &&
        content.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`${styles.item} ${
              active === item.text ? styles.active : ""
            }`}
            onClick={() => handleClick(item.text, item.soon)}
            style={{ pointerEvents: item.soon ? "none" : "" }}
          >
            {item.icon}
            <p>{item.text}</p>

            {item.soon && (
              <div className={styles.soon}>{t("sidebar.soon")}</div>
            )}
          </Link>
        ))}

      <div className={styles.mobItems}>
        <div className={styles.item}>
          <img src={Notification} alt="" />
          <p>Notification</p>
        </div>

        <div
          className={styles.item}
          onClick={() => setLightMode((prev) => !prev)}
        >
          {lightMode ? (
            <img src={DarkMode} alt="" />
          ) : (
            <img src={LightMode} alt="" />
          )}

          <p>{lightMode ? "Dark" : "Light"}</p>
        </div>
      </div>

      <div className={styles.referral}>
        {getFullSideBar(active) ? (
          <Button>Referral</Button>
        ) : (
          <Link to="/dashboard/">
            <Button>Vendor Dashboard</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideNavigation;
