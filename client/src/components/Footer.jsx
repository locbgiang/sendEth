import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className='w-10' />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <a href='https://coinmarketcap.com' className="text-white text-base text-center mx-2 cursor-pointer">Market</a>
                <a href='https://coinmarketcap.com/rankings/exchanges/' className="text-white text-base text-center mx-2 cursor-pointer">Exchange</a>
                <a href='https://www.coinbase.com/learn/tips-and-tutorials' className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</a>
                <a href='https://metamask.io' className="text-white text-base text-center mx-2 cursor-pointer">Wallets</a>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-5'>
                <p className='text-white text-sm text-center'>
                    EMAIL:
                </p>
                <p className='text-white text-sm text-center'>
                    Locbgiang@gmail.com
                </p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">Loc Giang</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>

    )
}

export default Footer;
