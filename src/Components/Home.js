import React from 'react' 
import { NavLink } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
  
function Home(props) { 
 
    return (
     
         <div className="site-container">
              <MetaTags>
                <title>{props.meta.title}</title> 
                <metNavLink name="description" content={props.meta.description} /> 
            </MetaTags>
        <main role="main" >
            <div className="container">
            <h1 style={{textAlign: 'center', fontSize: 0}}>Главная</h1><div className="textTitle" />
            <div className="block-wrapper">
                <ul className="block-extra-wrapper d-flex flex-wrap justify-center">
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi/remont-kompyuterov" /> 
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                            <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт компьютеров</div>
                        <div className="price"><span>от</span> 400 <span>р.</span></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт компьютеров</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                                <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span>от</span> 400 <span>р.</span></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi/remont-noutbukov" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                            <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт ноутбуков</div>
                        <div className="price"><span>от</span> 300 <span>р.</span></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт ноутбуков</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                                <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span>от</span> 300 <span>р.</span></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi/remont-printerov-mfu-kopirov" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                            <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт принтеров, сканеров, МФУ.</div>
                        <div className="price"><span>от</span> от 300 <span>р.</span></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт принтеров, сканеров, МФУ.</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                                <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span>от</span> от 300 <span>р.</span></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi/remont-planshetov-i-smartfonov" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                            <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт смартфонов и планшетов</div>
                        <div className="price"><span>от</span> от 400 <span>р.</span></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт смартфонов и планшетов</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                                <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span>от</span> от 400 <span>р.</span></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi/remont-istochnikov-bespereboynogo-pitaniya-i-stabilizatorov-napryazheniya" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                            <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт стабилизаторов и ИБП</div>
                        <div className="price"><span /> от 400 <span /></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт стабилизаторов и ИБП</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={84} height={49} viewBox="0 0 84 49">
                                <path d="M82.665,47.713 C81.804,48.570 80.772,48.999 79.569,48.999 L4.421,48.999 C3.216,48.999 2.182,48.570 1.322,47.713 C0.442,46.858 0.000,45.840 0.000,44.663 L0.000,44.380 L83.987,44.380 L83.987,44.663 C83.987,45.840 83.546,46.858 82.665,47.713 ZM11.672,5.338 C11.672,3.920 12.221,2.659 13.320,1.563 C14.395,0.518 15.655,-0.001 17.098,-0.001 L66.887,-0.001 C68.309,-0.001 69.566,0.518 70.669,1.563 C71.768,2.659 72.314,3.920 72.314,5.338 L72.314,42.499 L11.672,42.499 L11.672,5.338 ZM41.994,1.686 C41.722,1.686 41.503,1.906 41.503,2.177 C41.503,2.448 41.722,2.666 41.994,2.666 C42.265,2.666 42.484,2.448 42.484,2.177 C42.484,1.906 42.265,1.686 41.994,1.686 ZM67.034,38.325 L67.113,38.325 C67.971,38.325 68.668,37.630 68.668,36.771 L68.668,5.372 C68.668,4.513 67.971,3.816 67.113,3.816 L67.034,3.816 L16.876,3.816 C16.016,3.816 15.319,4.513 15.319,5.372 L15.319,36.771 C15.319,37.630 16.016,38.325 16.876,38.325 L67.034,38.325 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span /> от 400 <span /></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                            <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт телевизоров</div>
                        <div className="price"><span /> от 700 <span /></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт телевизоров</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                                <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span /> от 700 <span /></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                        <NavLink className="block-link" to="/uslugi" />
                        <div className="img-wrapper left ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                            <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                        </svg>
                        </div>
                        <div className="right-part-block">
                        <div className="blocks-title">Ремонт аудиотехники</div>
                        <div className="price"><span /> от 500 <span /></div>
                        </div>
                        <div className="desktop-block">
                        <div className="blocks-title">Ремонт аудиотехники</div>
                        <div>
                            <div className="img-wrapper ">
                            <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                                <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                            </svg>
                            </div>
                        </div>
                        <div className="price"><span /> от 500 <span /></div>
                        </div>
                    </li>
                    <li className="m-2 blocks-inner clear-self">
                    <NavLink className="block-link" to="/uslugi" />
                    <div className="img-wrapper left ">
                    <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                        <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                    </svg>
                    </div>
                    <div className="right-part-block">
                    <div className="blocks-title">Ремонт автонавигаторов и видеорегистраторов</div>
                    <div className="price"><span /> от 400 <span /></div>
                    </div>
                    <div className="desktop-block">
                    <div className="blocks-title">Ремонт автонавигаторов и видеорегистраторов</div>
                    <div>
                        <div className="img-wrapper ">
                        <svg xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width={55} height={48} viewBox="0 0 55 48">
                            <path d="M50.751,-0.010 L50.749,-0.010 L4.236,-0.010 L4.234,-0.010 C1.896,-0.010 -0.003,1.891 -0.003,4.232 L-0.003,35.029 C-0.003,37.367 1.896,39.268 4.234,39.268 L4.236,39.268 L21.762,39.268 C20.931,39.274 20.259,39.948 20.259,40.783 L18.762,46.480 C18.762,47.211 19.283,47.822 19.973,47.963 C20.072,47.984 20.174,47.994 20.278,47.994 L20.279,47.994 L34.706,47.994 L34.707,47.994 C34.811,47.994 34.913,47.984 35.012,47.963 C35.702,47.822 36.223,47.211 36.223,46.480 L34.726,40.783 C34.726,39.948 34.054,39.274 33.223,39.268 L50.749,39.268 L50.751,39.268 C53.089,39.268 54.988,37.367 54.988,35.029 L54.988,4.232 C54.988,1.891 53.089,-0.010 50.751,-0.010 ZM4.514,30.705 C3.891,30.705 3.386,30.199 3.386,29.576 L3.386,4.013 C3.386,3.390 3.891,2.884 4.514,2.884 L50.470,2.884 C51.094,2.884 51.599,3.390 51.599,4.013 L51.599,29.576 C51.599,30.199 51.094,30.705 50.470,30.705 L4.514,30.705 Z" />
                        </svg>
                        </div>
                    </div>
                    <div className="price"><span /> от 400 <span /></div>
                    </div>
                </li>
                </ul>
                <div className="all-link"><NavLink to="/uslugi">Все услуги</NavLink></div>
            </div>
            <div className="block-wrapper-advantages">
                <div className="advantages-wrapper">
                <div className="title">преимущества работы с нами</div>
                <ul className="block-extra-wrapper ">
                    <li className="blocks-inner">
                    <div className="num">1</div>
                    <div className="item">Авторизованный сервисный центр</div>
                    </li>
                    <li className="blocks-inner">
                    <div className="num">2</div>
                    <div className="item">Оригинальные запасные части для всех обслуживаемых брендов</div>
                    </li>
                    <li className="blocks-inner">
                    <div className="num">3</div>
                    <div className="item">Высокотехнологичные ремонтные площадки</div>
                    </li>
                    <li className="blocks-inner">
                    <div className="num">4</div>
                    <div className="item">Квалифицированные сервисные инженеры с большим опытом</div>
                    </li>
                    <li className="blocks-inner">
                    <div className="num">5</div>
                    <div className="item">Большой выбор услуг по ремонту</div>
                    </li>
                    <li className="blocks-inner">
                    <div className="num">6</div>
                    <div className="item">Гибкая система скидок</div>
                    </li>
                </ul>
                </div>
            </div>
            <div className="slider-wrapper-review">
                <div className="title">Отзывы наших клиентов</div>
                    <div className="owl-carousel owl-theme slider_review">
                        <div className="item">
                            <img src alt="Катерина" />
                            <div className="right-part-slider">
                            <div className="name">Катерина</div>
                            <div className="slider-body"> Заказывала чистку ноута от пыли и переустановку винды. Cделали работу довольно оперативно, результатом довольна. </div>				  	</div>
                        </div>
                        <div className="item">
                            <img src alt="Олег Иванов" />
                            <div className="right-part-slider">
                            <div className="name">Олег Иванов</div>
                            <div className="slider-body"> Все сделали четко, качественно и быстро, а самое главное - за умеренную плату. </div>				  	</div>
                        </div>
                        <div className="item">
                            <img src alt="Светлана" />
                            <div className="right-part-slider">
                            <div className="name">Светлана</div>
                            <div className="slider-body"> Спасибо! Культурный и вежливый специалист. Качественный и быстрый ремонт. Буду советовать всем. </div>				  	</div>
                        </div>
                    </div>
                </div>
            </div>
        </main> 
        </div>

    )
}

export default Home
