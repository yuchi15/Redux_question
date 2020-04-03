import {visibleFilterReducer} from '../../reducer/visibleFilterActionCreatorReducer';
import { SHOW_ALL , SHOW_ACTIVE, SHOW_COMPLETED} from '../../action/visibleFilterActionCreator';
import {showAll, showActive, showCompleted } from '../../action/visibleFilterActionCreator';


describe('visibleFilterReducerのテスト', ()=>{
    const createInitialState = () =>{
        const mockAction = {};
        const state = visibleFilterReducer(undefined, mockAction);

        return state;

    }

    it('何もいれてないときは、state = SHOW_ALLがかえる', ()=>{
        const state = createInitialState();
        expect(state).toStrictEqual(SHOW_ALL);
    })

    it('SHOW_ALLをいれたときはSHOW_ALLがかえる', ()=>{
        const action = showAll();
        const state = visibleFilterReducer(SHOW_ALL, action);

        expect(state).toStrictEqual(SHOW_ALL);
        
    })

    it('SHOW_ACTIVEをいれたときはSHOW_ACTIVEがかえる', ()=>{
        const action = showActive();
        const state = visibleFilterReducer(SHOW_ACTIVE, action);

        expect(state).toStrictEqual(SHOW_ACTIVE);
        
    })

    it('SHOW_COMPLETEDをいれたときはSHOW_COMPLETEDがかえる', ()=>{
        const action = showCompleted();
        const state = visibleFilterReducer(SHOW_COMPLETED, action);

        expect(state).toStrictEqual(SHOW_COMPLETED);
        
    })




})