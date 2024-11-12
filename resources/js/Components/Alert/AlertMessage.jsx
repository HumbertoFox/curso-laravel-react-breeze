export default function AlertMessage({ message }) {
    const hasSuccess = message.success ? true : false;
    const hasError = message.error ? true : false;

    if (!hasSuccess && !hasError) return null;

    const alertStyle = hasSuccess ? {
        bg: 'bg-green-50 dark:bg-gray-800',
        text: 'text-green-800 dark:text-green-400',
        content: message.success,
    } : {
        bg: 'bg-red-50 dark:bg-gray-800',
        text: 'text-red-800 dark:text-red-400',
        content: message.error,
    }

    return (
        <div className={`p-3 m-3 text-sm rounded-lg ${alertStyle.text} ${alertStyle.bg}`}>
            <span>{alertStyle.content}</span>
        </div>
    );
}