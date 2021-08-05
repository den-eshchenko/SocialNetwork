import { DialogsTextDataType, InterlocutorDataType } from "../types/types";
import { ActionsType } from "./reduxStore";

let defaultStateFromDialogsPage = {
    dialogsTextData: [ // для Dialogs - текст
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' }
    ] as Array<DialogsTextDataType>,
    dialogCurrentText: 'default text' as string | undefined,
    interlocutorData: [ // для Dialogs - собеседники
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sergey' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Anna' },
        { id: 6, name: 'Maria' }
    ] as Array<InterlocutorDataType>
}

export type DefaultStateFromDialogsPageType = typeof defaultStateFromDialogsPage;

const dialogsPageReduser = (state = defaultStateFromDialogsPage, action: ActionsDialogsType): DefaultStateFromDialogsPageType => {
    switch (action.type) {
        case 'ADD_DIALOG_MESSAGE':
            return {
                ...state,
                dialogsTextData: [...state.dialogsTextData, { id: 4, message: state.dialogCurrentText }],
                dialogCurrentText: ''
            }
        case 'UPDATE_DIALOG_CURRENT_TEXT':
            return {
                ...state,
                dialogCurrentText: action.newText
            }
        default:
            return state;
    }
}

export type ActionsDialogsType = ActionsType<typeof actionsDialog>

export const actionsDialog = {
    updateDialogCurrentTextActionCreator: (text: string | undefined) => ({
            type: 'UPDATE_DIALOG_CURRENT_TEXT',
            newText: text
    } as const),
    addDialogMessageActionCreator: () => ({ type: 'ADD_DIALOG_MESSAGE' } as const)
}

export default dialogsPageReduser;
