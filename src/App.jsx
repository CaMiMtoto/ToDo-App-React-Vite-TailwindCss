import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


let initialTodos = [
    { id: 1, title: 'Learn  python', description: 'Rapidly build modern websites without ever leaving your HTML.', completed: false },
    { id: 2, title: 'React for beginners', description: 'Rapidly build modern websites without ever leaving your HTML.', completed: true },
    { id: 3, title: 'PHP forr dummies', description: 'Rapidly build modern websites without ever leaving your HTML.', completed: false },
];
function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(initialTodos);
    const [inputs, setInputs] = useState({});

    const handleInputsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const newTodo = {
            id: todos[todos.length - 1].id + 1,
            title: inputs.title,
            description: inputs.description
        };
        todos.push(newTodo);
        setTodos([...todos]);
        setInputs({});
    }


    const handleChange = (id) => {
        console.log(id);
        let index = todos.findIndex(i => i.id === id);
        todos[index].completed = !(todos[index].completed);
        console.log(todos);
        setTodos([...todos]);
    }

    return (
        <div className='h-screen flex flex-col md:flex-row max-w-4xl mx-auto md:space-x-6'>
            <div className="text-left p-4 bg-gray-50 border  h-[90%] rounded-xl ">
                <div className='ml-3 '>
                    <h1 className='text-2xl font-bold '>Notes</h1>
                    <div className='flex text-xs space-x-3 my-2 border rounded-lg px-4 py-2 w-fit'>
                        <span className='text-green-500 '>Completed: <span>{todos.filter(t => t.completed).length}</span> </span>
                        <span className='text-indigo-500 '>Inprogress: <span>{todos.filter(t => !t.completed).length}</span> </span>
                    </div>
                </div>

                <div className='flex px-3 flex-col  space-y-3 h-[80%] overflow-y-auto scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200'>
                    {
                        todos.sort((a,b)=>a.id<b.id?1:0).map(item => {
                            return <div className='flex' key={item.id}>
                                <input onChange={() => handleChange(item.id)} checked={item.completed} type="checkbox" className="rounded text-indigo-500  mt-1" />
                                <div className='ml-2 '>
                                    <h4 className={"font-semibold " + (item.completed ? 'line-through' : '')}>{item.title}</h4>
                                    <p className='text-gray-500 text-xs'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>
            <form onSubmit={handleSubmit}
                className='text-left flex flex-col h-fit space-y-3 px-4 py-4 bg-gray-50 border  mt-3 md:mt-0 rounded-xl text-sm'>
                <h1 className='font-semibold'>Add Note</h1>
                <input value={inputs.title || ""}
                    onChange={handleInputsChange} type="text" name="title" className="form-input px-4 py-1 rounded-lg w-full text-sm" placeholder="Title" />
                <textarea value={inputs.description || ""} name="description"
                    onChange={handleInputsChange} className='form-textarea form-input px-4 py-1 rounded-lg w-full text-sm' placeholder="Description"></textarea>
                <button className='px-4 py-2 bg-indigo-500 text-white  rounded-lg hover:bg-indigo-700 text-sm'>Save Note</button>
            </form>
        </div>
    )
}

export default App
