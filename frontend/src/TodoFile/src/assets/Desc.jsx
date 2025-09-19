import Style from '../css_modules/Desc.module.css'
// import { useContext } from 'react';
// import { TodoDataFile } from '../datafile/DataFile';
import { useSelector } from 'react-redux';



const Description12 = () => {

  const data = useSelector((store) => store.TODO);
  // console.log("Description" , data);

  // const {currentData} = useContext(TodoDataFile);

    return (
      <>
        { data.length === 0 &&
        (<p className={`${Style.welcome}`}>
          Have a Nice Day!!!
        </p>
        )}
        </>
    );

};

export default Description12;