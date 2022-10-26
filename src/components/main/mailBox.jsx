import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import "./mailBox.css"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }
};
const mapDispatchToProps = dispatch => ({
});

class mailBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected_mailBox:''
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
    handleMailBox = (key) =>{
        this.setState({ selected_mailBox:key });
    }
    handleBack = () =>{
        this.setState({ selected_mailBox:"" });
    }

    render() {
        return (
            <div style={{ marginTop: "170px" }} className="faq_page">
                <div className="web_version_mailBox">
                    <div style={{ width:'100%', display:'flex', minWidth:'300px', overflow:'auto' }}>
                        <div className={this.state.selected_mailBox==='index'?'mail_box_title_each':'unselected_mail_box_title_each'} onClick={ ()=>this.handleMailBox('index') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="21.333" height="16" viewBox="0 0 21.333 16">
                                <path id="FontAwsome_envelope_" data-name="FontAwsome (envelope)" d="M19.333,64H2a2,2,0,0,0-2,2V78a2,2,0,0,0,2,2H19.333a2,2,0,0,0,2-2V66A2,2,0,0,0,19.333,64Zm0,2v1.7c-.934.761-2.424,1.944-5.608,4.437-.7.552-2.092,1.878-3.059,1.863-.967.016-2.357-1.311-3.059-1.863C4.424,69.644,2.934,68.461,2,67.7V66ZM2,78V70.267c.955.76,2.309,1.828,4.372,3.444.911.717,2.506,2.3,4.294,2.29,1.78.01,3.355-1.55,4.294-2.289,2.064-1.616,3.418-2.683,4.373-3.444V78Z" transform="translate(0 -64)" fill={this.state.selected_mailBox==='index'?"#2dccd3":"#bac4ce"} />
                            </svg>
                            <p className={this.state.selected_mailBox==='index'?'mailBox_title':'unselected_mailBox_title'}>Inbox</p>
                            <p className={this.state.selected_mailBox==='index'?'noti_badge':'unselected_noti_badge'}>2</p>
                        </div>
                        <div className={this.state.selected_mailBox==='favorites'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('favorites') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.717" height="16" viewBox="0 0 16.717 16">
                                <path id="FontAwsome_star_" data-name="FontAwsome (star)" d="M36.36,5.346,31.8,4.681,29.755.544a1,1,0,0,0-1.794,0l-2.04,4.137-4.565.666A1,1,0,0,0,20.8,7.052l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053l4.084-2.147,4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218a1,1,0,0,0-.553-1.706ZM32,9.746l.741,4.324-3.884-2.04-3.884,2.04.741-4.324L22.571,6.684l4.343-.631,1.944-3.937L30.8,6.053l4.343.631L32,9.746Z" transform="translate(-20.5 0.013)"  fill={this.state.selected_mailBox==='favorites'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='favorites'?'mailBox_title':'unselected_mailBox_title'}>Favorites</p>
                            <p className={this.state.selected_mailBox==='favorites'?'noti_badge':'unselected_noti_badge'}>2</p>
                        </div>
                        <div className={this.state.selected_mailBox==='drafts'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('drafts') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                <path id="FontAwsome_firstdraft_" data-name="FontAwsome (firstdraft)" d="M12,6H10v4H6v4H0v-.8H5.2v-4h4v-4H12Zm-.8,1.2v4h-4v4H2V16H8V12h4V7.2Zm.8,6H9.2V16H10V14h2ZM0,0V12H4V8H8V4h4V0Z"  fill={this.state.selected_mailBox==='drafts'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='drafts'?'mailBox_title':'unselected_mailBox_title'}>Drafts</p>
                            <p className={this.state.selected_mailBox==='drafts'?'noti_badge':'unselected_noti_badge'}>0</p>
                        </div>
                        <div className={this.state.selected_mailBox==='messages'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('messages') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
                                <path id="FontAwsome_paper-plane_" data-name="FontAwsome (paper-plane)" d="M13.792.227l-13,7.5A1.5,1.5,0,0,0,.97,10.408l3.572,1.478v2.638a1.5,1.5,0,0,0,2.706.894l1.369-1.847,3.5,1.444a1.5,1.5,0,0,0,2.056-1.159l1.856-12.1A1.5,1.5,0,0,0,13.792.227Zm-7.75,14.3V12.505l1.144.472Zm6.644-.9L7.88,11.643l4.381-6.322a.5.5,0,0,0-.741-.663L4.911,10.418,1.542,9.024l13-7.5Z" transform="translate(-0.043 -0.025)"  fill={this.state.selected_mailBox==='messages'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='messages'?'mailBox_title':'unselected_mailBox_title'}>Messages sent</p>
                            <p className={this.state.selected_mailBox==='messages'?'noti_badge':'unselected_noti_badge'}>20</p>
                        </div>
                        <div className={this.state.selected_mailBox==='deleted'?'mail_box_title_each':'unselected_mail_box_title_each'} style={{ marginLeft:'70px' }} onClick={ ()=>this.handleMailBox('deleted') }>
                            <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                <path id="FontAwsome_trash-alt_" data-name="FontAwsome (trash-alt)" d="M8.375,13h.75a.375.375,0,0,0,.375-.375V5.875A.375.375,0,0,0,9.125,5.5h-.75A.375.375,0,0,0,8,5.875v6.75A.375.375,0,0,0,8.375,13ZM13.5,2.5H10.925L9.862.728A1.5,1.5,0,0,0,8.575,0H5.425A1.5,1.5,0,0,0,4.138.728L3.075,2.5H.5A.5.5,0,0,0,0,3v.5A.5.5,0,0,0,.5,4H1V14.5A1.5,1.5,0,0,0,2.5,16h9A1.5,1.5,0,0,0,13,14.5V4h.5a.5.5,0,0,0,.5-.5V3A.5.5,0,0,0,13.5,2.5ZM5.37,1.591A.187.187,0,0,1,5.531,1.5H8.469a.188.188,0,0,1,.161.091l.546.909H4.825ZM11.5,14.5h-9V4h9ZM4.875,13h.75A.375.375,0,0,0,6,12.625V5.875A.375.375,0,0,0,5.625,5.5h-.75a.375.375,0,0,0-.375.375v6.75A.375.375,0,0,0,4.875,13Z"  fill={this.state.selected_mailBox==='deleted'?"#2dccd3":"#bac4ce"}/>
                            </svg>
                            <p className={this.state.selected_mailBox==='deleted'?'mailBox_title':'unselected_mailBox_title'}>Deleted messages</p>
                            <p className={this.state.selected_mailBox==='deleted'?'noti_badge':'unselected_noti_badge'}>10</p>
                        </div>
                    </div>
                    <div>
                        <div className='show_and_search' style={{ marginTop:"60px", display:'flex', width:'100%' }}>
                            <button className='singInButton activeButton' style={{ width:'20%' }}>New message</button>
                            <div style={{ width:'100%' }}>
                                <input type="search" name="search" className="search_input message_search" placeholder='Search' />
                                <div className='selected_div' style={{ float:'right', marginRight:'23px' }}>
                                    <span className='show_title'>Show&nbsp;&nbsp;&nbsp;</span>
                                    <select className='select_ele' name="pageItems">
                                        <option value="6">6</option>
                                        <option value="6">12</option>
                                        <option value="6">18</option>
                                        <option value="6">24</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='table_responsive'>
                                <table className='table text-left'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="mail" /></td>
                                            <td>A</td>
                                            <td>Harry Hekimian</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printing and typesetting …</td>
                                            <td>14:50</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="mail" /></td>
                                            <td>A</td>
                                            <td>Harry Hekimian</td>
                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of the printing and typesetting …</td>
                                            <td>14:50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile_version_mailBox'>
                    {this.state.selected_mailBox===""?
                        <div className='mobile_mailBox_title_group'>
                            <p style={{ fontSize:'24px', color:'#08253E', fontWeight:'bold', textAlign:'center' }}>Mailbox</p>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' style={{ marginTop:'80px' }} onClick={ ()=>this.handleMailBox('index') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="21.333" height="16" viewBox="0 0 21.333 16">
                                    <path id="FontAwsome_envelope_" data-name="FontAwsome (envelope)" d="M19.333,64H2a2,2,0,0,0-2,2V78a2,2,0,0,0,2,2H19.333a2,2,0,0,0,2-2V66A2,2,0,0,0,19.333,64Zm0,2v1.7c-.934.761-2.424,1.944-5.608,4.437-.7.552-2.092,1.878-3.059,1.863-.967.016-2.357-1.311-3.059-1.863C4.424,69.644,2.934,68.461,2,67.7V66ZM2,78V70.267c.955.76,2.309,1.828,4.372,3.444.911.717,2.506,2.3,4.294,2.29,1.78.01,3.355-1.55,4.294-2.289,2.064-1.616,3.418-2.683,4.373-3.444V78Z" transform="translate(0 -64)" fill="#bac4ce" />
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Inbox</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>2</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('favorites') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.717" height="16" viewBox="0 0 16.717 16">
                                    <path id="FontAwsome_star_" data-name="FontAwsome (star)" d="M36.36,5.346,31.8,4.681,29.755.544a1,1,0,0,0-1.794,0l-2.04,4.137-4.565.666A1,1,0,0,0,20.8,7.052l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053l4.084-2.147,4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218a1,1,0,0,0-.553-1.706ZM32,9.746l.741,4.324-3.884-2.04-3.884,2.04.741-4.324L22.571,6.684l4.343-.631,1.944-3.937L30.8,6.053l4.343.631L32,9.746Z" transform="translate(-20.5 0.013)"  fill={this.state.selected_mailBox==='favorites'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Favorites</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>2</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('drafts') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                    <path id="FontAwsome_firstdraft_" data-name="FontAwsome (firstdraft)" d="M12,6H10v4H6v4H0v-.8H5.2v-4h4v-4H12Zm-.8,1.2v4h-4v4H2V16H8V12h4V7.2Zm.8,6H9.2V16H10V14h2ZM0,0V12H4V8H8V4h4V0Z"  fill={this.state.selected_mailBox==='drafts'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Drafts</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>0</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('messages') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="16.001" height="16" viewBox="0 0 16.001 16">
                                    <path id="FontAwsome_paper-plane_" data-name="FontAwsome (paper-plane)" d="M13.792.227l-13,7.5A1.5,1.5,0,0,0,.97,10.408l3.572,1.478v2.638a1.5,1.5,0,0,0,2.706.894l1.369-1.847,3.5,1.444a1.5,1.5,0,0,0,2.056-1.159l1.856-12.1A1.5,1.5,0,0,0,13.792.227Zm-7.75,14.3V12.505l1.144.472Zm6.644-.9L7.88,11.643l4.381-6.322a.5.5,0,0,0-.741-.663L4.911,10.418,1.542,9.024l13-7.5Z" transform="translate(-0.043 -0.025)"  fill={this.state.selected_mailBox==='messages'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Messages sent</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>20</p>
                            </div>
                            <div className='unselected_mail_box_title_each mobile_mailBox_title' onClick={ ()=>this.handleMailBox('deleted') }>
                                <svg style={{ marginTop:'10px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                    <path id="FontAwsome_trash-alt_" data-name="FontAwsome (trash-alt)" d="M8.375,13h.75a.375.375,0,0,0,.375-.375V5.875A.375.375,0,0,0,9.125,5.5h-.75A.375.375,0,0,0,8,5.875v6.75A.375.375,0,0,0,8.375,13ZM13.5,2.5H10.925L9.862.728A1.5,1.5,0,0,0,8.575,0H5.425A1.5,1.5,0,0,0,4.138.728L3.075,2.5H.5A.5.5,0,0,0,0,3v.5A.5.5,0,0,0,.5,4H1V14.5A1.5,1.5,0,0,0,2.5,16h9A1.5,1.5,0,0,0,13,14.5V4h.5a.5.5,0,0,0,.5-.5V3A.5.5,0,0,0,13.5,2.5ZM5.37,1.591A.187.187,0,0,1,5.531,1.5H8.469a.188.188,0,0,1,.161.091l.546.909H4.825ZM11.5,14.5h-9V4h9ZM4.875,13h.75A.375.375,0,0,0,6,12.625V5.875A.375.375,0,0,0,5.625,5.5h-.75a.375.375,0,0,0-.375.375v6.75A.375.375,0,0,0,4.875,13Z"  fill={this.state.selected_mailBox==='deleted'?"#2dccd3":"#bac4ce"}/>
                                </svg>
                                <p className='unselected_mailBox_title' style={{ marginLeft:'35px' }}>Deleted messages</p>
                                <p className='noti_badge' style={{ marginLeft:'auto' }}>10</p>
                            </div>
                        </div>
                        :
                        <div className='mobile_mailBox_content'>
                            <p onClick={this.handleBack} style={{ color:"#002554", fontSize:'16px', fontWeight:'bold', textAlign:"center", cursor:'pointer' }}>Go back</p>
                            <p className='mobile_inbox'>Inbox</p>
                            <div style={{ display:'flex' }}>
                                <p style={{ marginTop:'30px', color:'#002554', fontSize:'16px', fontWeight:'600' }}>Show</p>
                                <button className='singInButton activeButton' style={{ width:'40%', marginLeft:'auto' }}>New message</button>
                            </div>
                            <div style={{ display:'flex' }}>
                                <select className='select_ele' name="pageItems">
                                    <option value="6">6</option>
                                    <option value="6">12</option>
                                    <option value="6">18</option>
                                    <option value="6">24</option>
                                </select>
                                <input style={{ marginLeft:'auto', width:'75%' }} type="search" name="search" className="search_input message_search" placeholder='Search' />
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Harry Hekimian</p>
                                    <p style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Harry Hekimian</p>
                                    <p style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div className='mobile_index_content topboder'>
                                <div style={{ display:'flex' }}>
                                    <input type="checkbox" name="mail" />
                                    <p style={{ position:'relative', top:'7px', left:'12px' }}>S</p>
                                    <p style={{ position:'relative', top:'7px', left:'46px' }}>Harry Hekimian</p>
                                    <p style={{ marginLeft:"auto", marginTop:'7px' }}>14:50</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum text of …</p>
                            </div>
                            <div>
                                <Stack spacing={2}>
                                    <Pagination count={1} defaultPage={1} siblingCount={2} boundaryCount={2} shape="rounded" />
                                </Stack>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(mailBox)