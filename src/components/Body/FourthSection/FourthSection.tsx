import emailjs from '@emailjs/browser';
import { useCallback, useRef, useState } from 'react';
import env from '../../../env.json';

export default function FourthSection() {
    const initialFieldsValues: { [key: string]: string } = {
        from_name: '',
        reply_to: '',
        message: '',
    };
    const inputFields = [
        { id: 'from_name', type: 'text', name: 'Vardas *' },
        { id: 'reply_to', type: 'email', name: 'El. paštas *' },
        { id: 'message', type: 'textArea', name: 'Žinutė *' },
    ];
    const [inputFieldsValues, setInputFieldsValues] = useState<{ [key: string]: string }>({ ...initialFieldsValues });
    const [apiInteraction, setApiInteraction] = useState({
        apiCallInProgress: false,
        showSpinner: false,
        showCheckMark: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const form = useRef() as any;

    const btnDisabled =
        apiInteraction.apiCallInProgress ||
        inputFieldsValues.from_name === '' ||
        inputFieldsValues.reply_to === '' ||
        inputFieldsValues.message === '' ||
        Object.keys(errors).length > 0;

    const validateInputFields = useCallback(
        async (fieldName: string, email: boolean) => {
            if (inputFieldsValues[fieldName] === '') {
                setErrors((oldVal) => ({
                    ...oldVal,
                    [fieldName]: 'Privalote užpildyti šį lauką.',
                }));
            } else {
                setErrors((oldVal) => {
                    delete oldVal[fieldName];
                    return { ...oldVal };
                });
            }

            if (email && inputFieldsValues[fieldName] !== '') {
                const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                const match = validEmail.test(inputFieldsValues[fieldName]);
                if (!match) {
                    setErrors((oldVal) => ({
                        ...oldVal,
                        [fieldName]: 'Neteisingas el. pašto adresas.',
                    }));
                } else {
                    setErrors((oldVal) => {
                        delete oldVal[fieldName];
                        return { ...oldVal };
                    });
                }
            }
        },
        [inputFieldsValues, errors],
    );

    const sendEmail = async (e: any) => {
        setApiInteraction((oldVal) => ({
            ...oldVal,
            apiCallInProgress: true,
            showSpinner: true,
        }));
        e.preventDefault();

        try {
            const resp = await emailjs.sendForm(env.serviceID, env.templateID, form.current, env.publicKey);
            const { status } = resp;
            if (status === 200) {
                setApiInteraction((oldVal) => ({
                    ...oldVal,
                    showSpinner: false,
                    showCheckMark: true,
                }));
                setInputFieldsValues(initialFieldsValues);
            }
        } catch (error) {
            console.log(error);
        }

        await new Promise((resolve) => setTimeout(resolve, 2500));
        setApiInteraction({
            apiCallInProgress: false,
            showSpinner: false,
            showCheckMark: false,
        });
    };

    return (
        <section className="w-full flex justify-center" id="susisiekite">
            <div className="laptop:w-1224px w-full flex tablet:flex-row flex-col">
                {/* left-side */}
                <div className="tablet:w-1/2 w-full flex justify-center">
                    <div className="laptop:py-4 py-2 tablet:w-3/4 w-11/12">
                        <div className="laptop:text-2xl text-lg font-semibold text-center">SUSISIEKITE</div>
                        <div className="pb-1 justify-center flex">
                            <form ref={form} className="flex flex-col">
                                <input className="hidden" type="text" name="to_name" defaultValue="Renata" />
                                <div className="flex flex-wrap -mx-3">
                                    {inputFields.map((inputField) => (
                                        <div className="w-full px-3 mb-6" key={inputField.id}>
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={inputField.id}
                                            >
                                                {inputField.name}
                                            </label>
                                            {inputField.type !== 'textArea' ? (
                                                <input
                                                    className={`
                                                        appearance-none
                                                        block
                                                        w-full
                                                        text-gray-700
                                                        border
                                                        border-gray-400
                                                        rounded
                                                        py-3
                                                        px-4
                                                        leading-tight
                                                        focus:outline-none
                                                        focus:bg-white
                                                        ${
                                                            errors[inputField.id]
                                                                ? 'border-red-500'
                                                                : 'focus:border-gray-700'
                                                        }
                                                    `}
                                                    id={inputField.id}
                                                    type={inputField.type}
                                                    name={inputField.id}
                                                    value={inputFieldsValues[inputField.id]}
                                                    onChange={(e) => {
                                                        setInputFieldsValues({
                                                            ...inputFieldsValues,
                                                            [inputField.id]: e.target.value,
                                                        });
                                                    }}
                                                    onBlur={() => {
                                                        validateInputFields(inputField.id, inputField.type === 'email');
                                                    }}
                                                />
                                            ) : (
                                                <textarea
                                                    className={`
                                                        no-resize
                                                        appearance-none
                                                        block w-full
                                                        text-gray-700
                                                        border
                                                        border-gray-400
                                                        rounded
                                                        py-3
                                                        px-4
                                                        leading-tight
                                                        focus:outline-none
                                                        focus:bg-white
                                                        h-48
                                                        resize-none
                                                        ${
                                                            errors[inputField.id]
                                                                ? 'border-red-500'
                                                                : 'focus:border-gray-700'
                                                        }
                                                    `}
                                                    id="message"
                                                    name="message"
                                                    value={inputFieldsValues[inputField.id]}
                                                    onChange={(e) => {
                                                        setInputFieldsValues({
                                                            ...inputFieldsValues,
                                                            [inputField.id]: e.target.value,
                                                        });
                                                    }}
                                                    onBlur={() => {
                                                        validateInputFields(inputField.id, inputField.type === 'email');
                                                    }}
                                                ></textarea>
                                            )}
                                            <p className="text-red-500 text-base italic">{errors[inputField.id]}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <button
                                            disabled={btnDisabled}
                                            className={`w-full text-white py-3 text-xl ${
                                                !btnDisabled
                                                    ? 'laptop:hover:bg-zinc-900 bg-zinc-800'
                                                    : 'laptop:cursor-not-allowed bg-zinc-400'
                                            }`}
                                            type="submit"
                                            onClick={sendEmail}
                                            title={btnDisabled ? 'Neužpildyti privalomi laukai' : ''}
                                        >
                                            {!apiInteraction.apiCallInProgress && <span>Siųsti</span>}
                                            {apiInteraction.showSpinner && (
                                                <svg
                                                    role="status"
                                                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                                    viewBox="0 0 100 101"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="currentFill"
                                                    />
                                                </svg>
                                            )}
                                            {apiInteraction.showCheckMark && <span>Sėkmingai išsiųsta</span>}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* right-side */}
                <div className="tablet:w-1/2 w-full inline-flex justify-center items-center">
                    <img src="./3.jpg" width="auto" alt="labrinth-man" />
                </div>
            </div>
        </section>
    );
}
