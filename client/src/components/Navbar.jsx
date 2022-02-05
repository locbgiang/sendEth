import { useState, useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';

import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);
    return (
        <nav className="w-full flex md:justify-center justify-between item-center p-4 "> 
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt='logo' className="w-10 cursor-pointer" />
            </div>
            <div className="w-1/2 px-10 text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                <a className='mx-4 cursor-pointer' href='https://coinmarketcap.com'>Market</a>
                <a className='mx-4 cursor-pointer' href='https://coinmarketcap.com/rankings/exchanges/'>Exchange</a>
                <a className='mx-4 cursor-pointer' href='https://www.coinbase.com/learn/tips-and-tutorials'>Tutorials</a>
                <a className='mx-4 cursor-pointer' href='https://metamask.io'>Wallets</a>
            </div>
            <div className="w-1/7 text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {! currentAccount && // if there is a metamask acc connected dont render button
                    <button 
                        onClick={connectWallet}
                        className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        Connect
                    </button>
                }
                {currentAccount && // if there is a metamask acc connected dont render button
                    <button 
                        className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        {shortenAddress(currentAccount)}
                    </button>
                }
            </div>
            <div className="flex relative">
                    {toggleMenu
                        ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={ ()=> setToggleMenu(false) } />
                        : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={ ()=> setToggleMenu(true) } />
                    }
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                            "
                        >
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose onClick={()=> setToggleMenu(false)} />
                            </li>
                            <a className='mx-4 cursor-pointer my-2 text-lg' href='https://coinmarketcap.com'>Market</a>
                            <a className='mx-4 cursor-pointer my-2 text-lg' href='https://coinmarketcap.com/rankings/exchanges/'>Exchange</a>
                            <a className='mx-4 cursor-pointer my-2 text-lg' href='https://www.coinbase.com/learn/tips-and-tutorials'>Tutorials</a>
                            <a className='mx-4 cursor-pointer my-2 text-lg' href='https://metamask.io'>Wallets</a>
                        </ul>
                    )}
            </div>
        </nav>
    )
}

export default Navbar;
