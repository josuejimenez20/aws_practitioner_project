import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseInformation from '../../components/home/menus/CourseInformation';
import Exams from '../../components/home/menus/Exams';
import FirstExam from '../../components/home/menus/exams/FirstExam';

export default function HomeRouter() {

    return (
        <>
            <Routes>
                <Route path='*' element={<h1>Not Found</h1>} />
                <Route path='/' element={<h2>HOME PRINCIPAL</h2>} />
                <Route path='/information' element={<CourseInformation />} />
                <Route path='/exams' element={<Exams />} />
                <Route path='/exam/1' element={<FirstExam />} />

            </Routes>
        </>
    )
}