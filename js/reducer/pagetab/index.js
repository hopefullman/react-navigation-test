const defaultState={
	
}
export default (state=defaultState,action)=>{
	if (action.type === 'getdataAction') {
		const newState = JSON.parse(JSON.stringify(state));
		newState[`${action.name}`] = action.list;
		return newState;
	}
	return state
}