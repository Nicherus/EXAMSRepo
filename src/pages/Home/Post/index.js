import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExamService from '../../../services/ExamService';

import {
    MainContainer,
    Container,
    Selectable,
    SelectablesContainer,
    Text,
    Input,
    Button,
} from './styles'

const PostOrSearch = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [disciplines, setDisciplines] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedDiscipline, setSelectedDiscipline] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [examName, setExamName] = useState('');
    const [pdfLink, setPdfLink] = useState('');
    const [selecting, setSelecting] = useState('discipline');


    useEffect(() => {
        getDisciplines();
    }, [])

    const getDisciplines = async () => {
        setLoading(true);
        setSelecting('discipline');

        const data = await ExamService.getDisciplines();
        if(data){
            setDisciplines(data);
        } else{
            alert('Oops! please check your connection to internet');
        }

        setLoading(false);
    }

    const getProfessorsByDiscipline = async (discipline) => {
        setLoading(true);
        setSelectedDiscipline(discipline);
        setSelecting('professor')

        const data = await ExamService.getProfessorsByDiscipline(discipline.id);
        if(data){
            setProfessors(data);
        } else{
            alert('Oops! please check your connection to internet');
        }

        setLoading(false);
    }

    const getTypes = async (professor) => {
        setLoading(true);
        setSelectedProfessor(professor);
        setSelecting('type')

        const data = await ExamService.getTypes();
        if(data){
            setTypes(data);
        } else{
            alert('Oops! please check your connection to internet');
        }

        setLoading(false);
    }

    const goFillForm = (type) => {
        setSelectedType(type);
        setSelecting('form');
    }

    const checkFields = () => {
        if(pdfLink === '' || examName === ''){
            return alert('Oops! please fill the pdf link and exam name')
        }
        postExam();
    }

    const postExam = async () => {
        setLoading(true);
        history.push('/home')

        const body = {
            'pdf': pdfLink,
            'name': examName,
            'exams_types_id': selectedType.id,
            'disciplines_id': selectedDiscipline.id,
            'professors_id': selectedProfessor.id,
        }

        const data = await ExamService.postExam(body);
        if(data){
            alert('Ok! your exam was uploaded to our servers!')
        } else{
            alert('Oops! please check your connection to internet');
        }

        setLoading(false);
    }

    return (
        <MainContainer>
            <Container>
            {loading ? null :  
                <>{selecting === 'discipline' ?
                    <>
                    <Text>Select the related discipline:</Text>
                    <SelectablesContainer>
                        {disciplines.map((discipline) =>
                            <Selectable
                                onClick={() => (getProfessorsByDiscipline(discipline))}
                            >
                                {discipline.name}
                            </Selectable>
                        )}
                    </SelectablesContainer>
                    </>
                    :
                    selecting === 'professor' ?
                    <>
                    <Text>Select the related professor:</Text>
                    <SelectablesContainer>
                        {professors.map((professor) =>
                            <Selectable
                                onClick={() => (getTypes(professor))}
                            >
                                {professor.name}
                            </Selectable>
                        )}
                    </SelectablesContainer>
                    </>
                    :
                    selecting === 'type' ?
                    <>
                    <Text>Select the related exam type:</Text>
                    <SelectablesContainer>
                        {types.map((type) =>
                            <Selectable
                                onClick={() => (goFillForm(type))}
                            >
                                {type.name}
                            </Selectable>
                        )}
                    </SelectablesContainer>
                    </>
                    :
                    selecting === 'form' ?
                    <>
                    <Text>Discipline: {selectedDiscipline.name}</Text>
                    <Text>Professor: {selectedProfessor.name}</Text>
                    <Text>Exam Type: {selectedType.name}</Text>
                    <Input 
                        placeholder={'PDF Link'}
                        type={'text'}
                        value={pdfLink}
                        onChange={(e) => setPdfLink(e.target.value)}
                    />
                    <Input 
                        placeholder={'Exam Name'}
                        type={'text'}
                        value={examName}
                        onChange={(e) => setExamName(e.target.value)}
                    />
                    <Button
                        disabled={loading}
                        opacity={loading ? 0.5 : 1}
                        onClick={() => checkFields()}
                    >
                        Post
                    </Button>

                    </>
                    : null
                    }
                </> 
            }
            </Container>
        </MainContainer>
    );
}

export default PostOrSearch;