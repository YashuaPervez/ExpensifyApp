import moment from 'moment';

const filterReducerDefaultState = {

    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf("month"),
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){

        case "EDIT_TEXT_FILTER":

            return { ...state, text: action.text }

        case "SORT_BY_DATE":

            return { ...state, sortBy: "date" }

        case "SORT_BY_EXPENSE":

            return { ...state, sortBy: "expense" }

        case "SET_START_DATE":

            console.log(state, "From Inside");
            return { ...state, startDate: action.date }

        case "SET_END_DATE":
          
            return { ...state, endDate: action.date }

        default:

            return state;
    }
}

export default filterReducer;