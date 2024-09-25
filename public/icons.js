// icons are from streamlinehq
// encapsulate svg within a tag with these attributes href={link} target="_blank" rel="noopener noreferrer"
// icons should take in link and color props
// when copying svg from streamlinehq, adjust the size to be 14px, and copy as jsx
// within svg, add className={styles.icons}
export const EmailIcon = ({ link, color, style }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <svg
        className={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        id="Mail-Send-Envelope--Streamline-Core">
        <desc>
          {"Mail Send Envelope Streamline Icon: https://streamlinehq.com"}
        </desc>
        <g id="mail-send-envelope--envelope-email-message-unopened-sealed-close">
          <path
            id="Subtract"
            fill={color}
            fillRule="evenodd"
            d="M0 2.75a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5v0.342L7.383 7.504A0.72 0.72 0 0 1 7 7.607a0.72 0.72 0 0 1 -0.383 -0.103L0 3.092V2.75Zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5 -1.5V4.594L8.073 8.546l-0.005 0.004A1.966 1.966 0 0 1 7 8.857c-0.375 0 -0.753 -0.102 -1.068 -0.307l-0.005 -0.004L0 4.594Z"
            clipRule="evenodd"
            strokeWidth={1}
          />
        </g>
      </svg>
    </a>
  );
};

export const FacebookIcon = ({ link, color, style }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <svg
        className={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        id="Facebook-1--Streamline-Core">
        <desc>{"Facebook 1 Streamline Icon: https://streamlinehq.com"}</desc>
        <g id="facebook-1--media-facebook-social">
          <path
            id="Vector"
            fill={color}
            d="M0 12.9231V1.07692C0 0.791305 0.113461 0.517386 0.315423 0.315423 0.517386 0.113461 0.791305 0 1.07692 0H12.9231c0.2856 0 0.5595 0.113461 0.7615 0.315423 0.2019 0.201963 0.3154 0.475882 0.3154 0.761497V12.9231c0 0.2856 -0.1135 0.5595 -0.3154 0.7615 -0.202 0.2019 -0.4759 0.3154 -0.7615 0.3154H9.69231V8.89539h0.76459c0.1743 0 0.3413 -0.06922 0.4645 -0.19241 0.1232 -0.1232 0.1924 -0.29029 0.1924 -0.46452v-0.82923c0 -0.08627 -0.0169 -0.17169 -0.05 -0.25139 -0.033 -0.0797 -0.0814 -0.15212 -0.1424 -0.21312s-0.1334 -0.10939 -0.2131 -0.14241c-0.0797 -0.03301 -0.1651 -0.05 -0.2514 -0.05h-0.72151V5.74c0 -0.90462 0.40921 -0.90462 0.81841 -0.90462h0.5277c0.0867 0.00357 0.1731 -0.01194 0.2531 -0.04543 0.08 -0.0335 0.1517 -0.08416 0.21 -0.14841 0.0626 -0.05958 0.1121 -0.1315 0.1455 -0.21121 0.0334 -0.07971 0.0498 -0.16547 0.0484 -0.25187v-0.79692c0.0028 -0.0877 -0.0116 -0.1751 -0.0425 -0.25721 -0.031 -0.08211 -0.0778 -0.15732 -0.1378 -0.22133 -0.06 -0.06401 -0.132 -0.11556 -0.212 -0.15172 -0.0799 -0.03615 -0.1662 -0.05619 -0.2539 -0.05897H9.85385c-0.36137 -0.01359 -0.72137 0.05143 -1.05516 0.19057 -0.33378 0.13913 -0.63338 0.34906 -0.87811 0.61529 -0.24472 0.26623 -0.42874 0.58241 -0.53934 0.9267 -0.1106 0.3443 -0.14514 0.70849 -0.10124 1.06744v1.26h-0.68923c-0.08717 -0.00143 -0.17375 0.01451 -0.2547 0.04688 -0.08095 0.03237 -0.15465 0.08053 -0.21679 0.14168 -0.06215 0.06114 -0.1115 0.13404 -0.14519 0.21445 -0.03368 0.08042 -0.05102 0.16673 -0.05101 0.25391v0.82923c-0.00001 0.08718 0.01733 0.1735 0.05101 0.25391 0.03369 0.08041 0.08304 0.15331 0.14519 0.21446 0.06214 0.06114 0.13584 0.1093 0.21679 0.14168 0.08095 0.03237 0.16753 0.0483 0.2547 0.04688H7.28V14H1.07692c-0.285615 0 -0.559534 -0.1135 -0.761497 -0.3154C0.113461 13.4826 0 13.2087 0 12.9231Z"
            strokeWidth={1}
          />
        </g>
      </svg>
    </a>
  );
};

export const InstagramIcon = ({ link, color, style }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <svg
        className={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        id="Instagram--Streamline-Core"
        height={14}
        width={14}>
        <desc>{"Instagram Streamline Icon: https://streamlinehq.com"}</desc>
        <g id="instagram">
          <path
            id="Subtract"
            fill={color}
            fillRule="evenodd"
            d="M3.08 0.14C1.4563 0.14 0.14 1.4563 0.14 3.08V10.92C0.14 12.5437 1.4563 13.86 3.08 13.86H10.9201C12.5437 13.86 13.86 12.5437 13.86 10.92V3.08C13.86 1.4563 12.5437 0.14 10.9201 0.14H3.08ZM11.7663 3.0843C11.7663 3.552 11.3872 3.9311 10.9195 3.9311C10.4518 3.9311 10.0726 3.552 10.0726 3.0843C10.0726 2.6165 10.4518 2.2374 10.9195 2.2374C11.3872 2.2374 11.7663 2.6165 11.7663 3.0843ZM7.0002 4.6513C5.703 4.6513 4.6515 5.7028 4.6515 6.9999S5.703 9.3486 7.0002 9.3486S9.3488 8.297 9.3488 6.9999S8.2973 4.6513 7.0002 4.6513ZM3.5224 6.9999C3.5224 5.0792 5.0794 3.5221 7.0002 3.5221S10.4779 5.0792 10.4779 6.9999S8.9209 10.4777 7.0002 10.4777S3.5224 8.9206 3.5224 6.9999Z"
            clipRule="evenodd"
            strokeWidth={1}
          />
        </g>
      </svg>
    </a>
  );
};

export const UpArrowIcon = ({ link, color, style }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <svg
        className={style}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        id="Shift--Streamline-Core"
        height={14}
        width={14}>
        <desc>{"Shift Streamline Icon: https://streamlinehq.com"}</desc>
        <g id="shift--key-shift-up-arrow-keyboard">
          <path
            id="Vector 2460"
            fill={color}
            d="M6.6203 0.2975L0.9448 5.973C0.6526 6.2646 0.7855 6.7632 1.1841 6.8705C1.2295 6.8827 1.2764 6.8889 1.3234 6.8889H3.2464V13.3238C3.2464 13.6199 3.4864 13.86 3.7826 13.86H10.2174C10.5136 13.86 10.7537 13.6199 10.7537 13.3238V6.8889H12.6766C13.0894 6.8888 13.3473 6.4419 13.1408 6.0845C13.1173 6.0437 13.0885 6.0063 13.0552 5.973L7.3797 0.2975C7.1701 0.0875 6.8299 0.0875 6.6203 0.2975Z"
            strokeWidth={1}
          />
        </g>
      </svg>
    </a>
  );
};
