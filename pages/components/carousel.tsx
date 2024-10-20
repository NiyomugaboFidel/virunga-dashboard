import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { IRootState } from '@/store';
import IconCode from '@/components/Icon/IconCode';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconBell from '@/components/Icon/IconBell';

const Carousel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Carousel'));
    });
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const [codeArr, setCodeArr] = useState<string[]>([]);
    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Carousel</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/swiper" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/swiper
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Basic */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
                            <button onClick={() => toggleCode('code1')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next-ex1',
                                prevEl: '.swiper-button-prev-ex1',
                            }}
                            pagination={{ clickable: true }}
                            className="swiper mx-auto mb-5 max-w-3xl"
                            id="slider1"
                            dir={themeConfig.rtlClass}
                            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                        >
                            <div className="swiper-wrapper">
                                {items.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={`/assets/images/${item}`} className="max-h-80 w-full object-cover" alt="itemImage" />
                                        </SwiperSlide>
                                    );
                                })}
                            </div>
                            <button className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                                <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                            </button>
                            <button className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                                <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                            </button>
                        </Swiper>
                        {codeArr.includes('code1') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>

                    {/* Autopaly */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Autopaly</h5>
                            <button onClick={() => toggleCode('code2')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next-ex2',
                                prevEl: '.swiper-button-prev-ex2',
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                            className="swiper mx-auto mb-5 max-w-3xl"
                            id="slider2"
                            dir={themeConfig.rtlClass}
                            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                        >
                            <div className="swiper-wrapper">
                                {items.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={`/assets/images/${item}`} className="max-h-80 w-full object-cover" alt="itemImage" />
                                            <div className="absolute top-1/4 z-[999] text-white ltr:left-12 rtl:right-12">
                                                <div className="text-base font-bold sm:text-3xl">This is blog Image</div>
                                                <div className="mt-1 hidden w-4/5 text-base font-medium sm:mt-5 sm:block">
                                                    {`Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.`}
                                                </div>
                                                <button type="button" className="btn btn-primary mt-4">
                                                    Learn more
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </div>
                            <button className="swiper-button-prev-ex2 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                                <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                            </button>
                            <button className="swiper-button-next-ex2 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                                <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                            </button>
                        </Swiper>
                        {codeArr.includes('code2') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider2"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                        <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                        <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                        <button type="button" className="mt-4 btn btn-primary">
                            Learn more
                        </button>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                    {/* Vertical */}
                    <div className="panel relative">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Vertical</h5>
                            <button onClick={() => toggleCode('code3')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="mx-auto mb-5 max-w-3xl" id="slider3">
                            <div className="swiper-wrapper">
                                {items.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={`/assets/images/${item}`} className="w-full" alt="itemImage" />
                                            <div className="absolute top-1/2 left-1/2 z-[999] w-full -translate-x-1/2 text-center text-white">
                                                <div className="text-base font-medium sm:text-xl">Lorem Ipsum is simply dummy text of the printing.</div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </div>
                        </Swiper>
                        {codeArr.includes('code3') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>

                    {/* Loop */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Loop</h5>
                            <button onClick={() => toggleCode('code4')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="swiper mx-auto mb-5 max-w-3xl" id="slider4">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                        type: 'fraction',
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next-ex4',
                                        prevEl: '.swiper-button-prev-ex4',
                                    }}
                                    dir={themeConfig.rtlClass}
                                    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                                >
                                    <SwiperSlide>
                                        <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                                        <div className="absolute bottom-8 left-1/2 z-[999] w-full -translate-x-1/2 px-11 text-center text-white sm:px-0">
                                            <div className="text-3xl font-bold">Slide 1</div>
                                            <div className="mb-4 font-medium sm:text-base">Lorem Ipsum is simply dummy text of the printing.</div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                                        <div className="absolute bottom-8 left-1/2 z-[999] w-full -translate-x-1/2 px-11 text-center text-white sm:px-0">
                                            <div className="text-3xl font-bold">Slide 2</div>
                                            <div className="mb-4 font-medium sm:text-base">Lorem Ipsum is simply dummy text of the printing.</div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                                        <div className="absolute bottom-8 left-1/2 z-[999] w-full -translate-x-1/2 px-11 text-center text-white sm:px-0">
                                            <div className="text-3xl font-bold">Slide 3</div>
                                            <div className="mb-4 font-medium sm:text-base">Lorem Ipsum is simply dummy text of the printing.</div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <button className="swiper-button-prev-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                                <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                            </button>
                            <button className="swiper-button-next-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                                <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                            </button>
                        </div>
                        {codeArr.includes('code4') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<div className="swiper max-w-3xl mx-auto mb-5" id="slider4">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            <SwiperSlide>
                <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 1</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 2</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 3</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                    {/* Multiple Slides */}
                    <div className="panel lg:col-span-2">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Multiple Slides</h5>
                            <button onClick={() => toggleCode('code5')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="swiper" id="slider5">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    navigation={{
                                        nextEl: '.swiper-button-next-ex5',
                                        prevEl: '.swiper-button-prev-ex5',
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    dir={themeConfig.rtlClass}
                                    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                                >
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                                            </SwiperSlide>
                                        );
                                    })}
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                            <button className="swiper-button-prev-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                                <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
                            </button>
                            <button className="swiper-button-next-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                                <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
                            </button>
                        </div>
                        {codeArr.includes('code5') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

<div className="swiper" id="slider5">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next-ex5',
                prevEl: '.swiper-button-prev-ex5',
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
