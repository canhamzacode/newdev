export const useDate = () => {
    const date = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return [formattedDate]
}