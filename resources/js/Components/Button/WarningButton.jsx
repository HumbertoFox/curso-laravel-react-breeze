export default function WarningButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4 py-1 text-sm tracking-widest text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:bg-orange-900 dark:bg-orange-200 dark:text-orange-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-orange-900 dark:active:bg-orange-400 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
