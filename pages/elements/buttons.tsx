import Link from 'next/link';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconCode from '@/components/Icon/IconCode';
import IconSettings from '@/components/Icon/IconSettings';
import IconPencil from '@/components/Icon/IconPencil';
import IconDownload from '@/components/Icon/IconDownload';
import IconSun from '@/components/Icon/IconSun';

const Buttons = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Buttons'));
    });
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
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Buttons</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* Default */}
                <div className="panel" id="default">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Default</h5>
                        <button
                            onClick={() => {
                                toggleCode('code1');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex w-full">
                            <div className="flex w-1/2 items-center justify-center">
                                <button type="button" className="btn btn-primary">
                                    Primary
                                </button>
                            </div>
                            <div className="flex w-1/2 items-center justify-center">
                                <button type="button" className="btn btn-outline-primary">
                                    Primary
                                </button>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code1') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Default*/}

<button type="button" className="btn btn-primary">Primary</button>

<button type="button" className="btn btn-outline-primary">Primary</button>
`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Rounded */}
                <div className="panel" id="rounded">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Rounded</h5>
                        <button
                            onClick={() => {
                                toggleCode('code2');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex w-full">
                            <div className="flex w-1/2 items-center justify-center">
                                <button type="button" className="btn btn-primary rounded-full">
                                    Primary
                                </button>
                            </div>
                            <div className="flex w-1/2 items-center justify-center">
                                <button type="button" className="btn btn-outline-primary rounded-full">
                                    Primary
                                </button>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code2') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Rounded*/}

<button type="button" className="btn btn-primary rounded-full">Primary</button>

<button type="button" className="btn btn-outline-primary rounded-full">Primary</button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Solid */}
                <div className="panel" id="solid">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Solid</h5>
                        <button
                            onClick={() => {
                                toggleCode('code3');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button type="button" className="btn btn-primary">
                                Primary
                            </button>
                            <button type="button" className="btn btn-info">
                                Info
                            </button>
                            <button type="button" className="btn btn-success">
                                Success
                            </button>
                            <button type="button" className="btn btn-warning">
                                Warning
                            </button>
                            <button type="button" className="btn btn-danger">
                                Danger
                            </button>
                            <button type="button" className="btn btn-secondary">
                                Secondary
                            </button>
                            <button type="button" className="btn btn-dark">
                                Dark
                            </button>
                        </div>
                    </div>
                    {codeArr.includes('code3') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Solid*/}

<button type="button" className="btn btn-primary">Primary</button>

<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-success">Success</button>

<button type="button" className="btn btn-warning">Warning</button>

<button type="button" className="btn btn-danger">Danger</button>

<button type="button" className="btn btn-secondary">Secondary</button>

<button type="button" className="btn btn-dark">Dark</button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Outline */}
                <div className="panel" id="outline">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Outline</h5>
                        <button
                            onClick={() => {
                                toggleCode('code4');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button type="button" className="btn btn-outline-primary">
                                Primary
                            </button>
                            <button type="button" className="btn btn-outline-info">
                                Info
                            </button>
                            <button type="button" className="btn btn-outline-success">
                                Success
                            </button>
                            <button type="button" className="btn btn-outline-warning">
                                Warning
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                Danger
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                Secondary
                            </button>
                            <button type="button" className="btn btn-outline-dark">
                                Dark
                            </button>
                        </div>
                    </div>
                    {codeArr.includes('code4') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Outline*/}

<button type="button" className="btn btn-outline-primary">Primary</button>

<button type="button" className="btn btn-outline-info">Info</button>

<button type="button" className="btn btn-outline-success">Success</button>

<button type="button" className="btn btn-outline-warning">Warning</button>

<button type="button" className="btn btn-outline-danger">Danger</button>

<button type="button" className="btn btn-outline-secondary">Secondary</button>

<button type="button" className="btn btn-outline-dark">Dark</button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Button Sizes */}
                <div className="panel" id="sizes">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Button Sizes</h5>
                        <button
                            onClick={() => {
                                toggleCode('code5');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button type="button" className="btn btn-primary btn-lg">
                                Primary
                            </button>
                            <button type="button" className="btn btn-info">
                                Info
                            </button>
                            <button type="button" className="btn btn-success btn-sm">
                                Success
                            </button>
                            <button type="button" className="btn btn-warning btn-sm">
                                Warning
                            </button>
                        </div>
                    </div>
                    {codeArr.includes('code5') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Button Sizes*/}

<button type="button" className="btn btn-primary btn-lg">Primary</button>

<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-success btn-sm">Success</button>

<button type="button" className="btn btn-warning btn-sm">Warning</button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Button with Icons */}
                <div className="panel" id="icons">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Button with Icons</h5>
                        <button
                            onClick={() => {
                                toggleCode('code6');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button type="button" className="btn btn-primary">
                                <IconSettings className="w-5 h-5 ltr:mr-1.5 rtl:ml-1.5 shrink-0" />
                                Left
                            </button>
                            <button type="button" className="btn btn-warning rounded-full">
                                Right
                                <IconPencil className="w-5 h-5 ltr:ml-1.5 rtl:mr-1.5 shrink-0" />
                            </button>
                            <button type="button" className="btn btn-danger">
                                <IconDownload />
                            </button>
                            <button type="button" className="btn btn-dark h-10 w-10 rounded-full p-0">
                                <IconSun />
                            </button>
                        </div>
                    </div>
                    {codeArr.includes('code6') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Button with Icons*/}

<button type="button" className="btn btn-primary"><svg> ... </svg>Left</button>

<button type="button" className="btn btn-warning rounded-full">Right<svg> ... </svg></button>

<button type="button" className="btn btn-danger"><svg> ... </svg></button>

<button type="button" className="btn btn-dark w-10 h-10 p-0 rounded-full"><svg> ... </svg></button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* Block Buttons */}
                <div className="panel" id="block">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Block Buttons</h5>
                        <button
                            onClick={() => {
                                toggleCode('code7');
                            }}
                            className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600"
                        >
                            <span className="flex items-center">
                                <IconCode className="me-2" />
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-col gap-4">
                            <button type="button" className="btn btn-primary w-full">
                                Button
                            </button>
                            <button type="button" className="btn btn-info w-full">
                                Button
                            </button>
                            <button type="button" className="btn btn-success w-full">
                                Button
                            </button>
                        </div>
                    </div>
                    {codeArr.includes('code7') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`{/*Block Buttons*/}

<button type="button" className="btn btn-primary w-full"> Button</button>

<button type="button" className="btn btn-info w-full">Button</button>

<button type="button" className="btn btn-success w-full">Button</button>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Buttons;
