import { useState } from "react";

export default function NewTask(props:{onAdd:(enteredTask:string)=>void}) {
  const [enteredTask, setEnteredTask] = useState('');
  function handleChange(text:string) {
    setEnteredTask(text)
  }

  function handleClick(){
    props.onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 mr-5"
        onChange={(event)=>handleChange(event.target.value)}
        value={enteredTask}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}> Add Task</button>
    </div>
  );
}
