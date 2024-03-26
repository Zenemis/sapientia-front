import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MatDiag from './001-MatrixDiagonalization/MatDiag';

function Exercises() {
    return (
        <Routes>
            <Route path="/matrix-diagonalization" element={<MatDiag/>} />
        </Routes>
    );
}

export default Exercises;
