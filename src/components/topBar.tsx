import '../styling/topBar.css'
import houseIcon from '../images/icon/home_FILL0_wght300_GRAD0_opsz24@2x.png'
import groupIcon from '../images/icon/group_FILL0_wght300_GRAD0_opsz24@2x.png'
import chatIcon from '../images/icon/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png'
import creditcardIcon from '../images/icon/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png'
import calenderIcon from '../images/icon/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png'
import testLogo from '../images/icon/TestLogo@2x.png'

export default function NavBar(){
    return(
        <div className='navWrapper'>
            <ul className='nav'>
                 <li>
                    <div className='testLogo'>
                        <img src={testLogo} width='210.58px' height='48px' alt='Logo'/>
                    </div>
                </li>
                <li className='group, flex'>
                <li className='navItem'>
                    <div className='flex'>
                        <img height={17} className='houseIcon, margin9' src={houseIcon} alt='house icon'/>
                        <p>Overview</p>
                    </div>
                </li>
                <li className='navItem'>
                    <div className='flex'>
                        <img  height={17} className='groupIcon, margin9' src={groupIcon} alt='group icon'/>
                        <p>Patients</p>
                    </div>
                </li>
                <li className='navItem'>
                    <div className='flex'>
                        <img height={17} className='calenderIcon, margin9' src={calenderIcon} alt='Calender Icon'/>
                        <p>Schedule</p>
                    </div>
                </li>
                <li className='navItem'>
                    <div className='flex'>
                        <img height={17} className='chatIcon, margin9' src={chatIcon} alt='Chat Icon'/>
                        <p>Message</p>
                    </div>
                </li>
                <li className='navItem'>
                    <div className='flex'>
                        <img height={17} className='creditIcon, margin9' src={creditcardIcon} alt='Credit Card Icon'/>
                        <p>Transactions</p>
                    </div>
                </li>
                </li>
                <li>6</li>
                <li>7</li>
            </ul>
        </div>
    )
}