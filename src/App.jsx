import './App.css';
import LoginPage from './components/pages/loginPage';

function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-center bg-slate-200 min-h-screen'>
        <div className='sm:rounded-2xl p-1 w-full sm:max-w-lg min-h-screen sm:min-h-fit bg-primarybackground'>
          <LoginPage />
        </div>
      </div>
    </>
  )
}

export default App
