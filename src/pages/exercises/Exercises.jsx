import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Exercises() {
    return (
        <Routes>
            <Route path="/parent/subpage1" element={<div>letroll</div>} />
        </Routes>
    );
}

export default Exercises;
