import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class signUpDash extends Component {
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }}>
                <div className='signUp row footer_padding'>
                    <p className='accOption'>Account Options</p>
                    <div className='col-md-3 col-sm-3 allUSDDIV' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                        <p className='allUSD' style={{ paddingLeft:'20px' }}>All USD$ equivelant</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Number of Trades per Day</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Daily Total Trades Limit</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Monthly Total Trades Limit</p><br />
                        <p className='number' style={{ paddingLeft:'20px' }}>Number of Wihdrawals per Day</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Daily Total Wihdrawals Limit</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Monthly Total Wihdrawals Limit</p><br />
                        <p className='number' style={{ paddingLeft:'20px' }}>Transactions With in Hedpay</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Incoming Deposits</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Wallet Capacity</p>
                        <p className='number' style={{ paddingLeft:'20px' }}>Maximum Staking Amount</p>
                    </div>
                    <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                        <div className='signUpDash'>
                            <p className='limited'>LIMITED</p>
                            <div className='borderLine'></div>
                            <p className='number non_border_bottom' style={{ marginTop:"10px" }}>No KYC is required</p>
                            <p className='number'>3</p>
                            <p className='number'>$500.00</p>
                            <p className='number'>$5,000.00</p><br />
                            <p className='number'>3</p>
                            <p className='number'>$300.00</p>
                            <p className='number'>$2,500.00</p><br />
                            <p className='number'>50</p>
                            <p className='number'>$500.00</p>
                            <p className='number'>$10,000.00</p>
                            <p className='number'>$100,000.00</p>
                            <button className='nextStep'><Link to="limitedSignUp" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                        <div className='signUpDash'>
                            <p className='limited'>STANDARD</p>
                            <div className='borderLine'></div>
                            <p className='number non_border_bottom' style={{ marginTop:"10px" }}>Basic KYC screening required</p>
                            <p className='number'>5</p>
                            <p className='number'>$1,000.00</p>
                            <p className='number'>$10,000.00</p><br />
                            <p className='number'>5</p>
                            <p className='number'>$500.00</p>
                            <p className='number'>$5,000.00</p><br />
                            <p className='number'>150</p>
                            <p className='number'>$1,000.00</p>
                            <p className='number'>$50,000.00</p>
                            <p className='number'>Unlimited</p>
                            <button className='nextStep'><Link to="standardSignUp" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-3' style={{ paddingLeft:'0px', paddingRight:'0px' }}>
                        <div className='signUpDash'>
                            <p className='limited'>PRO</p>
                            <div className='borderLine'></div>
                            <p className='number non_border_bottom' style={{ marginTop:"10px" }}>KYC Level 2 screening required</p>
                            <p className='number'>10</p>
                            <p className='number'>$5,000.00</p>
                            <p className='number'>$25,000.00</p><br />
                            <p className='number'>10</p>
                            <p className='number'>$1,000.00</p>
                            <p className='number'>$5,000.00</p><br />
                            <p className='number'>500</p>
                            <p className='number'>$10,000.00</p>
                            <p className='number'>$250,000.00</p>
                            <p className='number'>Unlimited</p>
                            <button className='nextStep'><Link to="proSignUpNote" className='nextLink'><span>Next step</span></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default signUpDash;