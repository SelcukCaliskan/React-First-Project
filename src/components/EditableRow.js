import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <CustomInput type={'text'} name={'fullName'} required={'required'} placeholder={'Enter a name'} value={editFormData.fullName} event={handleEditFormChange} />
            </td>
            <td>
                <CustomInput type={'text'} name={'address'} required={'required'} placeholder={'Enter an address...'} value={editFormData.address} event={handleEditFormChange} />
            </td>
            <td>
                <CustomInput type={'text'} name={'phoneNumber'} required={'required'} placeholder={'Enter a phone number...'} value={editFormData.phoneNumber} event={handleEditFormChange} />
            </td>
            <td>
                <CustomInput type={'email'} name={'email'} required={'required'} placeholder={'Enter an email...'} value={editFormData.email} event={handleEditFormChange} />
            </td>
            <td>
                <CustomButton type={'submit'} buttonName={'Save'} />
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
