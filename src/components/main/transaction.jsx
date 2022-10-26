import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./transaction.css"
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select'
import question from "../../assets/images/quez.svg"
import visa from "../../assets/images/visa.svg"
import master from "../../assets/images/mastercard.svg"
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {Card} from 'react-card-number';
import CurrencySelect from "./components/currencySelect"
import {crypto_currency} from "./components/crypto_currency"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class transaction extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ],
            transfer:"funds"
        }
    }
    componentWillMount(){
        if(!this.props.email){
            this.props.history.push('/logIn');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    handleTransfer = (key) =>{
        this.setState({ transfer:key });
    }
    navTo = (to) => {
        this.props.history.push("/" + to);
      }
    render() {
        const transferOption = [
          { value: 'transfer within Hedpay', label: 'Transfer within Hedpay' },
          { value: 'transfer to external.', label: 'Transfer to external' }
        ]
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding transaction_div">
                {this.state.transfer==="funds"?
                <div className='row'>
                    <div className='col-md-4'>
                        <div style={{ display:'flex' }}>
                            <button className='add_funds_btn active_add_funds_btn' onClick={()=>this.handleTransfer("funds")}>↓ Add funds</button>
                            <button className='add_funds_btn transfer_btn' onClick={()=>this.handleTransfer("transfer")}>↑ Transfer</button>
                        </div>
                        <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Please choose *</p>
                        <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select Currency'
                            fluid
                            selection
                            options={crypto_currency}
                            defaultValue={this.state.selected}
                        />
                        <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Account *</p>
                        <input className='inputStyle' type="text" name="account" placeholder='Please Enter your...' />
                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Wallet address *</p>
                        <input className='inputStyle' type="text" name="wallet" placeholder='Please Enter your...' />
                        <div style={{ display:"flex" }}>
                            <div style={{ width:"50%" }}>
                                <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Currency type *</p>
                                <CurrencySelect />
                            </div>
                            <div style={{ width: "40%",marginLeft:"auto", marginTop:"-45px" }}>
                                <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                                <input className='inputStyle' type="text" name="nickName" value="640" />
                            </div>
                        </div>
                        <p style={{ color:"#999999", marginTop:"25px" }}><span>Price</span><span style={{ float:"right" }}>1 BTC = 48777.03 USD</span></p>
                        <p style={{ color:"#002554", marginTop:"10px" }}><span>Total price</span><span style={{ float:"right" }}>640 USD</span></p>
                        <p style={{ color:"#002554", marginTop:"10px" }}><span>Receive</span><span style={{ float:"right" }}>0.01344832 BTC</span></p>
                    </div>
                    <div className='col-md-4'>
                        <p className='loginTitle' style={{ marginTop:"70px", color: "#002554" }}>Card Name *</p>
                        <input className='inputStyle' type="text" name="nickName" placeholder='Enter name as it appears on card' />
                        <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}>Card Number *</p>
                        <Card
                            maxLength={19}
                            splitter=" "
                            placeholder="0000 0000 0000 0000"
                         />
                        <div className='card_icon'>
                            <img src={visa} alt="vias" style={{ position:"relative", left: "-10px" }} />
                            <img src={master} alt="master" />
                        </div>
                        <div style={{ display:"flex", marginTop:"-20px" }}>
                            <div style={{ width:"45%" }}>
                                <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Expiration date *</p>
                                <input className='inputStyle' type="text" name="nickName" value="640" placeholder='Month / Year' />
                            </div>
                            <div style={{ width: "45%",marginLeft:"auto", marginTop:"-45px" }}>
                                <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Security code *</p>
                                <input className='inputStyle' type="text" name="nickName" value="640" placeholder='3 digits' />
                            </div>
                        </div>
                        <button className='send_submit_btn'>Submit</button>
                    </div>
                    <div className='col-md-4'>
                        <div className='funds_letter'>
                            <p style={{ fontSize:"18px", fontWeight:"600" }}>Other methods to add funds</p>
                            <p style={{ fontWeight:"500" }}>Bank wire transfer</p>
                            <p style={{ fontWeight:"500" }}><span><img src={question} alt="question" /> SEPA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src={question} alt="question" />International</span></p>
                            <p>Interac only canadian bank</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p>For more details visit <span onClick={()=>this.navTo('faqPage')} style={{ color:"#2DCCD3", cursor:"pointer" }}>FAQ</span></p>
                        </div>
                    </div>
                    <div className='operation_div' style={{ marginTop:"90px" }}>
                        <p className='page_title' style={{ fontSize:"16px" }}>Operations history</p>
                        <div className='show_and_search'>
                        <div className='selected_div'>
                            <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                            <select className='select_ele' name="pageItems">
                            <option value="6">6</option>
                            <option value="6">12</option>
                            <option value="6">18</option>
                            <option value="6">24</option>
                            </select>
                        </div>
                        <input type="search" name="search" style={{ marginTop:'-38px' }} className="search_input" placeholder='Search' />
                        </div>
                        <div className='table_responsive'>
                        <table className='table text-center'>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Deposit</th>
                                <th>Coin/token</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>05/05/2021</td>
                                <td>900</td>
                                <td>HDP.Ф</td>
                                <td></td>
                                <td></td>
                                <td>HDP.Ф</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <Stack spacing={2}>
                            <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                        </Stack>
                    </div>
                </div>:
                <div className='row'>
                    <div className='col-md-4'>
                        <button className='add_funds_btn' onClick={()=>this.handleTransfer("funds")}>↓ Add funds</button>
                        <button className='add_funds_btn transfer_btn active_add_funds_btn' onClick={()=>this.handleTransfer("transfer")}>↑ Transfer</button>
                        <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Transfer with</p>
                        <Select options={transferOption} />
                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Please choose *</p>
                        <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select'
                            fluid
                            selection
                            options={crypto_currency}
                            defaultValue={this.state.selected}
                        />
                        <p className='loginTitle' style={{ marginTop:"75px", color: "#002554" }}>Amount *</p>
                        <input className='inputStyle' type="text" name="amount" placeholder='Enter the amount' />
                        <p className='loginTitle' style={{ marginTop:"15px", color: "#002554" }}>Send to contact</p>
                        <input className='inputStyle' type="text" name="contact" placeholder='Enter your ...' />
                        {/* <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select'
                            fluid
                            selection
                            options={crypto_currency}
                            defaultValue={this.state.selected}
                        /> */}
                        <p className='loginTitle' style={{ marginTop:"25px", color: "#002554" }}>Or UID</p>
                        <input className='inputStyle' type="text" name="UID" placeholder='Enter the UID' />
                    </div>
                    <div className='col-md-4'>
                        <p className='loginTitle' style={{ marginTop:"70px", color: "#002554" }}>Email *</p>
                        <input className='inputStyle' type="email" name="email" placeholder='Type the email' />
                        <p className='loginTitle' style={{ marginTop:"21px", color: "#002554" }}>Message</p>
                        <textarea name="message" className='message_area' cols="30" rows="7"></textarea>
                        <p style={{ color:"#999999", marginTop:"25px" }}><span>Currency</span><span style={{ float:"right" }}>HDP- Hdp.ф</span></p>
                        <p style={{ color:"#999999", marginTop:"10px" }}><span>Quantity</span><span style={{ float:"right" }}>0.0000 Hdp.ф</span></p>
                        <p style={{ color:"#999999", marginTop:"10px" }}><span>Balance</span><span style={{ float:"right" }}>0.0000 Hdp.ф</span></p>
                        <button className='send_submit_btn'>Submit</button>
                    </div>
                    <div className='col-md-4'>
                    </div>
                    <div className='operation_div' style={{ marginTop:"90px" }}>
                        <p className='page_title' style={{ fontSize:"16px" }}>Operations history</p>
                        <div className='show_and_search'>
                        <div className='selected_div'>
                            <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                            <select className='select_ele' name="pageItems">
                            <option value="6">6</option>
                            <option value="6">12</option>
                            <option value="6">18</option>
                            <option value="6">24</option>
                            </select>
                        </div>
                        <input type="search" style={{ marginTop:'-38px' }} name="search" className="search_input" placeholder='Search' />
                        </div>
                        <div className='table_responsive'>
                        <table className='table text-center'>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Deposit</th>
                                <th>Coin/token</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>05/05/2021</td>
                                <td>900</td>
                                <td>HDP.Ф</td>
                                <td></td>
                                <td></td>
                                <td>HDP.Ф</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <Stack spacing={2}>
                            <Pagination count={6} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                        </Stack>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(transaction)