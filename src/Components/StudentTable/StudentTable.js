import React, { useEffect, useState } from 'react'
import { LoadingContainer, Table, TableCell, TableContainer } from './StudentTableStyle'
import { MdEditSquare, MdDelete } from "react-icons/md";
import axios from '../../Config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner';

const StudentTable = ({ searchQuery, filter }) => {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchStudents = () => {
        axios.get('students')
            .then((response) => {
                if (response?.data?.success) {
                    setStudents(response?.data?.results);
                }
            }).catch((error) => {
                toast.error(error?.response?.data?.results)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const handleEditStudent = (studentId) => {
        navigate(`/edit-student/${studentId}`);
    };

    const handleDeletetStudent = (studentId) => {
        setLoading(true);
        axios.delete(`/students/${studentId}`)
            .then((response) => {
                if (response?.data?.success) {
                    toast.success(response?.data?.message);
                    setStudents(prevStudents => prevStudents.filter(student => student._id !== studentId));
                }
            })
            .catch((error) => {
                toast(error?.response?.data?.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const filteredStudents = students.filter(student => {

        const isNameMatch = student.studentName.toLowerCase().startsWith(searchQuery.toLowerCase());

        const isRemarksMatch = filter === '' || student.remarks === filter;

        return isNameMatch && isRemarksMatch;
    });

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <TableContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Subject Name</th>
                        <th>Grade</th>
                        <th>Remarks</th>
                        {students.length > 0 && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5">
                                <LoadingContainer>
                                    <Bars
                                        height="50"
                                        width="80"
                                        color="#184e77"
                                        ariaLabel="bars-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                </LoadingContainer>
                            </td>
                        </tr>
                    ) : (
                        students && filteredStudents.map((student) => (
                            <tr key={student?._id}>
                                <TableCell>{student?.studentName}</TableCell>
                                <TableCell>{student?.subject?.subjectName}</TableCell>
                                <TableCell>{student?.grade}</TableCell>
                                <TableCell $color={student?.remarks}>{student?.remarks}</TableCell>
                                <TableCell>
                                    <button onClick={() => handleEditStudent(student._id)}><span><MdEditSquare size={20} /></span></button>
                                    <button onClick={() => handleDeletetStudent(student._id)} disabled={loading}><span><MdDelete size={20} /></span></button>
                                </TableCell>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            <ToastContainer
                position="bottom-right"
                closeOnClick
                draggable
                closeButton={false}
                autoClose={2000}
                loading={true}
            />
        </TableContainer>
    )
}

export default StudentTable