import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const InputToDo = (props) => {
  const [inputValue, setInputValue] = useState('');

  const { addTodoProps } = props;

  const newInputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodoProps(inputValue);
      setInputValue('');
    } else {
      alert('Please do not leave an empty task!');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
     <input type="text" className="input-text" placeholder="Add Todo..." name="inputValue" value={inputValue} onChange={newInputValueHandler} />
        <button className="input-submit"><AiOutlinePlus/></button>
    </form>
  );
};

export default InputToDo;
