export const addColor=(data)=>{

    return {
        type:"SET_COLOR",
        data:data
    };
};

export const addHoverColor=(data)=>{

    return {
        type:"SET_HOVER_COLOR",
        data:data
    };
};