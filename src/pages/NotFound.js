import React from 'react';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
    <div >
        <h1 style={{ color: 'red', fontSize: '30' }}>
            Error 404
        </h1>
        <h2>No existe la página</h2>
        <ButtonBackToHome />
    </div>
)