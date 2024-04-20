import React, { useEffect, useState } from 'react'
import { PageContainer, StyledButton, StyledForm, StyledInput, StyledText } from '../AddStudent/AddStudentStyle'
import axios from '../../Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingContainer } from '../StudentTable/StudentTableStyle';
import { Bars } from 'react-loader-spinner';

const EditStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [grade, setGrade] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    const studentId = params.studentId;


    const fetchStudent = () => {
        axios.get(`/student/${studentId}`)
            .then((response) => {
                if (response?.data?.success) {
                    const result = response?.data?.result
                    setStudentName(result?.studentName);
                    setSubjectName(result?.subject?.subjectName);
                    setGrade(result?.grade);
                }
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        if (!studentName || !subjectName || !grade) {
            toast.error('All fields are required');
        } else {
            axios.put(`/students/${studentId}`, {
                studentName,
                subjectName,
                grade
            })
                .then((response) => {
                    if (response?.data?.success) {
                        toast.success(response?.data?.message);
                        setTimeout(() => {
                            navigate('/');
                        }, 1000);
                    }
                })
                .catch((error) => {
                    toast.error(error?.response?.data?.message);
                })
        }
    }

    const handleCancel = () => {
        navigate('/');
    }

    useEffect(() => {
        fetchStudent();
    }, []);

    return (
        <PageContainer>
            <StyledText>Edit Student</StyledText>
            {loading ? (
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
            ) : (
                <StyledForm onSubmit={handleUpdateStudent}>
                    <StyledInput
                        type='text'
                        placeholder='Student Name'
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        autoFocus
                    />
                    <StyledInput type='text'
                        placeholder='Subject Name'
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                    />
                    <StyledInput type='number'
                        placeholder='Grade'
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <StyledButton type='submit'>Add</StyledButton>
                    <StyledButton type="button" $cancel onClick={handleCancel}>Cancel</StyledButton>
                </StyledForm>
            )}
            <ToastContainer
                position="bottom-right"
                closeOnClick
                draggable
                closeButton={false}
                autoClose={2000}
                loading={true}
            />
        </PageContainer>
    )
}

export default EditStudent