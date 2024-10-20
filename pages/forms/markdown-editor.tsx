import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
import IconBell from '@/components/Icon/IconBell';
import IconCode from '@/components/Icon/IconCode';
const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });

const MarkDownEditor = () => {
    const dispatch = useDispatch();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
        dispatch(setPageTitle('Markdown Editor'));
    });
    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    const [value, setValue] = useState(
        `# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
`
    );

    const onChange = useCallback((value: string) => {
        setValue(value);
    }, []);

    const delay = 1000;
    const autosavedValue =
        (isMounted && localStorage.getItem(`smde_demo`)) ||
        `# Autosaving!

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.`;

    const anOptions = useMemo(() => {
        return {
            autosave: {
                enabled: true,
                uniqueId: 'demo',
                delay,
            },
        };
    }, [delay]);

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Markdown Editor</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-simplemde-editor" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-simplemde-editor
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Basic */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code1')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="markdown-editor prose mb-5 rtl:text-right dark:prose-invert">
                            <SimpleMdeReact value={value} onChange={onChange} />
                        </div>
                        {codeArr.includes('code1') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import { useCallback, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const [value, setValue] = useState(
\`# Basic Example
Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even[links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like 'cmd-b' or 'ctrl-b'.

## Lists
Unordered lists can be started using the toolbar or by typing '*', '-', or '+'. Ordered lists can be started by typing '1.'.

#### Unordered
* Lists are a piece of cake
* They even auto continue as you type
* A double enter will end them
* Tabs and shift - tabs work too

#### Ordered
1. Numbered lists...
2. ...work too!

## What about images?
![Yes](https://i.imgur.com/sZlktY7.png)
\`
);

const onChange = useCallback((value: string) => {
setValue(value);
}, []);

<SimpleMdeReact value={value} onChange={onChange} />`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    {/*  Autosaving */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Autosaving</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code2')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="markdown-editor prose mb-5 rtl:text-right dark:prose-invert">
                            <SimpleMdeReact value={autosavedValue} options={anOptions} />
                        </div>
                        {codeArr.includes('code2') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import { useCallback, useMemo, useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const delay = 1000;
const autosavedValue =
isMounted && localStorage.getItem(\`smde_demo\`) ||
\`# Autosaving!

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

By default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.\`;

const anOptions = useMemo(() => {
return {
    autosave: {
        enabled: true,
        uniqueId: 'demo',
        delay,
    },
};
}, [delay]);

<SimpleMdeReact value={autosavedValue} options={anOptions} />`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkDownEditor;
