import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function IncomeForm () {
   const [formState, setFormState] = useState()

   return (
    <div className='container'>
        <form>
            
        </form>
    </div>
   )
}

export default IncomeForm