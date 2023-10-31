import React, { memo, useRef, useState } from 'react'
import { doubleInputContainer, errorContainerStyle, formsubHeadings, initialValues, inputLabel, inputStyles } from './constants'
import { useFormik } from 'formik';
import { calculate } from './helper';

 const  BasicForm = () => {

    const validate = values => {
        const errors = {};
        Object.keys(initialValues).map((key) => {
            if (!values[key]) {
                errors[key] = 'Can not be empty'
            }
        })
        return errors;
    };

    const onSubmit = async (values) => {
        let response = await calculate(values);
        if(response){

        }
    }
    const formik = useFormik({
        initialValues,
        validate,
        validateOnChange: false,
        onSubmit

    });

    const errorContainer = (error) => {
        return (
            <div className=' text-red-400 text-sm'>{error}</div>
        )
    }
    return (
        <div className='w-[100%]'>
            <h1 className='text-black text-left p-5'>Basic Panel Calculator</h1>
            <form className='flex flex-col gap-5 bg-[#f4f5f8] p-5' onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-2 w-[50%]'>
                    <label className={inputLabel}>Panel Set</label>
                    <select value={formik.values.panelSet} className={inputStyles}>
                        <option>Demo Panel Set</option>
                        <option>Enter panel parameters</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className={inputLabel}>Part Size</label>
                    <div className='w-[100%] flex flex-row gap-3  items-center'>
                        <div className={errorContainerStyle}>
                            <input onChange={formik.handleChange} name='partWidth' type='number' min={0} value={formik.values.partWidth} className={inputStyles} placeholder='width' />
                            {(formik.errors.panelWidth) ? errorContainer(formik.errors.panelWidth) : null}
                        </div>

                        {/* <p>x</p> */}
                        <div className={errorContainerStyle}>
                            <input onChange={formik.handleChange} name='partHeight' type='number' min={0} value={formik.values.partHeight} className={inputStyles} placeholder='height' />
                            {(formik.errors.partHeight) ? errorContainer(formik.errors.partHeight) : null}

                        </div>
                    </div>

                </div>
                <div className='w-[100%] flex flex-row gap-3 justify-between'>
                    <div className='flex flex-col w-[45%] gap-2'>
                        <h2 className={formsubHeadings}>Panel Size and Part Space </h2>
                        <label className={inputLabel}>Panel Size</label>
                        <div className={doubleInputContainer}>
                            <div className={errorContainerStyle}>
                                <input   type='number' min={0} className={inputStyles} onChange={formik.onChange} placeholder='width' value={formik.values.PanelWidth} />
                                {/* {(formik.errors.panelWidth) ? errorContainer(formik.errors.panelWidth) : null} */}
                            </div>
                            {/* <p>x</p> */}
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='panelHeight' type='number' min={0} value={formik.values.panelHeight} className={inputStyles} placeholder='height' />
                                {(formik.errors.panelHeight) ? errorContainer(formik.errors.panelHeight) : null}
                            </div>
                        </div>
                        <label className={inputLabel}>Part Space</label>
                        <div className={doubleInputContainer}>
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='horizontalSpace' type='number' min={0} value={formik.values.horizontalSpace} className={inputStyles} placeholder='x' />
                                {(formik.errors.horizontalSpace) ? errorContainer(formik.errors.horizontalSpace) : null}
                            </div>
                            {/* <p>x</p> */}
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='verticalSpace' type='number' min={0} value={formik.values.verticalSpace} className={inputStyles} placeholder='y' />
                                {(formik.errors.verticalSpace) ? errorContainer(formik.errors.verticalSpace) : null}

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[45%] gap-2'>
                        <h2 className={formsubHeadings}>Minimum Panel Borders</h2>
                        <label className={inputLabel}>Panel Borders</label>
                        <div className={doubleInputContainer}>
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='borderLeft' type='number' min={0} value={formik.values.borderLeft} className={inputStyles} placeholder='left' />
                                {(formik.errors.borderLeft) ? errorContainer(formik.errors.borderLeft) : null}

                            </div>
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='borderRight' type='number' min={0} value={formik.values.borderRight} className={inputStyles} placeholder='right' />
                                {(formik.errors.borderRight) ? errorContainer(formik.errors.borderRight) : null}

                            </div>
                        </div>
                        <div className={doubleInputContainer}>
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='borderTop' type='number' min={0} value={formik.values.borderTop} className={inputStyles} placeholder='Top' />
                                {(formik.errors.borderTop) ? errorContainer(formik.errors.borderTop) : null}

                            </div>
                            <div className={errorContainerStyle}>
                                <input onChange={formik.handleChange} name='borderBottom' type='number' min={0} value={formik.values.borderBottom} className={inputStyles} placeholder='Bottom' />
                                {(formik.errors.borderBottom) ? errorContainer(formik.errors.borderBottom) : null}

                            </div>
                        </div>
                    </div>
                </div>
                <button className='bg-[#5cb85c] text-xl text-white p-3 w-fit'>
                    Calculate
                </button>
            </form>
        </div>
    )
}


export default BasicForm
