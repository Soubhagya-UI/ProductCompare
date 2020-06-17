import {
    CHECK_BOX_CLICKED
} from './selectTypes'

export const checkboxClick = ischeck =>{
    return {
        type: CHECK_BOX_CLICKED,
        payload: ischeck
    }
}
