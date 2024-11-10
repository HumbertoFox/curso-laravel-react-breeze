export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-1 text-md tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-900 dark:bg-red-200 dark:text-red-800 dark:focus:bg-white dark:focus:ring-offset-red-900 dark:active:bg-red-400 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
