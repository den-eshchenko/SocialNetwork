import proffilePageReduser, { addPostActionCreator, deletePostAC } from "./proffilePageReduser"

//1 сделать тестовые данные
let state = {
    postData: [
        { id: 1, message: 'Пост 1', likesCount: '11' },
        { id: 2, message: 'Пост 2', likesCount: '88' }
      ]
}

it('test add posts', () => {
//2 запустить с ними моудль - reduser, в данном случае
let action = addPostActionCreator('new post test message');
let newState = proffilePageReduser(state, action);

//3 вурнуть значение - результат, ожидаемый
expect(newState.postData.length).toBe(3);
})

it('test correct message', () => {
    //2 запустить с ними моудль - reduser, в данном случае
    let action = addPostActionCreator('new post test message');
    let newState = proffilePageReduser(state, action);
    
    //3 вурнуть значение - результат, ожидаемый
    expect(newState.postData[2].message).toBe('new post test message');
})

it('test delete post', () => {
    //2 запустить с ними моудль - reduser, в данном случае
    let action = deletePostAC(1);
    let newState = proffilePageReduser(state, action);
    
    //3 вурнуть значение - результат, ожидаемый
    expect(newState.postData.length).toBe(1);
})