import store from '../../store/index';
import { SHOW_ALL } from '../../action/visibleFilterActionCreator';

describe('storeのテスト', ()=>{
    it('テスト', ()=>{
        expect(store.getStore()).toStrictEqual({
            todos:[],
            visibleFilter: SHOW_ALL
        })
    })
})