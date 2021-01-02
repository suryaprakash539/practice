import React from 'react'

import { Form, Input,Button} from 'antd';
import bg from '../../assets/images/bg.jpg'
import styles from './login.module.css'

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

const Login = () => {
    const [slider,setSlider] = React.useState(0)
  return (
      <div>
      { slider === 0 ? (
          <div className={styles.mainDiv}>
              <div className={styles.signinDiv}>
              <img className={styles.bg} src={bg}/>
              <Button className={styles.signupButton}>SIGN UP</Button>
               <Button className={styles.signinButton}>LOGIN</Button>
             </div>
          </div>
          ):''
      }
       </div>
  )
}

export default Login