import {todoActionCreatorReducer} from '../../reducer/todoReducer';
import { Todo } from '../../modules/Todo';
import {
    addTodo,
    deleteTodo,
    toggleTodoCompleted
  } from '../../action/todoActionCreator';

describe('', ()=>{
    it('action.type === addTodoのときTodoに1件追加される', ()=>{
        const dummytext = 'ダミー';
        const action = addTodo(dummytext);
        const initialState = [];
        const todo = new Todo(dummytext);
        const newState = todoActionCreatorReducer(initialState, action);

        expect(newState).toStrictEqual([todo]);
    })

    it('action.type === deleteTodoのときTodoに1件削除される', ()=>{
        const dummyIndex = 1;
        const action = deleteTodo(dummyIndex);
        const initialState = ['jiji', 'hogehoge', 'hugahuga'];
        const newState = todoActionCreatorReducer(initialState, action);

        expect(newState).toStrictEqual([
            'jiji',
            'hugahuga'
        ]);

    })
    
    it('action.type === TOGGLE_TODO_COMPLETEDのときcompletedが変わる', ()=>{
        const addAction = addTodo('ダミーテキスト');
        const initialState = [];
        let newState = todoActionCreatorReducer(initialState, addAction);

        const toggleAction = toggleTodoCompleted(0);
        newState = todoActionCreatorReducer(newState, toggleAction);

        expect(newState[0].hasCompleted()).toStrictEqual(true);

    })
    
})