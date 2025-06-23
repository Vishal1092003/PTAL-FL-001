import { useTranslation } from "react-i18next";
const Follow = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-50 py-8">
      <div className="px-10 max-w-[1330px] mx-auto text-center">
        <div className="pt-[70px] border-t border-gray-300 border-opacity-35 mb-6">
          <div className="mb-0 text-center">
            <p className="mt-0 mb-4 text-lg font-semibold leading-6 tracking-[2.5px] uppercase">
              {t('homepage.follow')}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-0 text-center">
            <h2 className="text-5xl m-0 text-red-700 font-normal leading-[60px] capitalize mb-0 font-['Fondamento',cursive] tracking-normal block">
              @sanaaya.com
            </h2>
          </div>
        </div>

        <div className="pb-8">
          <div>
            <ul className="flex justify-center items-center list-none ml-0 m-0 p-0">
              <li className="mx-1.5 mb-0">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.instagram.com/ptal.in"
                  title="P-TAL on Instagram"
                  className="block leading-none bg-transparent text-gray-900 no-underline hover:opacity-80 transition-opacity duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    className="w-7 h-7 overflow-hidden"
                  >
                    <rect width="29" height="29" rx="14.5" fill="#B01C1A" />
                    <g clipPath="url(#clip0_1393_5052)">
                      <path
                        d="M14.4998 11.5659C12.8531 11.5659 11.5248 12.8734 11.5248 14.4945C11.5248 16.1155 12.8531 17.4231 14.4998 17.4231C16.1466 17.4231 17.4749 16.1155 17.4749 14.4945C17.4749 12.8734 16.1466 11.5659 14.4998 11.5659ZM14.4998 16.3985C13.4356 16.3985 12.5656 15.5446 12.5656 14.4945C12.5656 13.4444 13.4331 12.5905 14.4998 12.5905C15.5666 12.5905 16.434 13.4444 16.434 14.4945C16.434 15.5446 15.564 16.3985 14.4998 16.3985ZM18.2906 11.4461C18.2906 11.8259 17.9798 12.1292 17.5966 12.1292C17.2108 12.1292 16.9027 11.8233 16.9027 11.4461C16.9027 11.0689 17.2134 10.763 17.5966 10.763C17.9798 10.763 18.2906 11.0689 18.2906 11.4461ZM20.261 12.1394C20.217 11.2243 20.0047 10.4138 19.3237 9.74602C18.6453 9.07823 17.8219 8.86923 16.8923 8.82335C15.9343 8.76982 13.0628 8.76982 12.1048 8.82335C11.1778 8.86668 10.3544 9.07568 9.67342 9.74347C8.99243 10.4113 8.7827 11.2218 8.73609 12.1368C8.68172 13.0799 8.68172 15.9065 8.73609 16.8496C8.78011 17.7646 8.99243 18.5752 9.67342 19.243C10.3544 19.9107 11.1752 20.1198 12.1048 20.1656C13.0628 20.2192 15.9343 20.2192 16.8923 20.1656C17.8219 20.1223 18.6453 19.9133 19.3237 19.243C20.0021 18.5752 20.2144 17.7646 20.261 16.8496C20.3154 15.9065 20.3154 13.0824 20.261 12.1394ZM19.0233 17.8615C18.8214 18.3611 18.4304 18.7459 17.9203 18.9473C17.1565 19.2455 15.344 19.1767 14.4998 19.1767C13.6557 19.1767 11.8406 19.243 11.0794 18.9473C10.5719 18.7485 10.1809 18.3636 9.97636 17.8615C9.67342 17.1096 9.74333 15.3254 9.74333 14.4945C9.74333 13.6636 9.676 11.8768 9.97636 11.1275C10.1783 10.6279 10.5693 10.243 11.0794 10.0417C11.8432 9.74347 13.6557 9.81229 14.4998 9.81229C15.344 9.81229 17.159 9.74602 17.9203 10.0417C18.4278 10.2405 18.8188 10.6254 19.0233 11.1275C19.3263 11.8794 19.2564 13.6636 19.2564 14.4945C19.2564 15.3254 19.3263 17.1121 19.0233 17.8615Z"
                        fill="#F9F5EC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1393_5052">
                        <rect
                          width="11.6"
                          height="13.05"
                          fill="white"
                          transform="translate(8.69922 7.97461)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>

              <li className="mx-1.5 mb-0">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.facebook.com/ptal.org"
                  title="P-TAL on Facebook"
                  className="block leading-none bg-transparent text-gray-900 no-underline hover:opacity-80 transition-opacity duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    className="w-7 h-7 overflow-hidden"
                  >
                    <rect width="29" height="29" rx="14.5" fill="#B01C1A" />
                    <g clipPath="url(#clip0_1393_5051)">
                      <path
                        d="M17.7402 15.723L18.1268 13.2301H15.7096V11.6123C15.7096 10.9303 16.0473 10.2655 17.1299 10.2655H18.2288V8.14303C18.2288 8.14303 17.2316 7.97461 16.2781 7.97461C14.2874 7.97461 12.9862 9.16862 12.9862 11.3301V13.2301H10.7734V15.723H12.9862V21.7496H15.7096V15.723H17.7402Z"
                        fill="#F9F5EC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1393_5051">
                        <rect
                          width="8.7"
                          height="13.775"
                          fill="white"
                          transform="translate(10.1484 7.97461)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>

              <li className="mx-1.5 mb-0">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://in.pinterest.com/ptalartysun"
                  title="P-TAL on Pinterest"
                  className="block leading-none bg-transparent text-gray-900 no-underline hover:opacity-80 transition-opacity duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    className="w-7 h-7 overflow-hidden"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29ZM20.1422 10.1345C19.2879 8.55186 17.6689 7.50204 15.6385 7.22243C15.2588 7.16968 14.1461 7.15385 13.7875 7.20133C13.7031 7.21188 13.3919 7.26991 13.1072 7.32794C11.4354 7.67613 10.1486 8.52548 9.25739 9.87073C8.48216 11.0472 8.18684 12.039 8.23957 13.3367C8.27121 14.1386 8.35032 14.4762 8.64037 15.104C8.95152 15.7687 9.71093 16.5178 10.1434 16.5917C10.2858 16.6128 10.3332 16.5917 10.4492 16.4545C10.5916 16.2857 10.7024 15.9006 10.7024 15.563C10.7024 15.4364 10.6391 15.2675 10.5231 15.0724C10.1117 14.3865 9.96406 13.8801 9.96406 13.1204C9.96406 12.4874 10.0959 11.9493 10.407 11.3057C11.2561 9.54365 12.9701 8.60989 14.9951 8.7998C16.1923 8.91586 17.0044 9.2746 17.632 9.97096C18.2226 10.6198 18.4705 11.369 18.4705 12.4663C18.4652 14.3443 17.7796 16.1697 16.804 16.9029C16.0921 17.4358 15.1059 17.4938 14.5363 17.0243C14.3148 16.8396 14.0459 16.3174 13.9984 15.9692C13.9615 15.716 14.0037 15.5471 14.568 13.6796C14.7947 12.92 14.8369 12.7195 14.8369 12.3608C14.8369 11.8438 14.7209 11.4745 14.473 11.1843C14.2516 10.9258 14.009 10.8361 13.6082 10.8678C13.0017 10.91 12.411 11.3479 12.0999 11.9809C11.7677 12.6615 11.7307 13.3525 11.9839 14.223L12.1104 14.6661L11.7782 16.1486C11.7293 16.3593 11.6727 16.6043 11.6122 16.8659C11.4381 17.6194 11.2322 18.5103 11.0874 19.1134C10.7076 20.7224 10.676 21.0231 10.7709 22.1626C10.8448 22.9645 11.0082 23.0647 11.5145 22.6163C11.794 22.3736 12.295 21.5665 12.5482 20.9545C12.7433 20.4797 13.0228 19.4932 13.2074 18.6122C13.2865 18.2482 13.3603 17.9211 13.3708 17.8842C13.3867 17.8367 13.5132 17.9211 13.7347 18.1269C14.5363 18.8654 15.3959 19.0764 16.5825 18.8285C18.365 18.4592 19.7045 17.1298 20.4112 15.0196C20.986 13.2998 20.8911 11.5167 20.1422 10.1345Z"
                        fill="#B01C1A"
                      />
                    </g>
                  </svg>
                  <span className="sr-only">Pinterest</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
