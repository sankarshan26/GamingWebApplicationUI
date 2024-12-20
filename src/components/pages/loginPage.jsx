import React, { useState } from 'react';
import Logo from '../../assets/logo';
import Eye from '../../assets/eye';
import ClosedEye from '../../assets/closedEye';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State for general errors
  const [passwordError, setPasswordError] = useState(''); // State for password mismatch
  const [page, setPage] = useState('login') // by default we are opening login page
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('phoneNumber : ', phoneNumber);
    console.log('password : ', password);
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert(e.target.phoneNumber);
    alert();
    console.log('phoneNumber : ', phoneNumber);
    console.log('password : ', password);
    console.log('confirmpassword : ', confirmPassword);
  }

  const loginHeader = (
      <header className='bg-headerbackground text-white flex flex-col rounded-b-3xl p-3 items-center justify-center'>
        <Logo />
        <div className='mt-1 w-full px-2'>
          <h1 className='font-semibold text-2xl '>Log in</h1>
          <p className='text-headertextcolor mt-1 font-xs'>Please log in with your phone number or email
If you forget your password, please contact customer service</p>
        </div>
      </header>
    );
  
  
  const registerHeader = (
    <header className='bg-headerbackground text-white flex flex-col sm:rounded-t-2xl rounded-b-3xl p-3 items-center justify-center'>
        <Logo />
        <div className='mt-2 w-full px-2'>
          <h1 className='font-semibold text-3xl'>Register</h1>
          <p className='text-headertextcolor mt-1 mb-2 text-base'>Please register by phone number or email</p>
        </div>
      </header>
  );

  

  const handlePhoneNumberChange = (event) => {
    event.preventDefault();
    console.log(event);
    const inputValue = event.target.value;
    console.log(inputValue);
    const regex = /^[0-9+]*$/;
    if (regex.test(inputValue)){
      setPhoneNumber(inputValue);
      setError('');
    } else {
      setError('Please Enter a valid phone number');
    }
  }

  const registerForm = (
    <form className='p-3 gap-4 flex flex-col' onSubmit={handleRegisterSubmit}>
      {/* Phone Number */}
      <div className='flex flex-col gap-2'>
        <label htmlFor="phoneNumber" className='text-white text-lg'>Phone number</label>
        <input
          type="tel"
          value={phoneNumber}
          name='phoneNumber'
          placeholder="Enter mobile number"
          className='rounded-full bg-headerbackground text-base px-4 py-2'
          onChange={handlePhoneNumberChange}
          required={true}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>

      {/* Set Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white text-lg">Set Password</label>
        <div className="relative w-full">
          <button 
            type="button"
            onClick={()=>setPasswordVisibility(!passwordVisibility)} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-300"
          >
            { passwordVisibility ? <Eye /> : <ClosedEye />}
          </button>

          {/* Input */}
          <input
            type={passwordVisibility ? "text" : "password"}
            value={password}
            name="password"
            placeholder="Set password"
            className="w-full rounded-full bg-headerbackground text-base px-4 py-2" 
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </div>
      </div>


      {/* Confirm Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="text-white text-lg">Confirm Password</label>
        <div className="relative w-full">
          <button 
            type="button"
            onClick={()=>setPasswordVisibility(!passwordVisibility)} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-300"
          >
            { passwordVisibility ? <Eye /> : <ClosedEye />}
          </button>

          {/* Input */}
          <input
            type={passwordVisibility ? "text" : "password"}
            value={confirmPassword}
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full rounded-full bg-headerbackground text-base px-4 py-2" 
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
          />
        </div>
        {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <input
          type="checkbox"
          id="terms"
          className="w-3 h-3 rounded-full border-2 border-gray-400 appearance-none checked:bg-primary checked:border-primary focus:outline-none"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          required={true}
        />
        <label htmlFor="terms" className="text-white text-sm">
          I have read and agree [Privacy Agreement]
        </label>
      </div>

      {/* Submit Button */}
      <div className='flex flex-col gap-4 items-center'>
        <button
          type="submit"
          disabled={!isChecked}
          className={isChecked ? 
            "min-w-[100%] sm:min-w-[70%] mt-3 bg-primary rounded-full text-black font-semibold text-sm sm:text-md px-4 py-2 text-center" : 
            "min-w-[100%] sm:min-w-[70%] mt-3 bg-primary rounded-full text-black font-semibold text-sm sm:text-md px-4 py-2 text-center opacity-70"}
        >
          Register
        </button>
        <button
          className='min-w-[100%] sm:min-w-[70%] border-solid border-2 border-primary rounded-full px-4 py-2'
          onClick={()=>{setPage('login')}}
        > 
          <span className='opacity-70 text-sm text-headertextcolor font-semibold'>I have an account</span>
          <span className='text-primary text-sm font-semibold'>&nbsp;Log in</span>
        </button>
      </div>
    </form>
  );

  const loginForm = (
    <form className='p-3 gap-4 flex flex-col' onSubmit={handleLoginSubmit}>
      {/* Phone Number */}
      <div className='flex flex-col gap-2'>
        <label htmlFor="phoneNumber" className='text-white text-lg'>Phone number</label>
        <input
          type="tel"
          value={phoneNumber}
          name='phoneNumber'
          placeholder="Enter mobile number"
          className='rounded-full bg-headerbackground text-base px-4 py-2'
          onChange={handlePhoneNumberChange}
          required={true}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white text-lg">Set Password</label>
        <div className="relative w-full">
          <button 
            type="button"
            onClick={()=>setPasswordVisibility(!passwordVisibility)} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-300"
          >
            { passwordVisibility ? <Eye /> : <ClosedEye />}
          </button>

          {/* Input */}
          <input
            type={passwordVisibility ? "text" : "password"}
            value={password}
            name="password"
            placeholder="Set password"
            className="w-full rounded-full bg-headerbackground text-base px-4 py-2" 
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center'>
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            id="terms"
            className="w-3 h-3 rounded-full border-2 border-gray-400 appearance-none checked:bg-primary checked:border-primary focus:outline-none"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="text-white text-sm">
            Remember password
          </label>
        </div>
        <div className='mt-3 py-0'>
          <a href="#" className='my-0 text-sm text-primary font-normal'>Forgot Password</a>
        </div>
      </div>

      {/* Submit Button */}
      <div className='flex flex-col gap-4 items-center'>
        <button
          type="submit"
          className="min-w-[100%] sm:min-w-[70%] mt-3 bg-primary rounded-full text-black font-semibold text-sm sm:text-md px-4 py-2 text-center"
        >
          Log&nbsp;in
        </button>
        <button
          className='min-w-[100%] sm:min-w-[70%] border-solid border-2 border-primary rounded-full px-4 py-2'
          onClick={()=>{setPage('register')}}
        > 
          <span className='text-primary text-sm font-semibold'>&nbsp;Register</span>
        </button>
      </div>
    </form>
  );

  

  return (
    <div className='text-slate-300 bg-inherit w-full'>
      <div className=''>
        {page === 'login' ? loginHeader : registerHeader}
      </div>
      
      {page === 'login' ? loginForm : registerForm}
    </div>
  );
}

export default LoginPage;
