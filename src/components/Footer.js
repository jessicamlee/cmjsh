import React from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../assets/images/logo/CMJSH_footer.png';

export default function Footer() {
    return (
        <Fade cascade>
            <footer className="bg-roleDark p-5 px-6 lg:px-10 xl:px-20 relative">
                <div className="pb-6 pt-12 flex justify-between items-center relative">
                    <div className="flex justify-center items-center">
                        <img className="w-10 h-10 md:w-12 md:h-12" src={Logo} alt="CMJSH Agency Logo" />
                        <p className="font-bold text-2xl md:text-4xl text-lightBlue leading-0 mt-0.3 lg:mt-0.35">CMJSH</p>
                    </div>
                    <Fade cascade bottom>
                    <ul className="flex justify-center items-center gap-x-2 md:absolute md:top-32 md:right-0 md:pr-16 lg:pr-32 xl:pr-36">
                        <li>
                            <a href="#" target="_blank" title="Link to CMJSH's Twitter">
                                <svg className='w-6 h-6 fill-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" className='fill-lightBlue' fillOpacity="0.8"/>
                                    <path d="M20.2204 8.34496C19.684 8.57299 19.1076 8.72713 18.5025 8.79631C19.1199 8.44137 19.5945 7.87927 19.8175 7.20988C19.2396 7.53849 18.5992 7.77742 17.9181 7.9056C17.3726 7.34859 16.5952 7 15.7348 7C14.0829 7 12.7434 8.28396 12.7434 9.86821C12.7434 10.0928 12.7699 10.3119 12.8211 10.522C10.3349 10.4023 8.1309 9.26036 6.65549 7.52488C6.39798 7.94863 6.25048 8.44155 6.25048 8.96697C6.25048 9.96207 6.77857 10.8397 7.58122 11.3542C7.09099 11.3392 6.62974 11.2101 6.22643 10.9955C6.22605 11.0075 6.22605 11.0193 6.22605 11.0316C6.22605 12.4209 7.25705 13.5801 8.62529 13.8439C8.3744 13.9091 8.11026 13.9443 7.83741 13.9443C7.64446 13.9443 7.4572 13.9265 7.27447 13.8929C7.65506 15.0322 8.75973 15.8617 10.0687 15.8849C9.04489 16.654 7.75523 17.1128 6.35367 17.1128C6.11225 17.1128 5.87424 17.0994 5.64001 17.0727C6.96375 17.8864 8.53611 18.361 10.2253 18.361C15.7274 18.361 18.7361 13.9908 18.7361 10.201C18.7361 10.0768 18.7331 9.95281 18.7274 9.82954C19.3123 9.42539 19.8196 8.92013 20.2204 8.34496V8.34496Z" className="fill-roleDark"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="Link to CMJSH's LinkedIn page">
                                <svg className='w-6 h-6 fill-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" className='fill-lightBlue' fillOpacity="0.8"/>
                                    <path d="M18.1805 5H5.75637C5.16222 5 4.68005 5.45145 4.68005 6.00736V17.9716C4.68005 18.5283 5.16222 18.9803 5.75637 18.9803H18.1805C18.7751 18.9803 19.2605 18.5283 19.2605 17.9716V6.00736C19.2605 5.45145 18.7751 5 18.1805 5ZM9.00436 16.9131H6.84079V10.2416H9.00436V16.9131ZM7.92258 9.32942C7.2294 9.32942 6.66907 8.79079 6.66907 8.12673C6.66907 7.46364 7.2294 6.92501 7.92258 6.92501C8.61414 6.92501 9.17589 7.46364 9.17589 8.12673C9.17589 8.79079 8.61414 9.32942 7.92258 9.32942ZM17.1038 16.9131H14.9437V13.6689C14.9437 12.895 14.9279 11.8999 13.8196 11.8999C12.694 11.8999 12.5225 12.7427 12.5225 13.6128V16.9133H10.3607V10.2416H12.4354V11.1527H12.465C12.7538 10.6284 13.4593 10.0752 14.5115 10.0752C16.6998 10.0752 17.104 11.4566 17.104 13.2536V16.9131H17.1038Z" className="fill-roleDark"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="Link to CMJSH's Facebook page">
                                <svg className='w-6 h-6 fill-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" className='fill-lightBlue' fillOpacity="0.8"/>
                                    <path d="M18.4557 5H5.48481C5.04031 5 4.68005 5.34543 4.68005 5.77163V18.2088C4.68005 18.6349 5.04031 18.9803 5.48481 18.9803H12.4678V13.5664H10.5677V11.4566H12.4678V9.90048C12.4678 8.09469 13.6181 7.11161 15.298 7.11161C16.1028 7.11161 16.7944 7.16889 16.9961 7.19471V9.08185L15.8308 9.08244C14.9171 9.08244 14.7403 9.49874 14.7403 10.1096V11.4568H16.9193L16.6356 13.5666H14.7403V18.9803H18.4559C18.9002 18.9803 19.2605 18.6349 19.2605 18.2087V5.77163C19.2605 5.34543 18.9002 5 18.4557 5Z" className="fill-roleDark"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" title="Link to email CMJSH">
                                <svg className='w-6 h-6 fill-none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" className='fill-lightBlue' fillOpacity="0.8"/>
                                    <path d="M18.7765 7.04102H5.16405C4.89706 7.04102 4.68005 7.24927 4.68005 7.50527V8.43923C4.68005 8.48226 4.72872 8.53164 4.76848 8.55161L11.9235 12.4703C11.9421 12.4806 11.9629 12.4853 11.9837 12.4853C12.0049 12.4853 12.0263 12.4801 12.0451 12.4694L18.9838 8.55543C19.0228 8.53455 19.1262 8.47935 19.165 8.45393C19.212 8.42325 19.2605 8.39547 19.2605 8.34046V7.50509C19.2605 7.24927 19.0435 7.04102 18.7765 7.04102Z" className="fill-roleDark"/>
                                    <path d="M19.2001 9.8474C19.1622 9.82634 19.116 9.82725 19.0779 9.84813L15.1512 12.0634C15.1198 12.0808 15.098 12.1117 15.0927 12.1465C15.088 12.1812 15.0994 12.2166 15.1238 12.2422L19.051 16.3014C19.0743 16.3255 19.1061 16.3384 19.1395 16.3384C19.1544 16.3384 19.1696 16.3357 19.1838 16.3306C19.2302 16.313 19.2605 16.2703 19.2605 16.2224V9.94817C19.2605 9.90641 19.2375 9.8681 19.2001 9.8474Z" className="fill-roleDark"/>
                                    <path d="M14.0197 12.8074C13.9811 12.7673 13.919 12.7584 13.8699 12.786L12.296 13.674C12.1112 13.7782 11.8745 13.7791 11.6885 13.6778L10.3034 12.9191C10.2576 12.8942 10.1998 12.9002 10.1612 12.9347L4.90126 17.6128C4.87324 17.6379 4.85923 17.674 4.86339 17.7105C4.86756 17.747 4.88971 17.7797 4.92285 17.798C5.00465 17.8441 5.08361 17.8661 5.1639 17.8661H18.6372C18.6854 17.8661 18.729 17.8387 18.7479 17.7962C18.7673 17.7541 18.7585 17.7049 18.7256 17.6711L14.0197 12.8074Z" className="fill-roleDark"/>
                                    <path d="M9.00381 12.3813C9.03222 12.3564 9.04642 12.3197 9.04225 12.2832C9.03809 12.2466 9.01536 12.2141 8.98204 12.1955L4.86051 9.93837C4.82378 9.91803 4.77738 9.9184 4.73989 9.93909C4.70278 9.95979 4.68005 9.9981 4.68005 10.0393V15.9619C4.68005 16.0078 4.70846 16.0496 4.75239 16.0679C4.76791 16.0746 4.78439 16.0779 4.80105 16.0779C4.83078 16.0779 4.86051 16.0672 4.88323 16.0468L9.00381 12.3813Z" className="fill-roleDark"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </Fade>
                </div>
                <p className='text-xs text-lightBlue text-center pt-6 border-t border-vlightBlue md:text-left md:pl-16 lg:pl-32 xl:pl-36'>&copy; 2022 CMJSH. All Rights Reserved.</p>
            </footer>
        </Fade>
    )
}