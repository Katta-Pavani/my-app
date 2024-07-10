import React from "react";
import AddStudent from "./AddStudent";
import './App.css';

const App = () => {
  return (
    <div>
      <AddStudent />
    </div>
  );
};

export default App;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddStudent from "./AddStudent";
// import GetStudents from "./GetStu";

// const App = () => {
//   const [students, setStudents] = useState([]);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/students");
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleStudentAdded = () => {
//     fetchStudents();
//   };

//   return (
//     <div>
//       {/* <h1>Student Management System</h1> */}
//       <AddStudent onStudentAdded={handleStudentAdded} />
//       <GetStudents students={students} />
//     </div>
//   );
// };

// export default App;







// import React, { useState } from "react";
// import axios from "axios";
// import GetData from'./GetStu.js';

// const AddStudent = () => {
//   // State to store the form data
//   const [studentData, setStudentData] = useState({
//     name: "",
//     mail: "",
//     phone: "",
//     branch:""
//   });

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     setStudentData({ ...studentData, [e.target.name]: e.target.value });
//   };

//   // Function to submit the form data using Axios
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:9000/students", studentData);
//       console.log("Student Added:", response.data);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <center>
//       <label>
//         Name:
//         <input type="text" name="name" value={studentData.name} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Mail:
//         <input type="text" name="mail" value={studentData.mail} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Phone:
//         <input type="number" name="phone" value={studentData.phone} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Branch:
//         <input type="text" name="branch" value={studentData.branch} onChange={handleChange} />
//       </label>
//       <br />
//       <button type="submit">Add Student</button>
//       </center>
//       <GetData />
//     </form>
    
//     </div>
//   );
// };

// export default AddStudent;













/*import React,{useState} from 'react'

const App = () => {
  const [inputValue,setInputValue]=useState('');
  const [todos,setTodos]= useState([]);
  const [editIndex,setEditIndex]=useState(null);

  const handler = (e)=>{
    setInputValue(e.target.value);
  };
  const AddTodo = () =>{
    if(inputValue.trim() !== ''){
      if(editIndex!==null)
        {
          const updatedTodos=[...todos];
          updatedTodos[editIndex]={text:inputValue};
          setTodos(updatedTodos);
          setEditIndex(null);
        }
        else
        {
         setTodos([...todos,{text: inputValue}]);
        }
      setInputValue('');
    }
  };
  const EditTodo = (index) =>{
      setInputValue(todos[index].text);
      setEditIndex(index);
  };
  
  const deleteTodo = (index) =>{
      const updateTodos = todos.filter((_,i)=> i!==index);
      setTodos(updateTodos);
      
  };
    
  return (
    <div>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>TODO LIST</h1>
          <input type="text" value={inputValue}
            onChange={handler}
            placeholder="add an item.."  /><br />
          <button onClick={AddTodo}>ADD</button>
        </form>
        <ul>
            {todos.map((todo,index)=>(
                  <li key={index}>
                    {todo.text}
                    <button onClick={()=>deleteTodo(index)}>Delete</button>
                    <button onClick={()=> EditTodo(index) }>Edit</button>
                  </li>
            ))}
        </ul>
        
      </center>
    </div>
  
  );
};

export default App
*/












/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [rollNo, setRollNo] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [students, setStudents] = useState([]);

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const addStudent = () => {
    if (firstName === '') {
      alert('First Name is required');
      return;
    }

    if (!Number.isInteger(Number(rollNo)) || Number(rollNo) <= 0) {
      alert('Roll No should be a positive integer');
      return;
    }

    if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
      alert('Age should be a positive integer');
      return;
    }

    const newStudent = { rollNo, firstName, lastName, age };
    setStudents([...students, newStudent]);
    setRollNo('');
    setFirstName('');
    setLastName('');
    setAge('');
  };

  const editStudent = (index) => {
    const student = students[index];
    setRollNo(student.rollNo);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setAge(student.age);
    setStudents(students.filter((_, i) => i !== index));
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div>
      <center>
        <h2>Enter Student Details:</h2>
        <form id="studentForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="rno">Roll No:</label>
          <input type="number" id="rno" name="rno" value={rollNo} onChange={handleRollNoChange} /><br /><br />
          <label htmlFor="fname">First Name:</label>
          <input type="text" id="fname" name="fname" value={firstName} onChange={handleFirstNameChange} required /><br /><br />
          <label htmlFor="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" value={lastName} onChange={handleLastNameChange} required /><br /><br />
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={age} onChange={handleAgeChange} /><br /><br />
          <button type="button" onClick={addStudent}>Add</button>
          <button type="reset" onClick={() => {
            setRollNo('');
            setFirstName('');
            setLastName('');
            setAge('');
          }}>Reset</button>
        </form>
      </center>
      <div className="container">
        {students.map((student, index) => (
          <div key={index} className="card">
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>First Name:</strong> {student.firstName}</p>
            <p><strong>Last Name:</strong> {student.lastName}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <button onClick={() => editStudent(index)}>Edit</button>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
*/

























/*import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditingComplete, setIsEditingComplete] = useState(false);

  const handler = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        if (isEditingComplete) {
          const updatedTodos = [...completeTodos];
          updatedTodos[editIndex] = { text: inputValue, completed: true };
          setCompleteTodos(updatedTodos);
        } else {
          const updatedTodos = [...incompleteTodos];
          updatedTodos[editIndex] = { text: inputValue, completed: false };
          setIncompleteTodos(updatedTodos);
        }
        setEditIndex(null);
        setIsEditingComplete(false);
      } else {
        setIncompleteTodos([...incompleteTodos, { text: inputValue, completed: false }]);
      }
      setInputValue('');
    }
  };

  const editTodo = (index, isComplete) => {
    if (isComplete) {
      setInputValue(completeTodos[index].text);
      setEditIndex(index);
      setIsEditingComplete(true);
    } else {
      setInputValue(incompleteTodos[index].text);
      setEditIndex(index);
      setIsEditingComplete(false);
    }
  };

  const deleteTodo = (index, isComplete) => {
    if (isComplete) {
      const updatedTodos = completeTodos.filter((_, i) => i !== index);
      setCompleteTodos(updatedTodos);
    } else {
      const updatedTodos = incompleteTodos.filter((_, i) => i !== index);
      setIncompleteTodos(updatedTodos);
    }
  };

  const toggleComplete = (index, isComplete) => {
    if (isComplete) {
      const updatedTodos = [...completeTodos];
      const todo = updatedTodos.splice(index, 1)[0];
      todo.completed = false;
      setCompleteTodos(updatedTodos);
      setIncompleteTodos([...incompleteTodos, todo]);
    } else {
      const updatedTodos = [...incompleteTodos];
      const todo = updatedTodos.splice(index, 1)[0];
      todo.completed = true;
      setIncompleteTodos(updatedTodos);
      setCompleteTodos([...completeTodos, todo]);
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>TODO LIST</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handler}
            placeholder="add an item.."
          /><br />
          <button onClick={addTodo}>ADD</button>
        </form>
        <h2>Incomplete Tasks:</h2>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index, false)}
              />
              <span >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index, false)}>Delete</button>
              <button onClick={() => editTodo(index, false)}>Edit</button>
            </li>
          ))}
        </ul>
        <h2>Completed Tasks:</h2>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index, true)}
              />
              <span>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index, true)}>Delete</button>
              <button onClick={() => editTodo(index, true)}>Edit</button>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default App;
*/
