import { v4 as uuidv4 } from 'uuid';

function Dropdown({idVal, stateVar, onChange, optionsArray}) {

    return (
       <select
       id={idVal}
       value={stateVar}
       onChange={onChange}>
        {
            optionsArray.map(({val, name}) => 
            <option
            key={uuidv4()} 
            value={val}>{name}</option>)
        }
       </select>
    );
}

export default Dropdown;