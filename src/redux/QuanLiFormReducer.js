let initialState = {
  mangThongTin: JSON.parse(localStorage.getItem("DATA_JSON")) || [],
  thongTinChinhSua: null,
};

export const QuanLiFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_FORM": {
      const newList = [...state.mangThongTin, action.payload];
      localStorage.setItem("DATA_JSON", JSON.stringify(newList));
      return { ...state, mangThongTin: newList };
    }
    case "DELETE_FORM": {
      const newList = state.mangThongTin.filter(
        (sv) => sv.maSv !== action.payload
      );
      localStorage.setItem("DATA_JSON", JSON.stringify(newList));
      return { ...state, mangThongTin: newList };
    }
    case "EDIT_FORM": {
      return { ...state, thongTinChinhSua: action.payload };
    }
    case "UPDATE_FORM": {
      const updateSV = state.mangThongTin.map((sv) =>
        sv.maSv === action.payload.maSv ? action.payload : sv
      );
      localStorage.setItem("DATA_JSON", JSON.stringify(updateSV));
      return { ...state, mangThongTin: updateSV };
    }
    default:
      return state;
  }
};

export default QuanLiFormReducer;
