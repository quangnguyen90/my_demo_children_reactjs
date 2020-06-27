import React from 'react';
import RandomNumber from './RandomNumber';
import { RandomNumberProvider } from './RandomNumberContext';

function FuncUseContext() {
    return (
        <RandomNumberProvider>
            <div className="FuncUseContext">
                <RandomNumber />
            </div>
        </RandomNumberProvider>
    );
}

export default FuncUseContext;