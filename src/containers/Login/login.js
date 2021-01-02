import React from 'react'

import { Form, Input,Button} from 'antd';
import bg from '../../assets/images/bg.jpg'
import styles from './login.module.css'
import { Redirect, withRouter } from 'react-router-dom';

import {useDispatch} from 'react-redux'
import {signIn, signUp} from '../Redux/actions/user'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const Login = (props) => {
  
   const dispatch = useDispatch() 
   const loginDetails = localStorage.getItem('token')

    const [slider,setSlider] = React.useState(0)
    
   
   const handleSignUp = async (values)=>{
       delete values.confirm
       await dispatch(signUp(values))
       setSlider(2)
   }

   const handleSignIn = async(values) =>{
     await dispatch(signIn(values))
     props.history.push('/home')
   }

    if(loginDetails === null){
      return (
        <div>
        { slider === 0 ? (
            <div className={styles.mainDiv}>
                <img className={styles.bg} src={bg}/><br />
                <Button className={styles.signupButton} onClick={()=>setSlider(1)}>SIGN UP</Button><br />
                <Button className={styles.signinButton} onClick={()=>setSlider(2)}>LOGIN</Button><br />
            </div>
            ):''
        }
        {
          slider === 1 ? (
             <div className={styles.mainDiv}>
                <div className={styles.signinDiv}>
                    <div style={{marginTop:'60px'}}>
                        <label style={{font: 'normal normal bold 24px/32px Barlow'}}>
                          <b>Create an Account</b>
                        </label>
                        <div style={{marginTop:'27px'}}>
                        <Form
                           {...layout}
                            name="register"
                            onFinish={handleSignUp}
                            >
                             <Form.Item
                                   name="email"  
                                   label="E-mail"  
                                   rules={[  
                                     {  
                                          type: 'email',  
                                          message: 'The input is not valid E-mail!',  
                                     },  
                                     {  
                                           required: true,  
                                           message: 'Please input your E-mail!',  
                                     },  
                                   ]}  
                                >  
                                   <Input style={{width: '315px' ,height: '40px'}} />  
                                </Form.Item>  
  
                                <Form.Item
                                  name="password"
                                  label="Password"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please input your password!',
                                    },
                                  ]}
                                >
                                  <Input.Password  style={{width: '315px' ,height: '40px'}}/>
                                </Form.Item>
  
                               <Form.Item
                                 name="confirm"
                                 label="Confirm Password"
                                 dependencies={['password']}
                                 rules={[
                                   {
                                     required: true,
                                     message: 'Please confirm your password!',
                                   },
                                   ({ getFieldValue }) => ({
                                     validator(rule, value) {
                                       if (!value || getFieldValue('password') === value) {
                                         return Promise.resolve();
                                       }
  
                                       return Promise.reject('The two passwords that you entered do not match!');
                                     },
                                   }),
                                 ]}
                               >
                                 <Input.Password style={{width: '315px' ,height: '40px'}} />
                               </Form.Item>
                               <Form.Item {...tailLayout}>
                                   <Button 
                                       className={styles.signupButton} 
                                       style={{position:'static',marginTop:'2rem'}} 
                                       htmlType='submit'
                                      >
                                     SIGN UP
                                   </Button>
                                 </Form.Item>                         
                               </Form>
                               </div>
                    </div>
                </div>
             </div>
          ):''
        }
        {
          slider === 2 ? (
              <div className={styles.mainDiv}>
                 <div className={styles.signinDiv}>
                    <div style={{marginTop:'60px'}}>
                        <label style={{font: 'normal normal bold 24px/32px Barlow'}}>
                          <b>LOGIN</b>
                        </label>
                        <div style={{marginTop:'27px'}}>
                       <Form
                           {...layout}
                            name="login"
                            onFinish={handleSignIn}
                            >
                             <Form.Item
                                   name="email"  
                                   label="E-mail"  
                                   rules={[  
                                     {  
                                          type: 'email',  
                                          message: 'The input is not valid E-mail!',  
                                     },  
                                     {  
                                           required: true,  
                                           message: 'Please input your E-mail!',  
                                     },  
                                   ]}  
                                >  
                                   <Input style={{width: '315px' ,height: '40px'}} />  
                                </Form.Item>  
  
                                <Form.Item
                                  name="password"
                                  label="Password"
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please input your password!',
                                    },
                                  ]}
                                >
                                  <Input.Password  style={{width: '315px' ,height: '40px'}}/>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                   <Button 
                                       className={styles.signupButton} 
                                       style={{position:'static',marginTop:'2rem'}} 
                                       htmlType='submit'
                                       >
                                     LOGIN
                                   </Button>
                                 </Form.Item> 
                                </Form>
                                </div>
                                </div>
                       </div>
             </div>
             ):''  
        }
         </div>
    )
    }
    else{
      return(
        <Redirect to='/home'/>
      )
    }
  
}

export default withRouter(Login)