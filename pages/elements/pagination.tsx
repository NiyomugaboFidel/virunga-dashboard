import Link from 'next/link';
import CodeHighlight from '../../components/Highlight';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconCode from '@/components/Icon/IconCode';
import IconCaretsDown from '@/components/Icon/IconCaretsDown';
import IconCaretDown from '@/components/Icon/IconCaretDown';
const Pagination = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Pagination'));
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
                    <span>Pagination</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
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
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        First
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-primary px-3.5 py-2 font-semibold text-primary transition dark:border-primary dark:text-white-light"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Last
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-primary px-3.5 py-2 font-semibold text-primary transition dark:border-primary dark:text-white-light"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {codeArr.includes('code1') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            First
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            1
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-primary border-2 border-primary dark:border-primary dark:text-white-light"
        >
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Next
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Last
        </button>
    </li>
</ul>

<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            1
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-primary border-2 border-primary dark:border-primary dark:text-white-light"
        >
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Next
        </button>
    </li>
</ul>`}
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
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        First
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Last
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {codeArr.includes('code2') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            First
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Next
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Last
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Next
        </button>
    </li>
</ul>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* With Icons */}
                <div className="panel" id="icons">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">With Icons</h5>
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
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {codeArr.includes('code3') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* With Icons and Rounded */}
                <div className="panel" id="rounded">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">With Icons and Rounded</h5>
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
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {codeArr.includes('code4') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                {/* No Spacing */}
                <div className="panel" id="no_spacing">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">No Spacing</h5>
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
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-l-full rtl:rounded-r-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-r-full rtl:rounded-l-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-l-full rtl:rounded-r-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-r-full rtl:rounded-l-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="w-5 h-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {codeArr.includes('code5') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<ul className="inline-flex items-center m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-l-full rtl:rounded-r-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-r-full rtl:rounded-l-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-l-full rtl:rounded-r-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-r-full rtl:rounded-l-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pagination;
