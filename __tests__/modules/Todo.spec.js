import {Todo} from '../../modules/Todo';

describe('Todoクラスのテスト', ()=>{
    it('this._getterのテストをもつ', ()=>{
        const text = 'ダミー';
        const todo = new Todo(text);

        expect(todo._text).toStrictEqual(text);

    })

    it('hasCompletedを実行するとthis._completedが返る', ()=>{
        const text = 'ダミー';
        const todo =  new Todo(text);

        expect(todo.hasCompleted()).toStrictEqual(todo._completed);
    })

    it('toggle()を実行すると真偽値が反転する', ()=>{
        const text = 'ダミー';
        const todo =  new Todo(text);

        expect(todo._completed).toStrictEqual(false);

        todo.toggle();
        expect(todo._completed).toStrictEqual(true);

    })

    }
    )