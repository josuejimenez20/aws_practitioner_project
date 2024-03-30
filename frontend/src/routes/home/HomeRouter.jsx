import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseInformation from '../../components/home/menus/CourseInformation';
import Exams from '../../components/home/menus/Exams';
import FirstExam from '../../components/home/menus/exams/FirstExam';
import { SecondExam } from '../../components/home/menus/exams/SecondExam';
import { ThirdExam } from '../../components/home/menus/exams/ThirdExam';
import FourthExam from '../../components/home/menus/exams/FourthExam';
import FivethExam from '../../components/home/menus/exams/FivethExam';

export default function HomeRouter() {

    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<h2>HOME PRINCIPAL</h2>} />
                <Route path='/information' element={<CourseInformation />} />
                <Route path='/exams' element={<Exams />} />
                <Route path='/exam/1' element={<FirstExam />} />
                <Route path='/exam/2' element={<SecondExam />} />
                <Route path='/exam/3' element={<ThirdExam />} />
                <Route path='/exam/4' element={<FourthExam />} />
                <Route path='/exam/5' element={<FivethExam />} />

            </Routes>
        </>
    )
}