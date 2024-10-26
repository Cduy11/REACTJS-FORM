export const CreateFrom = (formData) => {
    return {
        type: "CREATE_FORM",
        payload: formData,
    }
}

export const DeleteForm = (maSv) => {
    return {
        type:"DELETE_FORM",
        payload:maSv,
    }
}

export const EditForm = (formData) => {
    return{
        type: "EDIT_FORM",
        payload: formData,
    }
}

export const UpdateForm = (formdata) => {
    return{
        type: "UPDATE_FORM",
        payload: formdata,
    }
}