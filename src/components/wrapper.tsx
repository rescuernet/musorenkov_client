import React, {ReactNode} from 'react';

interface AuxProps {
    children: ReactNode;
}

export const Wrapper = ({children}: AuxProps) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
};