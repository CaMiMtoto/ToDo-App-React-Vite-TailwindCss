import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="grid place-items-center">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="my-4">
                <button className="px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-700  font-semibold" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
