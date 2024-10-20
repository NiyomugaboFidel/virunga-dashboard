import Link from 'next/link';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import MaskedInput from 'react-text-mask';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconBell from '@/components/Icon/IconBell';
import IconCode from '@/components/Icon/IconCode';

const InputMaskForm = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Input Mask'));
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
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Input Mask</span>
                </li>
            </ul>

            <div className="flex-1 space-y-8 pt-5" id="basic">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-text-mask" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-text-mask
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {/* Basic */}
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Static Mask Basic</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code1')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <p className="mb-5 text-white-dark">
                                Input mask are use with <span className="text-danger">input</span> tags.
                            </p>
                            <form>
                                <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="staticMask1" className="text-white-dark">
                                            {`mask="'##-#######'" (99-9999999)`}
                                        </label>
                                        <MaskedInput
                                            id="staticMask1"
                                            type="text"
                                            placeholder="__-_______"
                                            className="form-input"
                                            mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="staticMask2" className="text-white-dark">
                                            {`mask="'AA-####'" (aa-9999)`}
                                        </label>
                                        <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code1') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="staticMask1" className="text-white-dark">
                mask="'##-#######'" (99-9999999)
            </label>
            <MaskedInput
                id="staticMask1"
                type="text"
                placeholder="__-_______"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="staticMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9999)
            </label>
            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Alternate masks</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code2')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="altnMask1" className="text-white-dark">
                                            {`mask="'##.#'" (99.9)`}
                                        </label>
                                        <MaskedInput id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
                                    </div>
                                    <div>
                                        <label htmlFor="altnMask2" className="text-white-dark">
                                            {`mask="'##.##'" (99.99)`}
                                        </label>
                                        <MaskedInput id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code2') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="altnMask1" className="text-white-dark">
                mask="'##.#'" (99.9)
            </label>
            <MaskedInput id="altnMask1" type="text" placeholder="__._" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="altnMask2" className="text-white-dark">
                mask="'##.##'" (99.99)
            </label>
            <MaskedInput id="altnMask2" type="text" placeholder="__.__" className="form-input" mask={[/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>

                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Dynamic Syntax</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code3')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                                    <div>
                                        <label htmlFor="dynamicMask1" className="text-white-dark">
                                            {`mask="'#-AAA###'" (9-a{"{1,3}"}9{"{1,3}"})`}
                                        </label>
                                        <MaskedInput
                                            id="dynamicMask1"
                                            type="text"
                                            placeholder="_-__"
                                            className="form-input"
                                            mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dynamicMask2" className="text-white-dark">
                                            {`mask="'AA-####'" (aa-9{"{1,4}"})`}
                                        </label>
                                        <MaskedInput id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
                                    </div>
                                    <div>
                                        <label htmlFor="dynamicMask3" className="text-white-dark">
                                            {`mask="'AA-##'" (aa-9{"{1,2}"})`}
                                        </label>
                                        <MaskedInput id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code3') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 items-end gap-4">
        <div>
            <label htmlFor="dynamicMask1" className="text-white-dark">
                mask="'#-AAA###'" (9-a{'{1,3}'}9{'{1,3}'})
            </label>
            <MaskedInput
                id="dynamicMask1"
                type="text"
                placeholder="_-__"
                className="form-input"
                mask={[/[0-9]/, '-', /[a-z]/, /[a-z]/, /[a-z]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dynamicMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9{'{1,4}'})
            </label>
            <MaskedInput id="dynamicMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
        <div>
            <label htmlFor="dynamicMask3" className="text-white-dark">
                mask="'AA-##'" (aa-9{'{1,2}'})
            </label>
            <MaskedInput id="dynamicMask3" type="text" placeholder="__-__" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Date</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code4')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div>
                                        <label htmlFor="dateMask1" className="text-white-dark">
                                            {`mask="'##/##/####'" (dd/mm/yyyy)`}
                                        </label>
                                        <MaskedInput
                                            id="dateMask1"
                                            type="text"
                                            placeholder="__/__/____"
                                            className="form-input"
                                            mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dateMask2" className="text-white-dark">
                                            {`mask="'##-##-####'" (99-99-9999)`}
                                        </label>
                                        <MaskedInput
                                            id="dateMask2"
                                            type="text"
                                            placeholder="__-__-____"
                                            className="form-input"
                                            mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="dateMask3" className="text-white-dark">
                                            {`mask="'## December, ####'" (99 December, 9999)`}
                                        </label>
                                        <MaskedInput
                                            id="dateMask3"
                                            type="text"
                                            placeholder="__ December, ____"
                                            className="form-input"
                                            // mask={['99 December, 9999']}
                                            mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code4') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label htmlFor="dateMask1" className="text-white-dark">
                mask="'##/##/####'" (dd/mm/yyyy)
            </label>
            <MaskedInput
                id="dateMask1"
                type="text"
                placeholder="__/__/____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask2" className="text-white-dark">
                mask="'##-##-####'" (99-99-9999)
            </label>
            <MaskedInput
                id="dateMask2"
                type="text"
                placeholder="__-__-____"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="dateMask3" className="text-white-dark">
                mask="'## December, ####'" (99 December, 9999)
            </label>
            <MaskedInput
                id="dateMask3"
                type="text"
                placeholder="__ December, ____"
                className="form-input"
                // mask={['99 December, 9999']}
                mask={[/[0-9]/, /[0-9]/, ' ', 'D', 'e', 'c', 'e', 'm', 'b', 'e', 'r', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">IP</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code5')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset>
                                    <label htmlFor="ipMask" className="text-white-dark">
                                        {`mask="'###.###.###.###'" (192.198.1.1)`}
                                    </label>
                                    <MaskedInput
                                        id="ipMask"
                                        type="text"
                                        placeholder="___.___.___.___"
                                        className="form-input"
                                        mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code5') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="ipMask" className="text-white-dark">
            mask="'###.###.###.###'" (192.198.1.1)
        </label>
        <MaskedInput
            id="ipMask"
            type="text"
            placeholder="___.___.___.___"
            className="form-input"
            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Phone</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code6')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset>
                                    <label htmlFor="phoneMask" className="text-white-dark">
                                        {`mask="'(###) ###-####'" ((999) 999-9999)`}
                                    </label>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="(___) ___-____"
                                        className="form-input"
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code6') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="phoneMask" className="text-white-dark">
            mask="'(###) ###-####'" ((999) 999-9999)
        </label>
        <MaskedInput
            id="phoneMask"
            type="text"
            placeholder="(___) ___-____"
            className="form-input"
            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Currency</h5>
                            <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code7')}>
                                <span className="flex items-center">
                                    <IconCode className="me-2" />{' '}
                                    Code
                                </span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <form>
                                <fieldset>
                                    <label htmlFor="currencyMask" className="text-white-dark">
                                        $999,9999,999.99
                                    </label>
                                    <MaskedInput
                                        id="currencyMask"
                                        type="text"
                                        placeholder="$___,____,___.__"
                                        className="form-input"
                                        mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
                                    />
                                </fieldset>
                            </form>
                        </div>
                        {codeArr.includes('code7') && (
                            <CodeHighlight>
                                <pre className="language-typescript">{`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="currencyMask" className="text-white-dark">
            $999,9999,999.99
        </label>
        <MaskedInput
            id="currencyMask"
            type="text"
            placeholder="$___,____,___.__"
            className="form-input"
            mask={['$', /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ',', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}</pre>
                            </CodeHighlight>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputMaskForm;
