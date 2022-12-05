import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-roleDark p-5 px-6 lg:px-10 xl:px-20 relative">
            <div className="pb-6 pt-12 flex justify-between items-center relative">
                <div className="cmjsh-logo">
                    <svg className="w-28 h-8 fill-none" viewBox="0 0 114 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.5443 23.264C41.2403 23.264 40.1363 23.012 39.2323 22.508C38.3363 22.004 37.6123 21.336 37.0603 20.504C36.5163 19.664 36.1203 18.732 35.8723 17.708C35.6243 16.684 35.5003 15.648 35.5003 14.6C35.5003 13.608 35.6243 12.604 35.8723 11.588C36.1283 10.564 36.5323 9.624 37.0843 8.768C37.6443 7.904 38.3723 7.212 39.2683 6.692C40.1643 6.172 41.2563 5.912 42.5443 5.912C43.6083 5.912 44.5323 6.092 45.3163 6.452C46.1003 6.804 46.7483 7.264 47.2603 7.832C47.7803 8.392 48.1763 8.98 48.4483 9.596L45.6643 10.892C45.3923 10.476 45.1123 10.12 44.8243 9.824C44.5363 9.52 44.2083 9.288 43.8403 9.128C43.4803 8.96 43.0483 8.876 42.5443 8.876C41.8243 8.876 41.2203 9.052 40.7323 9.404C40.2443 9.748 39.8523 10.204 39.5563 10.772C39.2603 11.34 39.0483 11.96 38.9203 12.632C38.7923 13.304 38.7283 13.96 38.7283 14.6C38.7283 15.28 38.8003 15.956 38.9443 16.628C39.0883 17.3 39.3163 17.912 39.6283 18.464C39.9403 19.016 40.3363 19.46 40.8163 19.796C41.2963 20.124 41.8723 20.288 42.5443 20.288C43.2643 20.288 43.8683 20.088 44.3563 19.688C44.8523 19.28 45.2923 18.76 45.6763 18.128L48.5203 19.196C48.1603 19.972 47.7083 20.668 47.1643 21.284C46.6203 21.9 45.9683 22.384 45.2083 22.736C44.4483 23.088 43.5603 23.264 42.5443 23.264ZM58.9934 23.288L54.6974 13.928C54.6414 13.808 54.5814 13.668 54.5174 13.508C54.4534 13.348 54.3974 13.188 54.3494 13.028C54.3574 13.156 54.3614 13.308 54.3614 13.484C54.3694 13.66 54.3734 13.816 54.3734 13.952V23H51.2654V6.2H54.3734L58.6334 15.728C58.7134 15.904 58.7854 16.08 58.8494 16.256C58.9214 16.424 58.9894 16.6 59.0534 16.784C59.1174 16.6 59.1814 16.42 59.2454 16.244C59.3094 16.068 59.3774 15.896 59.4494 15.728L63.7934 6.2H66.7094V23H63.6014V13.928C63.6014 13.784 63.6014 13.624 63.6014 13.448C63.6094 13.272 63.6134 13.128 63.6134 13.016C63.5654 13.16 63.5054 13.316 63.4334 13.484C63.3694 13.644 63.3054 13.792 63.2414 13.928L58.9934 23.288ZM74.2773 23.288C73.0773 23.288 71.9973 22.964 71.0373 22.316C70.0773 21.668 69.3413 20.768 68.8293 19.616L71.5173 18.356C71.8533 18.972 72.2333 19.452 72.6573 19.796C73.0813 20.132 73.6253 20.3 74.2893 20.3C74.6173 20.3 74.9293 20.252 75.2253 20.156C75.5213 20.06 75.7893 19.896 76.0293 19.664C76.2773 19.432 76.4693 19.108 76.6053 18.692C76.7493 18.268 76.8213 17.728 76.8213 17.072V6.2H79.9413V17.204C79.9413 18.396 79.7693 19.388 79.4253 20.18C79.0813 20.964 78.6253 21.584 78.0573 22.04C77.4973 22.488 76.8853 22.808 76.2213 23C75.5653 23.192 74.9173 23.288 74.2773 23.288ZM89.2921 23.288C88.2441 23.288 87.2921 23.104 86.4361 22.736C85.5801 22.368 84.8441 21.848 84.2281 21.176C83.6201 20.496 83.1641 19.696 82.8601 18.776L85.6801 17.732C86.0401 18.5 86.5401 19.132 87.1801 19.628C87.8281 20.116 88.5561 20.36 89.3641 20.36C90.2201 20.36 90.9001 20.18 91.4041 19.82C91.9161 19.46 92.1721 18.936 92.1721 18.248C92.1721 17.776 92.0201 17.384 91.7161 17.072C91.4201 16.752 91.0161 16.48 90.5041 16.256C90.0001 16.024 89.4281 15.8 88.7881 15.584C88.1721 15.376 87.5521 15.144 86.9281 14.888C86.3041 14.632 85.7321 14.32 85.2121 13.952C84.6921 13.576 84.2721 13.104 83.9521 12.536C83.6401 11.968 83.4841 11.272 83.4841 10.448C83.4841 9.624 83.7041 8.868 84.1441 8.18C84.5841 7.492 85.2201 6.944 86.0521 6.536C86.8921 6.12 87.9081 5.912 89.1001 5.912C90.0761 5.912 90.9401 6.08 91.6921 6.416C92.4521 6.744 93.0801 7.192 93.5761 7.76C94.0721 8.328 94.4161 8.972 94.6081 9.692L91.8241 10.616C91.6001 10.112 91.2561 9.692 90.7921 9.356C90.3361 9.012 89.7161 8.84 88.9321 8.84C88.1961 8.84 87.6241 8.984 87.2161 9.272C86.8081 9.56 86.6041 9.968 86.6041 10.496C86.6041 10.856 86.7401 11.164 87.0121 11.42C87.2921 11.668 87.6641 11.892 88.1281 12.092C88.6001 12.292 89.1321 12.496 89.7241 12.704C90.3881 12.928 91.0481 13.184 91.7041 13.472C92.3681 13.752 92.9681 14.096 93.5041 14.504C94.0481 14.912 94.4841 15.42 94.8121 16.028C95.1401 16.628 95.3041 17.364 95.3041 18.236C95.3041 19.308 95.0361 20.22 94.5001 20.972C93.9721 21.724 93.2561 22.3 92.3521 22.7C91.4481 23.092 90.4281 23.288 89.2921 23.288ZM98.5389 23V6.2H101.647V12.86H108.751V6.2H111.859V23H108.751V15.824H101.647V23H98.5389Z" className='fill-lightBlue'/>
                        <rect className='w-8 h-8 fill-lightBlue'/>
                    </svg>
                </div>
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
            </div>
            <p className='text-xs text-lightBlue text-center pt-6 border-t border-vlightBlue md:text-left md:pl-16 lg:pl-32 xl:pl-36'>&copy; 2022 CMJSH. All Rights Reserved.</p>
        </footer>
    )
}