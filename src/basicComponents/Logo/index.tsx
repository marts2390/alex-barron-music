import { FC } from 'react'

interface ILogoProps {
  theme?: string;
  width?: string;
}

const LogoComponent:FC<ILogoProps> = ({
  theme = 'light',
  width = '14em'
}) => {
  const color = theme === 'light' ? 'black' : 'white'
  const stroke = theme === 'light' ? '#E5E5E5' : 'black'

  return (
    <svg
      style={ {
        width: width,
        transition: '0.3s ease'
      } }
      viewBox="0 0 165 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="50"
        height="50"
        fill={ color }
      />
      <path
        d="M40.9169 24.4927L35.0895 34.6995L29.1638 24.5494L40.9169 24.4927Z"
        stroke={ stroke }
        strokeWidth="5"
      />
      <path
        d="M9.8377 26.25L15.7143 16.0715L21.5909 26.25H9.8377Z"
        stroke={ stroke }
        strokeWidth="5"
      />
      <line
        x1="21.082"
        y1="10.8729"
        x2="29.2963"
        y2="24.8015"
        stroke={ stroke }
        strokeWidth="5"
      />
      <line
        x1="20.7248"
        y1="24.8015"
        x2="28.9391"
        y2="38.7301"
        stroke={ stroke }
        strokeWidth="5"
      />
      <path
        d="M65.2011 22.894H60.6511L59.7541 25H58.0121L62.1071 15.9H63.7711L67.8791 25H66.1111L65.2011 22.894ZM64.6421 21.568L62.9261 17.59L61.2231 21.568H64.6421ZM69.0365 15.9H70.7265V23.57H75.4845V25H69.0365V15.9ZM83.6437 23.583V25H76.8187V15.9H83.4617V17.317H78.5087V19.683H82.9027V21.074H78.5087V23.583H83.6437ZM91.1591 25L88.6891 21.542L86.2451 25H84.3211L87.7011 20.359L84.5031 15.9H86.4141L88.7411 19.137L91.0421 15.9H92.8751L89.6901 20.294L93.1091 25H91.1591ZM104.481 20.268C104.983 20.4327 105.382 20.71 105.677 21.1C105.971 21.4813 106.119 21.958 106.119 22.53C106.119 23.3187 105.815 23.9297 105.209 24.363C104.602 24.7877 103.718 25 102.557 25H98.0325V15.9H102.297C103.371 15.9 104.199 16.1123 104.78 16.537C105.36 16.953 105.651 17.5293 105.651 18.266C105.651 18.7167 105.547 19.1153 105.339 19.462C105.131 19.8087 104.845 20.0773 104.481 20.268ZM99.7225 17.226V19.735H102.115C102.704 19.735 103.155 19.631 103.467 19.423C103.787 19.2063 103.948 18.8943 103.948 18.487C103.948 18.071 103.787 17.759 103.467 17.551C103.155 17.3343 102.704 17.226 102.115 17.226H99.7225ZM102.453 23.674C103.761 23.674 104.416 23.2363 104.416 22.361C104.416 21.4857 103.761 21.048 102.453 21.048H99.7225V23.674H102.453ZM113.824 22.894H109.274L108.377 25H106.635L110.73 15.9H112.394L116.502 25H114.734L113.824 22.894ZM113.265 21.568L111.549 17.59L109.846 21.568H113.265ZM123.614 25L121.755 22.335C121.677 22.3437 121.56 22.348 121.404 22.348H119.35V25H117.66V15.9H121.404C122.192 15.9 122.877 16.03 123.458 16.29C124.047 16.55 124.498 16.9227 124.81 17.408C125.122 17.8933 125.278 18.4697 125.278 19.137C125.278 19.8217 125.109 20.411 124.771 20.905C124.441 21.399 123.965 21.7673 123.341 22.01L125.434 25H123.614ZM123.575 19.137C123.575 18.5563 123.384 18.11 123.002 17.798C122.621 17.486 122.062 17.33 121.326 17.33H119.35V20.957H121.326C122.062 20.957 122.621 20.801 123.002 20.489C123.384 20.1683 123.575 19.7177 123.575 19.137ZM133.122 25L131.263 22.335C131.185 22.3437 131.068 22.348 130.912 22.348H128.858V25H127.168V15.9H130.912C131.701 15.9 132.386 16.03 132.966 16.29C133.556 16.55 134.006 16.9227 134.318 17.408C134.63 17.8933 134.786 18.4697 134.786 19.137C134.786 19.8217 134.617 20.411 134.279 20.905C133.95 21.399 133.473 21.7673 132.849 22.01L134.942 25H133.122ZM133.083 19.137C133.083 18.5563 132.893 18.11 132.511 17.798C132.13 17.486 131.571 17.33 130.834 17.33H128.858V20.957H130.834C131.571 20.957 132.13 20.801 132.511 20.489C132.893 20.1683 133.083 19.7177 133.083 19.137ZM140.928 25.13C140.001 25.13 139.164 24.9307 138.419 24.532C137.674 24.1247 137.089 23.5657 136.664 22.855C136.239 22.1357 136.027 21.334 136.027 20.45C136.027 19.566 136.239 18.7687 136.664 18.058C137.089 17.3387 137.674 16.7797 138.419 16.381C139.164 15.9737 140.001 15.77 140.928 15.77C141.855 15.77 142.692 15.9737 143.437 16.381C144.182 16.7797 144.767 17.3343 145.192 18.045C145.617 18.7557 145.829 19.5573 145.829 20.45C145.829 21.3427 145.617 22.1443 145.192 22.855C144.767 23.5657 144.182 24.1247 143.437 24.532C142.692 24.9307 141.855 25.13 140.928 25.13ZM140.928 23.648C141.535 23.648 142.081 23.5137 142.566 23.245C143.051 22.9677 143.433 22.5863 143.71 22.101C143.987 21.607 144.126 21.0567 144.126 20.45C144.126 19.8433 143.987 19.2973 143.71 18.812C143.433 18.318 143.051 17.9367 142.566 17.668C142.081 17.3907 141.535 17.252 140.928 17.252C140.321 17.252 139.775 17.3907 139.29 17.668C138.805 17.9367 138.423 18.318 138.146 18.812C137.869 19.2973 137.73 19.8433 137.73 20.45C137.73 21.0567 137.869 21.607 138.146 22.101C138.423 22.5863 138.805 22.9677 139.29 23.245C139.775 23.5137 140.321 23.648 140.928 23.648ZM155.706 15.9V25H154.315L149.297 18.838V25H147.62V15.9H149.011L154.029 22.062V15.9H155.706ZM87.3007 37L87.2907 31.9L84.7607 36.15H84.3007L81.7707 31.93V37H80.8107V30H81.6307L84.5507 34.92L87.4307 30H88.2507L88.2607 37H87.3007ZM98.6326 37.08C97.6993 37.08 96.9726 36.8133 96.4526 36.28C95.9326 35.7467 95.6726 34.98 95.6726 33.98V30H96.6726V33.94C96.6726 35.44 97.3293 36.19 98.6426 36.19C99.2826 36.19 99.7726 36.0067 100.113 35.64C100.453 35.2667 100.623 34.7 100.623 33.94V30H101.593V33.98C101.593 34.9867 101.333 35.7567 100.813 36.29C100.293 36.8167 99.566 37.08 98.6326 37.08ZM111.054 37.08C110.527 37.08 110.017 37 109.524 36.84C109.037 36.6733 108.654 36.46 108.374 36.2L108.744 35.42C109.011 35.66 109.351 35.8567 109.764 36.01C110.184 36.1567 110.614 36.23 111.054 36.23C111.634 36.23 112.067 36.1333 112.354 35.94C112.641 35.74 112.784 35.4767 112.784 35.15C112.784 34.91 112.704 34.7167 112.544 34.57C112.391 34.4167 112.197 34.3 111.964 34.22C111.737 34.14 111.414 34.05 110.994 33.95C110.467 33.8233 110.041 33.6967 109.714 33.57C109.394 33.4433 109.117 33.25 108.884 32.99C108.657 32.7233 108.544 32.3667 108.544 31.92C108.544 31.5467 108.641 31.21 108.834 30.91C109.034 30.61 109.334 30.37 109.734 30.19C110.134 30.01 110.631 29.92 111.224 29.92C111.637 29.92 112.044 29.9733 112.444 30.08C112.844 30.1867 113.187 30.34 113.474 30.54L113.144 31.34C112.851 31.1533 112.537 31.0133 112.204 30.92C111.871 30.82 111.544 30.77 111.224 30.77C110.657 30.77 110.231 30.8733 109.944 31.08C109.664 31.2867 109.524 31.5533 109.524 31.88C109.524 32.12 109.604 32.3167 109.764 32.47C109.924 32.6167 110.121 32.7333 110.354 32.82C110.594 32.9 110.917 32.9867 111.324 33.08C111.851 33.2067 112.274 33.3333 112.594 33.46C112.914 33.5867 113.187 33.78 113.414 34.04C113.647 34.3 113.764 34.65 113.764 35.09C113.764 35.4567 113.664 35.7933 113.464 36.1C113.264 36.4 112.961 36.64 112.554 36.82C112.147 36.9933 111.647 37.08 111.054 37.08ZM120.596 30H121.596V37H120.596V30ZM132.193 37.08C131.493 37.08 130.859 36.9267 130.293 36.62C129.733 36.3067 129.293 35.88 128.973 35.34C128.653 34.7933 128.493 34.18 128.493 33.5C128.493 32.82 128.653 32.21 128.973 31.67C129.293 31.1233 129.736 30.6967 130.303 30.39C130.869 30.0767 131.503 29.92 132.203 29.92C132.749 29.92 133.249 30.0133 133.703 30.2C134.156 30.38 134.543 30.65 134.863 31.01L134.213 31.64C133.686 31.0867 133.029 30.81 132.243 30.81C131.723 30.81 131.253 30.9267 130.833 31.16C130.413 31.3933 130.083 31.7167 129.843 32.13C129.609 32.5367 129.493 32.9933 129.493 33.5C129.493 34.0067 129.609 34.4667 129.843 34.88C130.083 35.2867 130.413 35.6067 130.833 35.84C131.253 36.0733 131.723 36.19 132.243 36.19C133.023 36.19 133.679 35.91 134.213 35.35L134.863 35.98C134.543 36.34 134.153 36.6133 133.693 36.8C133.239 36.9867 132.739 37.08 132.193 37.08Z"
        fill={ color }
      />
      <rect
        x="50.5"
        y="0.5"
        width="114"
        height="49"
        stroke={ color }
      />
    </svg>

  )
}

export default LogoComponent