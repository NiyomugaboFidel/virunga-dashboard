import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import CodeHighlight from '../../components/Highlight';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconBell from '@/components/Icon/IconBell';
import IconCode from '@/components/Icon/IconCode';
import IconCaretDown from '@/components/Icon/IconCaretDown';
import IconAirplay from '@/components/Icon/IconAirplay';
import IconBox from '@/components/Icon/IconBox';
import IconLayout from '@/components/Icon/IconLayout';

const Accordians = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Accordians'));
    });
    const [codeArr, setCodeArr] = useState<string[]>([]);
    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const [active1, setActive1] = useState<string>('1');
    const togglePara1 = (value: string) => {
        setActive1((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const [active2, setActive2] = useState<string>('1');
    const togglePara2 = (value: string) => {
        setActive2((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    const [active3, setActive3] = useState<string>('1');
    const togglePara3 = (value: string) => {
        setActive3((oldValue) => {
            return oldValue === value ? '' : value;
        });
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
                    <span>Accordians</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-animate-height" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-animate-height
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* basic */}
                    <div className="panel" id="basic">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
                            <button onClick={() => toggleCode('code1')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="space-y-2 font-semibold">
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '1' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara('1')}
                                    >
                                        Collapsible Group Item #1
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active === '1' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                                            <div className="space-y-2 border-t border-[#d3d3d3] p-4 text-[13px] text-white-dark dark:border-[#1b2e4b]">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '2' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara('2')}
                                    >
                                        Collapsible Group Item #2
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active === '2' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active === '2' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <ul className="space-y-1">
                                                    <li>
                                                        <button type="button">Apple</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Orange</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Banana</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">list</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active === '3' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara('3')}
                                    >
                                        Collapsible Group Item #3
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active === '3' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active === '3' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <p>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                                                    labore sustainable VHS.
                                                </p>
                                                <button type="button" className="btn btn-primary mt-4">
                                                    Accept
                                                </button>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {codeArr.includes('code1') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active === '1' ? '!text-primary' : ''}\`}
                onClick={() => togglePara('1')}
            >
                Collapsible Group Item #1
                <div className={\`ltr:ml-auto rtl:mr-auto \${active === '1' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active === '2' ? '!text-primary' : ''}\`}
                onClick={() => togglePara('2')}
            >
                Collapsible Group Item #2
                <div className={\`ltr:ml-auto rtl:mr-auto \${active === '2' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active === '3' ? '!text-primary' : ''}\`}
                onClick={() => togglePara('3')}
            >
                Collapsible Group Item #3
                <div className={\`ltr:ml-auto rtl:mr-auto \${active === '3' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                    {/* Without Spacing */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Without Spacing</h5>
                            <button className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code2')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="rounded border border-[#d3d3d3] font-semibold dark:border-[#3b3f5c]">
                                <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
                                    <button
                                        type="button"
                                        className={` ${active1 === '1' ? '!text-primary' : ''} flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b]`}
                                        onClick={() => togglePara1('1')}
                                    >
                                        Collapsible Group Item #1
                                        <div className={`${active1 === '1' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active1 === '1' ? 'auto' : 0}>
                                            <div className="space-y-2 p-4 text-[13px] text-white-dark">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>

                                <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
                                    <button
                                        type="button"
                                        className={` ${active1 === '2' ? '!text-primary' : ''} flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b]`}
                                        onClick={() => togglePara1('2')}
                                    >
                                        Collapsible Group Item #2
                                        <div className={`${active1 === '2' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active1 === '2' ? 'auto' : 0}>
                                            <div className="p-4 text-[13px]">
                                                <ul className="space-y-1">
                                                    <li>
                                                        <button type="button">Apple</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Orange</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Banana</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">list</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className={` ${active1 === '3' ? '!text-primary' : ''} flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b]`}
                                        onClick={() => togglePara1('3')}
                                    >
                                        Collapsible Group Item #3
                                        <div className={`${active1 === '3' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active1 === '3' ? 'auto' : 0}>
                                            <div className="p-4 text-[13px]">
                                                <p>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them accusamus
                                                    labore sustainable VHS.
                                                </p>
                                                <button type="button" className="btn btn-primary mt-4">
                                                    Accept
                                                </button>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {codeArr.includes('code2') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                    <pre className="language-typescript">
                                        {`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active1, setActive1] = useState<string>('1');
    const togglePara1 = (value: string) => {
        setActive1((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="border border-[#d3d3d3] dark:border-[#3b3f5c] rounded font-semibold">
        <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
            <button
                type="button"
                className={\`\${active1 === '1' ? '!text-primary' : ''} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('1')}
            >
                Collapsible Group Item #1
                <div className={\`\${active1 === '1' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>

        <div className="border-b border-[#d3d3d3] dark:border-[#3b3f5c]">
            <button
                type="button"
                className={\`\${active1 === '2' ? '!text-primary' : ''} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('2')}
            >
                Collapsible Group Item #2
                <div className={\`\${active1 === '2' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>

        <div>
            <button
                type="button"
                className={\`\${active1 === '3' ? '!text-primary' : ''} p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b]\`}
                onClick={() => togglePara1('3')}
            >
                Collapsible Group Item #3
                <div className={\`\${active1 === '3' ? 'rotate-180' : ''} ltr:ml-auto rtl:mr-auto\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active1 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                    {/* Icons */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Icons</h5>
                            <button onClick={() => toggleCode('code3')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="space-y-2 font-semibold">
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active2 === '1' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara2('1')}
                                    >
                                        <IconAirplay className="ltr:mr-2 rtl:ml-2 text-primary shrink-0" />
                                        Collapsible Group Item #1
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active2 === '1' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active2 === '1' ? 'auto' : 0}>
                                            <div className="space-y-2 border-t border-[#d3d3d3] p-4 text-[13px] text-white-dark dark:border-[#1b2e4b]">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active2 === '2' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara2('2')}
                                    >
                                        <IconBox className="ltr:mr-2 rtl:ml-2 text-primary shrink-0" />
                                        Collapsible Group Item #2
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active2 === '2' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active2 === '2' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <ul className="space-y-1">
                                                    <li>
                                                        <button type="button">Apple</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Orange</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Banana</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">list</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active2 === '3' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara2('3')}
                                    >
                                        <IconLayout className="ltr:mr-2 rtl:ml-2 text-primary shrink-0" />
                                        Collapsible Group Item #3
                                        <div className={`ltr:ml-auto rtl:mr-auto ${active2 === '3' ? 'rotate-180' : ''}`}>
                                            <IconCaretDown />
                                        </div>
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active2 === '3' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <p>
                                                    {`Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.`}
                                                </p>
                                                <button type="button" className="btn btn-primary mt-4">
                                                    Accept
                                                </button>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {codeArr.includes('code3') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                <pre className='language-typescript'>
                                        {`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active2, setActive2] = useState<string>('1');
    const togglePara2 = (value: string) => {
        setActive2((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active2 === '1' ? '!text-primary' : ''}\`}
                onClick={() => togglePara2('1')}
            >
                <svg>...</svg>
                Collapsible Group Item #1
                <div className={\`ltr:ml-auto rtl:mr-auto \${active2 === '1' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active2 === '2' ? '!text-primary' : ''}\`}
                onClick={() => togglePara2('2')}
            >
                <svg>...</svg>
                Collapsible Group Item #2
                <div className={\`ltr:ml-auto rtl:mr-auto \${active2 === '2' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active2 === '3' ? '!text-primary' : ''}\`}
                onClick={() => togglePara2('3')}
            >
                <svg>...</svg>
                Collapsible Group Item #3
                <div className={\`ltr:ml-auto rtl:mr-auto \${active2 === '3' ? 'rotate-180' : ''}\`}>
                    <svg>...</svg>
                </div>
            </button>
            <div>
                <AnimateHeight duration={300} height={active2 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`}
                                    </pre>
                                </CodeHighlight>
                            </div>
                        )}
                    </div>
                    {/* No Icons */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">No Icons</h5>
                            <button onClick={() => toggleCode('code4')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                                <span className="flex items-center">
                                    <IconCode className="me-2" />
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <div className="space-y-2 font-semibold">
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '1' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara3('1')}
                                    >
                                        Collapsible Group Item #1
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active3 === '1' ? 'auto' : 0}>
                                            <div className="space-y-2 border-t border-[#d3d3d3] p-4 text-[13px] text-white-dark dark:border-[#1b2e4b]">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '2' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara3('2')}
                                    >
                                        Collapsible Group Item #2
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active3 === '2' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <ul className="space-y-1">
                                                    <li>
                                                        <button type="button">Apple</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Orange</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">Banana</button>
                                                    </li>
                                                    <li>
                                                        <button type="button">list</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                                <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                                    <button
                                        type="button"
                                        className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '3' ? '!text-primary' : ''}`}
                                        onClick={() => togglePara3('3')}
                                    >
                                        Collapsible Group Item #3
                                    </button>
                                    <div>
                                        <AnimateHeight duration={300} height={active3 === '3' ? 'auto' : 0}>
                                            <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                                <p>
                                                    {`Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.`}
                                                </p>
                                                <button type="button" className="btn btn-primary mt-4">
                                                    Accept
                                                </button>
                                            </div>
                                        </AnimateHeight>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {codeArr.includes('code4') && (
                            <div className="mt-5 w-full">
                                <CodeHighlight>
                                <pre className='language-typescript'>
                                        {`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active3, setActive3] = useState<string>('1');
    const togglePara3 = (value: string) => {
        setActive3((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '1' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('1')}
            >
                Collapsible Group Item #1
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '2' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('2')}
            >
                Collapsible Group Item #2
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '3' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('3')}
            >
                Collapsible Group Item #3
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
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

export default Accordians;
