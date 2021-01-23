export const setTextFilter = (text = "") => {
    return {
      type: "EDIT_TEXT_FILTER",
      text
    }
  }
  
export const sortByDate = () => {
    return {
      type: "SORT_BY_DATE"
    }
  }
  
export const sortByExpense = () => {
    return {
      type: "SORT_BY_EXPENSE"
    }
  }
  
export const setStartDate = (date) => {
    return {
      type: "SET_START_DATE",
      date
    }
  }
  
export const setEndDate = (date) => {
    return {
      type: "SET_END_DATE",
      date,
    }
  }