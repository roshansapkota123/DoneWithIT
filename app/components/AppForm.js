import React from 'react';
import Formik from 'formik';

function AppForm({ initialValues, onSubmit, validationSchema, children}) {
    return(
        <Formik
            initialValues = {initialValues}
            initialValues = {onSubmit}
            onSubmit = {values => console.log(values)}
            validationSchema = {validationSchema}
        >
        { () => (
            <>
            {children}
             </>
        )}
        </Formik>
    );
}

export default AppForm;