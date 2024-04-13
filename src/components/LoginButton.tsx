export default function LoginButton(onClick: () => void){
    return (
        <button
        className="bg-[#EEE50B]/[0.25] text-black font-urbanist font-extrabold text-2xl m-6 p-2 rounded-lg"
        onClick={onClick}
        >
        Login
        </button>
    );
}