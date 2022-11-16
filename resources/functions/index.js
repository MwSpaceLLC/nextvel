export const money = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const ComponentServerSideProps = () => <></>;