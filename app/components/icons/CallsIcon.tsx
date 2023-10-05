import React from "react";

interface Props {
  fill: string;
}

export default function CallsIcon({ fill }: Props) {
  return (
    <svg
      className='icon'
      fill={fill}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.4069 45.168C31.4363 45.168 30.5963 44.958 29.8869 44.538C29.1869 44.1087 28.6456 43.516 28.2629 42.76C27.8803 41.9947 27.6889 41.1127 27.6889 40.114C27.6889 39.106 27.8803 38.224 28.2629 37.468C28.6456 36.7027 29.1869 36.1053 29.8869 35.676C30.5963 35.2467 31.4363 35.032 32.4069 35.032C33.5549 35.032 34.4929 35.312 35.2209 35.872C35.9489 36.432 36.4109 37.216 36.6069 38.224H34.9549C34.8243 37.6547 34.5443 37.202 34.1149 36.866C33.6856 36.53 33.1116 36.362 32.3929 36.362C31.4129 36.362 30.6383 36.698 30.0689 37.37C29.4996 38.0327 29.2149 38.9473 29.2149 40.114C29.2149 41.2713 29.4996 42.1813 30.0689 42.844C30.6383 43.5067 31.4129 43.838 32.3929 43.838C33.1116 43.838 33.6856 43.6793 34.1149 43.362C34.5443 43.0447 34.8243 42.6107 34.9549 42.06H36.6069C36.4109 43.0307 35.9489 43.7913 35.2209 44.342C34.4929 44.8927 33.5549 45.168 32.4069 45.168ZM40.5341 45.168C39.9461 45.168 39.4608 45.07 39.0781 44.874C38.6955 44.678 38.4108 44.4213 38.2241 44.104C38.0375 43.7773 37.9441 43.4227 37.9441 43.04C37.9441 42.368 38.2055 41.836 38.7281 41.444C39.2508 41.052 39.9975 40.856 40.9681 40.856H42.7881V40.73C42.7881 40.1887 42.6388 39.7827 42.3401 39.512C42.0508 39.2413 41.6728 39.106 41.2061 39.106C40.7955 39.106 40.4361 39.2087 40.1281 39.414C39.8295 39.61 39.6475 39.904 39.5821 40.296H38.0981C38.1448 39.792 38.3128 39.3627 38.6021 39.008C38.9008 38.644 39.2741 38.3687 39.7221 38.182C40.1795 37.986 40.6788 37.888 41.2201 37.888C42.1908 37.888 42.9421 38.1447 43.4741 38.658C44.0061 39.162 44.2721 39.8527 44.2721 40.73V45H42.9841L42.8581 43.81C42.6621 44.1927 42.3775 44.5147 42.0041 44.776C41.6308 45.0373 41.1408 45.168 40.5341 45.168ZM40.8281 43.964C41.2295 43.964 41.5655 43.8707 41.8361 43.684C42.1161 43.488 42.3308 43.2313 42.4801 42.914C42.6388 42.5967 42.7368 42.2467 42.7741 41.864H41.1221C40.5341 41.864 40.1141 41.9667 39.8621 42.172C39.6195 42.3773 39.4981 42.634 39.4981 42.942C39.4981 43.2593 39.6148 43.5113 39.8481 43.698C40.0908 43.8753 40.4175 43.964 40.8281 43.964ZM46.0025 45V34.92H47.4865V45H46.0025ZM49.3657 45V34.92H50.8497V45H49.3657ZM55.501 45.168C54.6237 45.168 53.9003 44.9533 53.331 44.524C52.7617 44.0947 52.435 43.5253 52.351 42.816H53.849C53.9237 43.1333 54.101 43.4087 54.381 43.642C54.661 43.866 55.0297 43.978 55.487 43.978C55.935 43.978 56.2617 43.8847 56.467 43.698C56.6723 43.5113 56.775 43.2967 56.775 43.054C56.775 42.6993 56.6303 42.4613 56.341 42.34C56.061 42.2093 55.669 42.0927 55.165 41.99C54.773 41.906 54.381 41.794 53.989 41.654C53.6063 41.514 53.2843 41.318 53.023 41.066C52.771 40.8047 52.645 40.4547 52.645 40.016C52.645 39.4093 52.8783 38.9053 53.345 38.504C53.8117 38.0933 54.465 37.888 55.305 37.888C56.0797 37.888 56.705 38.0747 57.181 38.448C57.6663 38.8213 57.951 39.3487 58.035 40.03H56.607C56.5603 39.7313 56.4203 39.498 56.187 39.33C55.963 39.162 55.6597 39.078 55.277 39.078C54.9037 39.078 54.6143 39.1573 54.409 39.316C54.2037 39.4653 54.101 39.6613 54.101 39.904C54.101 40.1467 54.241 40.338 54.521 40.478C54.8103 40.618 55.1883 40.744 55.655 40.856C56.1217 40.9587 56.551 41.08 56.943 41.22C57.3443 41.3507 57.6663 41.5467 57.909 41.808C58.1517 42.0693 58.273 42.452 58.273 42.956C58.2823 43.5907 58.035 44.118 57.531 44.538C57.0363 44.958 56.3597 45.168 55.501 45.168Z" />
      <path d="M54.2133 16.7867C53.6933 16.2667 53.0133 16 52.3333 16C51.2933 16 50.2933 15.88 49.32 15.6533C48.92 15.56 48.52 15.4533 48.1333 15.32L46.0667 17.4L42.08 21.3867C45.12 23.0533 48.6133 24 52.3333 24C53.8 24 55 22.8 55 21.3333V18.6667C55 17.9867 54.7333 17.3067 54.2133 16.7867ZM52.3333 21.3333C51.4267 21.3333 50.5467 21.2667 49.68 21.1467C48.68 21 47.6933 20.7867 46.7467 20.48L48.9333 18.3067C49.1867 18.36 49.44 18.4 49.6933 18.44C50.5467 18.5867 51.4267 18.6667 52.3333 18.6667V21.3333ZM35.6 10.9333L37.6 8.93333L39.68 6.86667C39.5467 6.48 39.44 6.08 39.3467 5.68C39.12 4.70667 39 3.70667 39 2.66667C39 1.98667 38.7333 1.30667 38.2133 0.786667C37.6933 0.266667 37.0133 0 36.3333 0H33.6667C32.2 0 31 1.2 31 2.66667C31 8.56 33.3867 13.8933 37.2533 17.7467C38.04 18.5333 38.88 19.2533 39.7867 19.9067L41.6933 18C40.7733 17.3733 39.92 16.6533 39.1333 15.8667C37.7067 14.44 36.5067 12.7733 35.6 10.9333ZM33.8533 5.32C33.7333 4.45333 33.6667 3.57333 33.6667 2.66667H36.3333C36.3333 3.57333 36.4133 4.45333 36.56 5.30667C36.6 5.56 36.64 5.81333 36.6933 6.06667L34.52 8.25333C34.2133 7.30667 34 6.32 33.8533 5.32Z" />
    </svg>
  );
}
