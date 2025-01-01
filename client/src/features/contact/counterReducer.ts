
export interface CounterState {
    data: number;
    title: string;
}


const initializeState: CounterState = {
    data: 42,
    title: 'YARC (Yet another redux counter)'
}

export function counterReducer(state = initializeState) {

    return state;
}