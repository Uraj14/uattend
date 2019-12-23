import { dispatch } from '@rematch/core'

export const count = {
    state: 0,
    reducers: {
        add: (state) => state + 1
    },
    effects: {
        addAsync: async() => {
            dispatch.count.add();
        }
    }
}