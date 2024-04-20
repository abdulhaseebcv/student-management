import React, { useState } from 'react'
import { PageContainer, StyledButton, StyledForm, StyledInput, StyledText } from './AddStudentStyle'
import axios from '../../Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [grade, setGrade] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddStudent = (e) => {
        e.preventDefault();
        if (!studentName || !subjectName || !grade) {
            toast.error('All fields are required');
        } else {
            setLoading(true);
            axios.post('/students', {
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
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const handleCancel = () => {
        navigate('/');
    }

    return (
        <PageContainer>
            <StyledText>Add Student</StyledText>
            <StyledForm onSubmit={handleAddStudent}>
                <StyledInput
                    type='text'
                    placeholder='Student Name'
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
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
                <StyledButton type='submit' disabled={loading}>Add</StyledButton>
                <StyledButton type="button" $cancel onClick={handleCancel}>Cancel</StyledButton>
            </StyledForm>
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

export default AddStudent