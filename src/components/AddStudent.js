import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import './App.css';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    mail: "",
    phone: "",
    branch: ""
  });

  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/students");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        const response = await axios.patch(`http://localhost:9000/students/${editId}`, studentData);
        console.log("Student Updated", response.data);
      } else {
        const response = await axios.post("http://localhost:9000/students", studentData);
        console.log("Student Added:", response.data);
      }
      setEditing(false);
      setEditId(null);
      setStudentData({
        name: "",
        mail: "",
        phone: "",
        branch: ""
      });
      fetchData();
    } catch (error) {
      console.error("Error creating Student:", error);
    }
  };

  const handleEdit = (student) => {
    setEditing(true);
    setEditId(student._id);
    setStudentData({
      name: student.name,
      mail: student.mail,
      phone: student.phone,
      branch: student.branch
    });
  };

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/students/${id}`);
      console.log("Student deleted:", id);
      if (response.status === 200) {
        setData((preData) => preData.filter((student) => student._id !== id));
      } else {
        console.error("Error deleting student, server responded with", response.status);
      }
    } catch (error) {
      console.error("Error deleting Student:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = (data) => {
    return data.filter((dataObj) =>
      Object.values(dataObj).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    const filteredData = search(data);
    setData(filteredData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <label>
            Name:
            <input type="text" name="name" value={studentData.name} onChange={handleChange} />
          </label>
          <br />
          <label>
            Mail:
            <input type="text" name="mail" value={studentData.mail} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone:
            <input type="number" name="phone" value={studentData.phone} onChange={handleChange} />
          </label>
          <br />
          <label>
            Branch:
            <input type="text" name="branch" value={studentData.branch} onChange={handleChange} />
          </label>
          <br />
          <Button variant="contained" type="submit">{editing ? 'Update Student' : 'Add Student'}</Button>
        </center>
      </form>

      <h2>Students:</h2>

      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user"
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </div>
      
      <center>
        <div className="container">
          {data.map((student) => (
            <div key={student._id} className="card">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Mail:</strong> {student.mail}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Branch:</strong> {student.branch}</p>
              <Button variant="contained" size="small" onClick={() => handleEdit(student)}>Edit</Button>
              <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteStudent(student._id)}>Delete</Button>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default AddStudent;






