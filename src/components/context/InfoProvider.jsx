import { useState } from 'react';
import infoContext from './infoContext';

export default function InfoProvider({ children }) {
    const [value, setValue] = useState({
        1: '',
        2: '',
        3: '',
    });

    const [date, setDate] = useState(true);

    const [choosePlan, selectChoosePlan] = useState('Arcade');

    return (
        <infoContext.Provider
            value={{
                value,
                setValue,
                date,
                setDate,
                choosePlan,
                selectChoosePlan,
            }}
        >
            {children}
        </infoContext.Provider>
    );
}
