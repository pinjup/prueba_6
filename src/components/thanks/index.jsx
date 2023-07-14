import thanks_icon from '../../assets/images/icon-thank-you.svg';

export default function Thanks() {
    return (
        <div className='w-[90%] h-[380px] pt-[70px] rounded-lg bg-white flex flex-col items-center gap-4 laptop:pt-[120px] laptop:px-14'>
            <img className='w-14 h-14' src={thanks_icon} alt='thanks_icon' />

            <div className='text-center flex flex-col gap-2'>
                <h1 className='text-[#02295a] font-bold text-xl'>Thank you!</h1>
                <p className='text-[#9699ab]'>
                    Thanks for confirming your subscription!
                    <br /> We hope you have fun using our
                    <br /> platform. If you ever need support,
                    <br /> please feel free to email us at
                    <br /> support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}
