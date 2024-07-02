"use client";
import Image from "next/image";
import React from "react";
import { Link } from "../src/navigation";
import { useTranslations } from "next-intl";

function LayFooter() {
  const t = useTranslations("home.footer");
  return (
    <footer>
      <div className="con">
        <div className="content">
          <div className="part1">
            <Link href={"/"}>
              <Image
                width={120}
                height={120}
                src="/images/logo.svg"
                alt="logo"
              />
            <h2 > {t('titleLogo')}
            <br/>{t('titleLogo2')}</h2>
            </Link>
            <h3>{t("title")}</h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link href="/#hoursWork">{t("hour")} </Link>
              </li>
              <li>
                <Link href="/#programs">{t("program")} </Link>
              </li>
              <li>
                <Link href="/#latestOffers">{t("offer")} </Link>
              </li>
              <li>
                <Link href="/#map">{t("map")} </Link>
              </li>
              <li>
                <Link href="/terms">{t("terms")} </Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h3>{t("follow")}</h3>
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25 3.27482C0.25 2.55331 0.503386 1.95807 1.01014 1.48911C1.51688 1.02013 2.17568 0.785645 2.98649 0.785645C3.78283 0.785645 4.42712 1.01651 4.9194 1.47829C5.42615 1.95448 5.67954 2.57495 5.67954 3.33976C5.67954 4.0324 5.4334 4.60958 4.94112 5.07136C4.43437 5.54755 3.76834 5.78564 2.94305 5.78564H2.92133C2.12499 5.78564 1.4807 5.54755 0.988417 5.07136C0.496132 4.59517 0.25 3.99631 0.25 3.27482ZM0.532336 22.2142V7.75534H5.35376V22.2142H0.532336ZM8.0251 22.2142H12.8465V14.1406C12.8465 13.6356 12.9044 13.2459 13.0203 12.9718C13.223 12.4812 13.5306 12.0663 13.9433 11.7272C14.3559 11.3881 14.8735 11.2185 15.4961 11.2185C17.1178 11.2185 17.9286 12.308 17.9286 14.4869V22.2142H22.75V13.9242C22.75 11.7885 22.2432 10.1688 21.2297 9.06486C20.2162 7.96097 18.8769 7.40902 17.2119 7.40902C15.3441 7.40902 13.889 8.20989 12.8465 9.81162V9.85491H12.8248L12.8465 9.81162V7.75534H8.0251C8.05405 8.21709 8.06853 9.65287 8.06853 12.0627C8.06853 14.4725 8.05405 17.8563 8.0251 22.2142Z"
                      fill="#A879C6"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.25 11.5C0.25 7.00608 0.25 4.75911 1.32086 3.14069C1.79906 2.41799 2.41799 1.79906 3.14069 1.32086C4.75911 0.25 7.00608 0.25 11.5 0.25C15.9939 0.25 18.2409 0.25 19.8593 1.32086C20.582 1.79906 21.2009 2.41799 21.6791 3.14069C22.75 4.75911 22.75 7.00608 22.75 11.5C22.75 15.9939 22.75 18.2409 21.6791 19.8593C21.2009 20.582 20.582 21.2009 19.8593 21.6791C18.2409 22.75 15.9939 22.75 11.5 22.75C7.00608 22.75 4.75911 22.75 3.14069 21.6791C2.41799 21.2009 1.79906 20.582 1.32086 19.8593C0.25 18.2409 0.25 15.9939 0.25 11.5ZM17.3241 11.5003C17.3241 14.7169 14.7164 17.3245 11.4998 17.3245C8.28315 17.3245 5.67554 14.7169 5.67554 11.5003C5.67554 8.28363 8.28315 5.67602 11.4998 5.67602C14.7164 5.67602 17.3241 8.28363 17.3241 11.5003ZM11.4998 15.354C13.6282 15.354 15.3536 13.6287 15.3536 11.5003C15.3536 9.37191 13.6282 7.64653 11.4998 7.64653C9.37143 7.64653 7.64604 9.37191 7.64604 11.5003C7.64604 13.6287 9.37143 15.354 11.4998 15.354ZM17.5541 6.75194C18.3099 6.75194 18.9226 6.13922 18.9226 5.38341C18.9226 4.62759 18.3099 4.01488 17.5541 4.01488C16.7983 4.01488 16.1856 4.62759 16.1856 5.38341C16.1856 6.13922 16.7983 6.75194 17.5541 6.75194Z"
                      fill="#A879C6"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="23"
                    height="19"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2838 0.376611V0.372559H16.3388L16.7243 0.449549C16.9813 0.499531 17.2146 0.565033 17.4243 0.646075C17.6339 0.727118 17.8368 0.821673 18.0329 0.929723C18.229 1.03777 18.4069 1.14787 18.5665 1.25997C18.7248 1.37073 18.8668 1.48824 18.9926 1.6125C19.117 1.73812 19.3111 1.77053 19.5748 1.70975C19.8386 1.64897 20.1226 1.56455 20.427 1.4565C20.7313 1.34845 21.0322 1.22688 21.3298 1.09181C21.6274 0.95673 21.8086 0.870967 21.8736 0.834498C21.9371 0.796692 21.9709 0.776432 21.975 0.773717L21.979 0.767639L21.9993 0.757508L22.0196 0.747378L22.0399 0.737248L22.0602 0.727118L22.0642 0.721039L22.0703 0.716987L22.0764 0.712935L22.0805 0.706857L22.1008 0.700779L22.1211 0.696727L22.117 0.727118L22.1109 0.757508L22.1008 0.787899L22.0906 0.81829L22.0805 0.83855L22.0703 0.858811L22.0602 0.889202C22.0534 0.909462 22.0467 0.936469 22.0399 0.970244C22.0331 1.00402 21.9689 1.13907 21.8472 1.37545C21.7254 1.61183 21.5733 1.85158 21.3907 2.0947C21.2081 2.33783 21.0444 2.52151 20.8997 2.64579C20.7536 2.7714 20.6569 2.85919 20.6096 2.90917C20.5622 2.96049 20.5047 3.00776 20.4371 3.051L20.3357 3.11786L20.3154 3.12799L20.2951 3.13812L20.291 3.1442L20.2849 3.14825L20.2789 3.1523L20.2748 3.15838L20.2545 3.16851L20.2342 3.17864L20.2302 3.18472L20.2241 3.18877L20.218 3.19282L20.2139 3.1989L20.2099 3.20498L20.2038 3.20903L20.1977 3.21308L20.1936 3.21916H20.2951L20.8632 3.0976C21.2419 3.01656 21.6037 2.91864 21.9486 2.80382L22.4964 2.62148L22.5573 2.60121L22.5877 2.59108L22.608 2.58095L22.6283 2.57082L22.6486 2.56069L22.6688 2.55056L22.7094 2.54449L22.75 2.54043V2.58095L22.7399 2.58501L22.7297 2.59108L22.7257 2.59716L22.7196 2.60121L22.7135 2.60527L22.7094 2.61135L22.7054 2.61742L22.6993 2.62148L22.6932 2.62553L22.6891 2.63161L22.6851 2.63768L22.679 2.64174L22.6688 2.662L22.6587 2.68226L22.6526 2.68631C22.6499 2.69036 22.564 2.80516 22.3949 3.03074C22.2259 3.25766 22.1346 3.37245 22.1211 3.37517C22.1075 3.37922 22.0886 3.39948 22.0642 3.43595C22.0413 3.47375 21.8979 3.62437 21.6341 3.88776C21.3704 4.15114 21.1121 4.38548 20.8591 4.5908C20.6049 4.79745 20.4763 5.05138 20.4736 5.35259C20.4696 5.65245 20.454 5.99149 20.427 6.36967C20.3999 6.74787 20.3492 7.15645 20.2748 7.59543C20.2004 8.03442 20.0854 8.5308 19.9299 9.08458C19.7744 9.63836 19.585 10.1786 19.3618 10.7054C19.1386 11.2322 18.9053 11.7049 18.6619 12.1237C18.4184 12.5424 18.1952 12.8969 17.9923 13.1873C17.7894 13.4777 17.5832 13.7512 17.3735 14.0079C17.1639 14.2645 16.8988 14.5536 16.5782 14.875C16.2563 15.1951 16.0805 15.3707 16.0507 15.4018C16.0196 15.4315 15.8871 15.5423 15.6531 15.7341C15.4204 15.9272 15.1702 16.1204 14.9024 16.3135C14.6359 16.5053 14.3911 16.6654 14.1679 16.7937C13.9448 16.922 13.6756 17.0686 13.3605 17.2334C13.0467 17.3995 12.7072 17.5535 12.342 17.6953C11.9768 17.8371 11.5913 17.9688 11.1855 18.0904C10.7798 18.2119 10.3875 18.3065 10.0088 18.374C9.63008 18.4416 9.20064 18.499 8.72047 18.5462L8.00023 18.6171V18.6273H6.68147V18.6171L6.50902 18.607C6.39406 18.6003 6.29938 18.5935 6.22498 18.5868C6.1506 18.58 5.86993 18.5429 5.383 18.4753C4.89608 18.4078 4.51398 18.3402 4.2367 18.2727C3.95944 18.2052 3.54689 18.0769 2.9991 17.8878C2.45131 17.6987 1.98264 17.5075 1.5931 17.3144C1.20492 17.1226 0.961459 17.001 0.862714 16.9497C0.765329 16.8997 0.655771 16.8376 0.53404 16.7633L0.351443 16.6519L0.347405 16.6458L0.341298 16.6417L0.335212 16.6377L0.331154 16.6316L0.310866 16.6215L0.290577 16.6114L0.28654 16.6053L0.280433 16.6012L0.274346 16.5972L0.270289 16.5911L0.266251 16.585L0.260144 16.581H0.25V16.5404L0.270289 16.5445L0.290577 16.5506L0.381876 16.5607C0.442741 16.5675 0.608438 16.5776 0.878945 16.5911C1.14947 16.6046 1.43688 16.6046 1.74121 16.5911C2.04554 16.5776 2.35664 16.5472 2.67448 16.4999C2.99234 16.4527 3.36768 16.3716 3.8005 16.2568C4.23333 16.142 4.63099 16.0056 4.99348 15.8475C5.35462 15.6882 5.61159 15.5693 5.76445 15.491C5.91592 15.414 6.14721 15.2708 6.4583 15.0614L6.92493 14.7474L6.92899 14.7413L6.93508 14.7373L6.94118 14.7332L6.94522 14.7271L6.94928 14.7211L6.95537 14.717L6.96147 14.7129L6.96551 14.7069L6.9858 14.7008L7.00609 14.6967L7.01014 14.6765L7.01623 14.6562L7.02234 14.6522L7.02637 14.6461L6.86407 14.636C6.75587 14.6292 6.65104 14.6224 6.54959 14.6157C6.44815 14.609 6.28923 14.5786 6.07281 14.5245C5.85642 14.4705 5.6231 14.3894 5.37286 14.2814C5.12264 14.1734 4.87918 14.045 4.64247 13.8965C4.40578 13.7479 4.23467 13.6243 4.12917 13.5257C4.02503 13.4284 3.88977 13.2907 3.7234 13.1124C3.55839 12.9327 3.41501 12.7483 3.29328 12.5593C3.17155 12.3702 3.05524 12.152 2.94434 11.9048L2.77592 11.5361L2.76578 11.5057L2.75564 11.4753L2.74955 11.4551L2.74549 11.4348L2.77592 11.4389L2.80636 11.4449L3.02953 11.4753C3.17833 11.4956 3.41165 11.5023 3.72949 11.4956C4.04735 11.4888 4.26713 11.4753 4.38886 11.4551C4.51059 11.4348 4.58499 11.4213 4.61204 11.4145L4.65261 11.4044L4.70334 11.3943L4.75406 11.3841L4.75812 11.3781L4.7642 11.374L4.77031 11.37L4.77435 11.3639L4.73377 11.3538L4.69319 11.3436L4.65261 11.3335L4.61204 11.3234L4.57146 11.3132C4.54442 11.3065 4.49708 11.293 4.42944 11.2727C4.36182 11.2525 4.17922 11.1782 3.88165 11.0498C3.5841 10.9215 3.34739 10.7966 3.17155 10.675C2.99527 10.5531 2.82719 10.4198 2.66839 10.2759C2.51014 10.13 2.33635 9.94227 2.14698 9.71265C1.95763 9.48304 1.78856 9.21627 1.63977 8.91236C1.49099 8.60846 1.3794 8.31806 1.305 8.04116C1.23091 7.76589 1.18202 7.48446 1.15895 7.20035L1.12241 6.77488L1.1427 6.77893L1.16298 6.78501L1.18327 6.79514L1.20356 6.80527L1.22385 6.8154L1.24414 6.82553L1.55861 6.96735C1.76827 7.06191 2.02864 7.14295 2.33972 7.21048C2.65083 7.27801 2.83679 7.31517 2.89766 7.32191L2.98895 7.33204H3.17155L3.16751 7.32597L3.16141 7.32191L3.15532 7.31786L3.15126 7.31178L3.14722 7.30571L3.14112 7.30165L3.13503 7.2976L3.13097 7.29152L3.11069 7.28139L3.0904 7.27126L3.08636 7.26518L3.08025 7.26113L3.07417 7.25708L3.07011 7.251L3.04982 7.24087L3.02953 7.23074L3.02549 7.22466C3.02144 7.22195 2.96327 7.17873 2.85099 7.095C2.74007 7.0099 2.62376 6.89983 2.50203 6.76475C2.3803 6.62967 2.25857 6.48785 2.13683 6.33928C2.01488 6.19037 1.90626 6.03105 1.81222 5.86316C1.71755 5.69433 1.61745 5.47954 1.51195 5.21887C1.40781 4.95954 1.32868 4.69818 1.27457 4.43479C1.22048 4.1714 1.19005 3.9114 1.18327 3.65476C1.17652 3.39812 1.18327 3.17864 1.20356 2.99629C1.22385 2.81395 1.26443 2.60796 1.32529 2.37835C1.38616 2.14874 1.47409 1.90561 1.58904 1.64897L1.7615 1.26402L1.77164 1.23363L1.78179 1.20324L1.78789 1.19919L1.79193 1.19311L1.79599 1.18703L1.80207 1.18298L1.80818 1.18703L1.81222 1.19311L1.81628 1.19919L1.82236 1.20324L1.82847 1.20729L1.83251 1.21337L1.83656 1.21945L1.84265 1.2235L1.8528 1.24376L1.86294 1.26402L1.86905 1.26807L1.87308 1.27415L2.14698 1.57806C2.32958 1.78066 2.54599 2.00691 2.79621 2.25679C3.04645 2.50666 3.18508 2.63633 3.21213 2.64579C3.23919 2.65659 3.27299 2.68765 3.31357 2.73899C3.35415 2.78897 3.48941 2.90851 3.71934 3.0976C3.94929 3.28669 4.25023 3.50619 4.62218 3.75606C4.99415 4.00594 5.40668 4.25245 5.85978 4.49557C6.31291 4.7387 6.79983 4.95818 7.32056 5.15404C7.8413 5.3499 8.2065 5.47821 8.41614 5.53899C8.6258 5.59977 8.98422 5.67743 9.49143 5.77198C9.99865 5.86654 10.3808 5.92732 10.6377 5.95433C10.8947 5.98134 11.0706 5.99688 11.1652 6.00093L11.3073 6.00498L11.3032 5.97459L11.2971 5.9442L11.2565 5.69094C11.2295 5.52211 11.216 5.28573 11.216 4.98182C11.216 4.67792 11.2396 4.39765 11.287 4.14101C11.3343 3.88437 11.4053 3.62437 11.5 3.36098C11.5947 3.0976 11.6873 2.8862 11.778 2.72683C11.8699 2.5688 11.9903 2.38848 12.1391 2.18587C12.2879 1.98327 12.4806 1.77392 12.7173 1.5578C12.954 1.34168 13.2245 1.1492 13.5289 0.980374C13.8332 0.811543 14.1139 0.683213 14.3708 0.595424C14.6278 0.507635 14.8442 0.450217 15.0201 0.42321C15.1959 0.396203 15.2838 0.380663 15.2838 0.376611Z"
                      fill="#A879C6"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="13"
                    height="23"
                    viewBox="0 0 13 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.32997 22.75V12.4867H11.9483L12.4901 8.48688H8.32986V5.93317C8.32986 4.77512 8.66759 3.98598 10.4119 3.98598L12.6365 3.98499V0.40759C12.2517 0.358932 10.9311 0.25 9.39487 0.25C6.18734 0.25 3.99141 2.11397 3.99141 5.53715V8.48688H0.36377V12.4867H3.99141V22.7499H8.32997V22.75Z"
                      fill="#A879C6"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <h4>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8398 10.1865C15.5465 10.2665 15.9865 11.7198 16.0132 12.3998H18.3998C18.2932 9.75984 16.4132 8.1465 13.7998 8.1465C10.8532 8.1465 8.6665 9.99984 8.6665 14.1865C8.6665 16.7732 9.9065 19.8398 13.7865 19.8398C16.7465 19.8398 18.3332 17.6398 18.3732 15.9065H15.9865C15.9465 16.6932 15.3865 17.7465 13.8132 17.8265C12.0665 17.7732 11.3332 16.4132 11.3332 14.1865C11.3332 10.3332 13.0398 10.2132 13.8398 10.1865ZM13.9998 0.666504C6.63984 0.666504 0.666504 6.63984 0.666504 13.9998C0.666504 21.3598 6.63984 27.3332 13.9998 27.3332C21.3598 27.3332 27.3332 21.3598 27.3332 13.9998C27.3332 6.63984 21.3598 0.666504 13.9998 0.666504ZM13.9998 24.6665C8.11984 24.6665 3.33317 19.8798 3.33317 13.9998C3.33317 8.11984 8.11984 3.33317 13.9998 3.33317C19.8798 3.33317 24.6665 8.11984 24.6665 13.9998C24.6665 19.8798 19.8798 24.6665 13.9998 24.6665Z"
              fill="white"
            />
          </svg>
          {t("copy1")}
          <a href="#">{t("copy2")}</a>
        </h4>
      </div>
    </footer>
  );
}

export default LayFooter;
