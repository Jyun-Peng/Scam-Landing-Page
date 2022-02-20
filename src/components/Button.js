export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`inline-block px-7 py-4 bg-red text-white font-bold text-[1.75rem] leading-none rounded-full`}
        >
            {text}
        </button>
    );
}
