import React, { useState } from 'react'
import StudentTable from '../../Components/StudentTable/StudentTable'
import { Button, FilterContainer, HeaderContainer, PageContainer, SearchInput, SelectFilter } from './HomePageStyle'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();


    const handleAddStudent = () => {
        navigate('/add-student');
    };

    return (
        <PageContainer>
            <HeaderContainer>
                <FilterContainer>
                    <SearchInput
                        type="text"
                        placeholder="Search by student name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SelectFilter value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value=''>All</option>
                        <option value='PASS'>Pass</option>
                        <option value='FAIL'>Fail</option>
                    </SelectFilter>
                </FilterContainer>
                <Button onClick={handleAddStudent}>Add Student</Button>
            </HeaderContainer>
            <StudentTable searchQuery={search} filter={filter} />
        </PageContainer>
    )
}

export default HomePage