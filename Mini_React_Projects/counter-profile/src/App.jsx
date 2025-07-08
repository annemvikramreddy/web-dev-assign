import React,{useState} from 'react';
import Counter from './components/Counter/Counter';
import Profile from './components/Profile/Profile';
import UsersList from './components/UsersList/UsersList';
import Timer from './components/Timer/Timer';
import TaskList from './components/TaskList/TaskList';
import Card from './components/Card/Card';

export default function App() {

   const [showAssignment2, setShowAssignment2] = useState(false);
  return (<>
    <button onClick={() => setShowAssignment2(prev => !prev)}>
        {showAssignment2 ? 'Show Assignment 1' : 'Show Assignment 2'}
      </button>
      {showAssignment2 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
          <Card>
            <h2>Users</h2>
            <UsersList />
          </Card>
          <Card>
            <h2>Timer</h2>
            <Timer />
          </Card>
          <Card>
            <h2>Tasks</h2>
            <TaskList />
          </Card>
        </div>
      ) : (
    <div style={{ width:"100vw", margin: '2rem auto', fontFamily: 'sans-serif',display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
       }}>
      <Counter />
      <hr />
      <Profile name="Alice" email="alice@example.com" age={25} />
    </div>
  )
}
</>)
}