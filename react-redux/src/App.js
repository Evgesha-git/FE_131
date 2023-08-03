import { useDispatch, useSelector } from 'react-redux';
import { cashActions } from './store/redusers/cashReducer';
import { useAction } from './hooks/useAction';


import './App.css';

function App() {
  const dispatch = useDispatch();
  const { cash } = useSelector(state => state.cash);
  const { users, loading, error } = useSelector(state => state.user)
  const { addUserAction, removeUserAction, addAsyncUsers } = useAction();

  const addCash = (cash) => {
    dispatch({ type: cashActions.ADD_CASH, payload: cash });
  }
  const getCash = (cash) => {
    dispatch({ type: cashActions.GET_CASH, payload: cash });
  }

  const addUser = name => {
    const user = {
      name: {
        firstname: name
      },
      id: Date.now()
    }

    addUserAction([user]);
  }

  return (
    <div className="App">
      <div style={{ fontSize: 28 }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(+prompt())}>Положить на счет</button>
        <button onClick={() => getCash(+prompt())}>Снять со счета</button>
        <button onClick={() => addUser(prompt())}>Добавить пользователя</button>
        <button onClick={addAsyncUsers}>Добавить пользователей</button>
      </div>
      <div>
        {users.length > 0 ?
          users.map((user, i) =>
            <div
              key={i.toString()}
              onClick={() => removeUserAction(user.id)}
            >{user.name.firstname}</div>
          ) :
          (<div>Нет пользователей</div>)
        }
      </div>
    </div>
  );
}

export default App;
