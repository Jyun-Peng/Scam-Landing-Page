import Button from './Button';

export default function Form() {
    const LabelClass = 'flex-none text-md text-darkGray mb-2';
    const InputClass = 'w-full bg-gray text-input rounded-lg px-4 outline-none';
    return (
        <form className="max-w-md w-full">
            <label className="block mb-6">
                <p className={LabelClass}>姓名</p>
                <input type="text" placeholder="XXX" className={InputClass}></input>
            </label>

            <label className="block mb-6">
                <p className={LabelClass}>電話</p>
                <input type="text" placeholder="0123-456-789" className={InputClass}></input>
            </label>
            <label className="block mb-6">
                <p className={LabelClass}>電子信箱</p>
                <input type="email" placeholder="XXXXXX@gmail.com" className={InputClass}></input>
            </label>
            <label className="block mb-8">
                <p className={LabelClass}>地址</p>
                <input type="text" placeholder="XX市XX區XX路X段X號" className={InputClass}></input>
            </label>
            <div className="text-center">
                <Button text="提交資料" onClick={() => window.alert('可惜我也交不到女友...')} />
            </div>
        </form>
    );
}
